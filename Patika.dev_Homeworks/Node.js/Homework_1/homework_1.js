const args = process.argv.slice(2);
const radius = parseFloat(args[0]);

if (isNaN(radius) || radius <= 0) {
    console.log("Please enter a valid positive number.");
    process.exit(1); // Geçersiz girişte programı durdur
}

function calculateAreaCircle(radius) {
    const PI = Math.PI;
    const area = PI * Math.pow(radius, 2);
    console.log(`The radius of the circle is ${radius}, the area of the circle is ${area.toFixed(2)}`);
}

calculateAreaCircle(radius);
