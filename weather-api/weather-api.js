console.log('weather api')

const API_KEY = '8189abfa563e435c2cc758282cfcfa6c'
const body = document.querySelector('body')

function getCityWeather(city) {
  const loading = document.createElement('div')
  loading.innerHTML = 'LOADING'

  body.appendChild(loading)

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8189abfa563e435c2cc758282cfcfa6c`
  ).then((res) => {
    body.removeChild(loading)
    return res.json()
  })
}

const input = document.querySelector('input')
const h2 = document.createElement('h2')
const h3 = document.createElement('h3')
body.appendChild(h2)
body.appendChild(h3)

function renderWeather(weatherData) {
  h2.innerHTML = weatherData.name
  h3.innerHTML = `Temp: ${weatherData.main.temp} C`
}

document.addEventListener('submit', (event) => {
  event.preventDefault()

  const formValue = input.value

  getCityWeather(formValue).then((data) => {
    renderWeather(data)
  })

  input.value = ''
})
