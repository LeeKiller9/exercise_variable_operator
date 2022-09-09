let row1 = document.getElementById('row1')
let row2 = document.getElementById('row2')
let row3 = document.getElementById('row3')
const PI = 3.14159

function exercise_1() {
    let physic_score = prompt("Input Physic Score:")
    let chemistry_score = prompt("Input Chemistry Score:")
    let bio_score = prompt("Input Biology Score:")
    physic_score = parseInt(physic_score)
    chemistry_score = parseInt(chemistry_score)
    bio_score = parseInt(bio_score)
    let sum = physic_score + chemistry_score + bio_score
    let avg = sum / 3
    row1.innerHTML = "Exercise 1"
    row2.innerHTML = "Sum of 3 subjects is: " + sum
    row3.innerHTML = "Avenger of 3 subject is: " + avg
}

function exercise_2() {
    let celsius = prompt("Input Celsius Degree:")
    celsius = parseInt(celsius)
    let fahrenheit = celsius * 9 / 5 + 32
    row1.innerHTML = "Exercise 2"
    row2.innerHTML = celsius + " oC convert to"
    row3.innerHTML = fahrenheit + " oF"
}

function exercise_3() {
    let radius = prompt("Input Radius Of Circle:")
    radius = parseInt(radius)
    let area = PI * radius * radius
    row1.innerHTML = "Exercise 3"
    row2.innerHTML = "Radius of circle is: " + radius
    row3.innerHTML = "Area of circle is: " + area
}

function exercise_4() {
    let radius = prompt("Input Radius Of Circle:")
    radius = parseInt(radius)
    let perimeter = 2 * PI * radius
    row1.innerHTML = "Exercise 4"
    row2.innerHTML = "Radius of circle is: " + radius
    row3.innerHTML = "Perimeter of circle is: " + perimeter
}