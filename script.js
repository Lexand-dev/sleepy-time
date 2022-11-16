const hoursBox = document.getElementById('hoursBox')
const currentDate = new Date()
const newDate = new Date()

const button = document.getElementById('getHours')
const infoBox = document.getElementById('infoBox')

button.addEventListener('click', () => infoBox.classList.add('visible'))

for (let i = 1; i <= 6; i++) {
  newDate.setTime(currentDate.getTime() + ((90 + 14) * i * 60 * 1000))
  const hourToSleep = `${newDate.getHours()}:${newDate.getMinutes()}`
  
  li = document.createElement('li')
  li.innerText = hourToSleep
  hoursBox.appendChild(li)
}