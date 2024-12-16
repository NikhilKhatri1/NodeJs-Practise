const { sendEmail, statuses } = require("./emailService");

(async () => {
    const emailPayload = { id: "email-123", to: "test@example.com", subject: "Hello", body: "Test email" };

    try {
        const response = await sendEmail(emailPayload);
        console.log(response);
    } catch (error) {
        console.error("Final failure:", error.message);
    }

    console.log("Status Log:", statuses);
})();
