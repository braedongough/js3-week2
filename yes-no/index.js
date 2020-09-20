console.log('yes - no')

async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

async function getName() {
  return 'Braedon'
}

async function getAnswer() {
  try {
    const data = await fetchData('https://yesno.wtf/api')

    console.log('async - with fetchData', data.answer)
  } catch (error) {
    console.log(error)
  }
}

getAnswer()

// fetch('https://yesno.wtf/api')
//   .then((res) => res.json())
//   .then((data) => console.log('promise', data))
//   .catch((error) => console.log(error))
