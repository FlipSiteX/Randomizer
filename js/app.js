let result = document.getElementById('result')
const randomNumbersBlock = document.getElementsByClassName('random_numbers')
const randomImagesBlock = document.getElementsByClassName('random_images')
let imgPlace = document.getElementsByClassName('image_place')
let imgArray = ["../img/1.png", "../img/2.png", "../img/3.png"]

let randomNumber = () => {
    const minValue = +document.getElementById('startCount').value
    const maxValue = +document.getElementById('endCount').value
    result.textContent = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
}

let imgPage = () => {
    randomNumbersBlock[0].style.display = "none";
    randomImagesBlock[0].style.display = "block";
}

let numbPage = () => {
    randomNumbersBlock[0].style.display = "block";
    randomImagesBlock[0].style.display = "none";
}

let randomImg = () => {
    let i = imgArray[Math.floor(Math.random() * (imgArray.length))]
    imgPlace[0].style.backgroundImage = `url(${i})`
}