console.log('LOGGEDIN USERS')

function getLoggedInUsers() {
  const RANDOM_NUMBER = Math.floor(Math.random() * Math.floor(2))

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (RANDOM_NUMBER) {
        reject('ERROR!!!!')
      } else {
        resolve(['benna', 'magdy', 'carolina'])
      }
    }, 2000)
  })
}

// getLoggedInUsers()
//   .then((users) => {
//     console.log(users) // ['benna', 'magdy', 'carolina']
//   })
//   .catch((error) => {
//     console.log(error)
//   })

async function loggedInUsers() {
  try {
    const users = await getLoggedInUsers()
    console.log(users)
  } catch (error) {
    console.log(error)
  }
}

loggedInUsers()
