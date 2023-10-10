let result = document.getElementById('result')
const randomNumbersBlock = document.getElementsByClassName('random_numbers')
const randomImagesBlock = document.getElementsByClassName('random_images')
let imgPlace = document.getElementsByClassName('image_place')
let imgArray = ["https://fikiwiki.com/uploads/posts/2022-02/1644874866_27-fikiwiki-com-p-klassnie-kartinki-dlya-vk-27.jpg", "https://get.wallhere.com/photo/cat-face-glasses-thick-1047364.jpg", "https://w-dog.ru/wallpapers/1/16/453860014338874/bmw-m5-staraya-bmv-angelskie-glazki-avto-foto-tachki-avto-oboi-avtomobili.jpg"]

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
    imgPlace[0].style.backgroundImage = `url(${imgArray[Math.floor(Math.random() * (imgArray.length))]})`
}