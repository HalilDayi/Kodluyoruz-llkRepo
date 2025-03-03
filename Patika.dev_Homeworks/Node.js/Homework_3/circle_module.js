const PI = Math.PI;

function circleArea(radius){
    const area = PI * radius * radius;
    console.log(`The area of the circle is ${area.toFixed(2)}`);
}

function circleCircumference(circum){
    const circumference = 2 * PI * circum;
    console.log(`The circumference of the circle is ${circumference.toFixed(2)}`);
}

module.exports = {circleArea, circleCircumference};