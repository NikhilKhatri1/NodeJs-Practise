const statuses = new Map(); // For tracking email status
const rateLimitTracker = new Map(); // To track rate limits
const MAX_RETRIES = 3; // Max retry count
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds
const MAX_EMAILS_PER_WINDOW = 5; // Rate limit: max emails per window

// Mock Email Providers
const mockProvider1 = async (emailPayload) => {
    console.log("Using Mock Provider 1");
    if (Math.random() < 0.7) throw new Error("Mock Provider 1 failed");
    return "Email sent via Mock Provider 1";
};

const mockProvider2 = async (emailPayload) => {
    console.log("Using Mock Provider 2");
    if (Math.random() < 0.7) throw new Error("Mock Provider 2 failed");
    return "Email sent via Mock Provider 2";
};

// Helper: Exponential backoff
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Core Email Sending Logic
async function sendEmail(emailPayload, providers = [mockProvider1, mockProvider2]) {
    const emailId = emailPayload.id;

    // Check Rate Limiting
    if (!isRateLimited(emailId)) throw new Error("Rate limit exceeded");

    for (let i = 0; i < providers.length; i++) {
        const provider = providers[i];
        for (let retry = 0; retry <= MAX_RETRIES; retry++) {
            try {
                const response = await provider(emailPayload);
                trackStatus(emailId, "Success");
                return response;
            } catch (error) {
                console.error(`Provider ${i + 1} attempt ${retry + 1} failed:`, error.message);
                if (retry < MAX_RETRIES) await sleep(2 ** retry * 100); // Exponential backoff
            }
        }
        console.log(`Switching to next provider`);
    }

    trackStatus(emailId, "Failed");
    throw new Error("All providers failed");
}

// Helper: Rate Limiting
function isRateLimited(emailId) {
    const now = Date.now();
    const tracker = rateLimitTracker.get(emailId) || [];
    const filtered = tracker.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW);
    if (filtered.length >= MAX_EMAILS_PER_WINDOW) return false;
    filtered.push(now);
    rateLimitTracker.set(emailId, filtered);
    return true;
}

// Helper: Track Status
function trackStatus(emailId, status) {
    statuses.set(emailId, status);
    console.log(`Email ID: ${emailId}, Status: ${status}`);
}

// Exported Service
module.exports = {
    sendEmail,
    trackStatus,
    isRateLimited,
    statuses,
};
