// Store circles data
let circles = [];

// Maximum number of circles
const MAX_CIRCLES = 2;

document.body.addEventListener('click', (event) => {
    if (circles.length >= MAX_CIRCLES) {
        // On the third click, remove all circles
        circles = [];
        document.querySelectorAll('.circle').forEach(circle => circle.remove());
        console.log('All circles removed');
        return;
    }

    // Generate a random radius less than 200px
    const radius = Math.floor(Math.random() * 200) + 1;

    // Create a new circle element
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.style.left = `${event.clientX - radius}px`;
    circle.style.top = `${event.clientY - radius}px`;

    // Append to the body
    document.body.appendChild(circle);

    // Store circle's information for intersection check
    circles.push({
        x: event.clientX,
        y: event.clientY,
        radius: radius,
    });

    // Check for intersection
    if (circles.length === 2) {
        const [circle1, circle2] = circles;
        const isIntersecting = checkIntersection(circle1, circle2);
        console.log(isIntersecting ? 'Circles are intersecting' : 'Circles are not intersecting');
    }
});

// Function to check if two circles intersect
function checkIntersection(c1, c2) {
    const dx = c1.x - c2.x;
    const dy = c1.y - c2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (c1.radius + c2.radius);
}
