console.log('astros')

const body = document.querySelector('body')
const errorMessage = document.createElement('div')

const MOVIE_API =
  'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'

async function getAstrosAndMovies() {
  try {
    const astroResponse = await fetch(
      'http://api.open-notdsify.org/astros.json'
    )
    const astros = await astroResponse.json()

    const moviesResponse = await fetch(MOVIE_API)
    const movies = await moviesResponse.json()

    console.log('astros', astros)

    console.log(movies.map((movie) => movie.title))
  } catch (error) {
    alert(error)
  }
}

getAstrosAndMovies()
