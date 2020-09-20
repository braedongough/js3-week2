console.log('promise creation')

const resolvedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('reject!!!')
    resolve('resolved!!')
  }, 4000)
})

async function getResolvedPromise() {
  try {
    const data = await resolvedPromise
    console.log(data)
  } catch (rejectedValue) {
    console.log(rejectedValue)
  }
}

getResolvedPromise()

// resolvedPromise.then((data) => console.log(data))
