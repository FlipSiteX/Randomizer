let result = document.getElementById('result')

let random = () => {
    const minValue = +document.getElementById('startCount').value
    const maxValue = +document.getElementById('endCount').value
    result.textContent = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
}