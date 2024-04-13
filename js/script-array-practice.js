//STEP 1
// let films = ['Agora', 'Rogue One: A Star Wars Story', 'Cloud Atlas', 'Dune', 'Blade Runner 2049']

// console.log(`Second movie in the list: ${films[1]}`)

//STEP 2
// let movies = new Array(5)

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Cloud Atlas'
// movies[3] = 'Dune'
// movies[4] = 'Blade Runner 2049'

// console.log(`First movie in the list: ${movies[0]}`)

//STEP 3
// let movies = new Array(5)

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Avatar'
// movies[3] = 'Cloud Atlas'
// movies[4] = 'Dune'
// movies[5] = 'Blade Runner 2049'

// console.log(`Number of films: ${movies.length}`)

//STEP 4
// let movies = []

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Cloud Atlas'
// movies[3] = 'Dune'
// movies[4] = 'Blade Runner 2049'

// delete movies[0]

// console.log(movies)

//STEP 5
// let movies = []

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Cloud Atlas'
// movies[3] = 'Dune'
// movies[4] = 'Blade Runner 2049'
// movies[5] = 'Ex Machina'
// movies[6] = 'Pacific Rim'

// for (let movie in movies) {
//     console.log(`${parseInt(movie) + 1}.- ${movies[movie]}`)
// }

//STEP 6
// let movies = []

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Cloud Atlas'
// movies[3] = 'Dune'
// movies[4] = 'Blade Runner 2049'
// movies[5] = 'Ex Machina'
// movies[6] = 'Pacific Rim'

// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 7
// let movies = []

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Cloud Atlas'
// movies[3] = 'Dune'
// movies[4] = 'Blade Runner 2049'
// movies[5] = 'Ex Machina'
// movies[6] = 'Pacific Rim'

// movies.sort()

// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 8
// let movies = []

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Cloud Atlas'
// movies[3] = 'Dune'
// movies[4] = 'Blade Runner 2049'
// movies[5] = 'Ex Machina'
// movies[6] = 'Pacific Rim'

// movies.sort()

// let leastFavMovies = []

// leastFavMovies[0] = 'Star Wars: Episode II – Attack of the Clones'
// leastFavMovies[1] = '2001: A Space Odyssey'
// leastFavMovies[2] = 'Annihilation'

// leastFavMovies.sort()

// console.log('Movies I like:')
// console.log('')

// for (let movie of movies) {
//     console.log(movie)
// }

// console.log('')
// console.log('Movies I regret watching:')
// console.log('')

// for (let badMovie of leastFavMovies) {
//     console.log(badMovie)
// }

//STEP 9
// let movies = []

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Cloud Atlas'
// movies[3] = 'Dune'
// movies[4] = 'Blade Runner 2049'
// movies[5] = 'Ex Machina'
// movies[6] = 'Pacific Rim'

// movies.sort()

// let leastFavMovies = []

// leastFavMovies[0] = 'Star Wars: Episode II – Attack of the Clones'
// leastFavMovies[1] = '2001: A Space Odyssey'
// leastFavMovies[2] = 'Annihilation'

// leastFavMovies.sort()

// movies = movies.concat(leastFavMovies)
// movies.sort()
// movies.reverse()

// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 10
// let movies = []

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Cloud Atlas'
// movies[3] = 'Dune'
// movies[4] = 'Blade Runner 2049'
// movies[5] = 'Ex Machina'
// movies[6] = 'Pacific Rim'

// movies.sort()

// let leastFavMovies = []

// leastFavMovies[0] = 'Star Wars: Episode II – Attack of the Clones'
// leastFavMovies[1] = '2001: A Space Odyssey'
// leastFavMovies[2] = 'Annihilation'

// leastFavMovies.sort()

// movies = movies.concat(leastFavMovies)
// movies.sort()
// movies.reverse()

// let lastMovie = movies.pop()

// console.log(`The last film in the list is ${lastMovie}`)

//STEP 11
// let movies = []

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Cloud Atlas'
// movies[3] = 'Dune'
// movies[4] = 'Blade Runner 2049'
// movies[5] = 'Ex Machina'
// movies[6] = 'Pacific Rim'

// movies.sort()

// let leastFavMovies = []

// leastFavMovies[0] = 'Star Wars: Episode II – Attack of the Clones'
// leastFavMovies[1] = '2001: A Space Odyssey'
// leastFavMovies[2] = 'Annihilation'

// leastFavMovies.sort()

// movies = movies.concat(leastFavMovies)
// movies.sort()
// movies.reverse()

// let firstMovie = movies.shift()

// console.log(`The firs film in the list is ${firstMovie}`)

//STEP 12
// let movies = []

// movies[0] = 'Agora'
// movies[1] = 'Rogue One: A Star Wars Story'
// movies[2] = 'Cloud Atlas'
// movies[3] = 'Dune'
// movies[4] = 'Blade Runner 2049'
// movies[5] = 'Ex Machina'
// movies[6] = 'Pacific Rim'

// movies.sort()

// let leastFavMovies = []

// leastFavMovies[0] = 'Star Wars: Episode II – Attack of the Clones'
// leastFavMovies[1] = '2001: A Space Odyssey'
// leastFavMovies[2] = 'Annihilation'

// leastFavMovies.sort()

// movies = movies.concat(leastFavMovies)
// movies.sort()
// movies.reverse()

// let moreMovies = []

// moreMovies[0] = 'Black Panther'
// moreMovies[1] = 'Parasite'
// moreMovies[2] = 'The Lord of the Rings: The Fellowship of the Ring'

// let movieIndex

// console.log('Finding the least favorite movies')
// console.log('')

// for (let movie in leastFavMovies) {
//     movieIndex = movies.indexOf(leastFavMovies[movie])
//     console.log(`${leastFavMovies[movie]}'s index is ${movieIndex}, and it is being replaced with ${moreMovies[movie]}`)
//     movies.splice(movieIndex, 1, moreMovies[movie])
// }

// console.log('')
// console.log('Updated films list')
// console.log('')

// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 13
// let films = [['Agora', 5], ['Rogue One: A Star Wars Story', 4], ['Cloud Atlas', 3], ['Dune', 1], ['Blade Runner 2049', 2]]


// for (let movie of films) {
//     console.log(movie.filter((element) => {
//         return typeof element === 'string'
//     }))
// }

//STEP 14
// let employees = [
//     'Averie Cantrell', 
//     'Harris Bishop', 
//     'Brooklynn Long', 
//     'Jace Foster', 
//     'Brielle Barnett', 
//     'Stephen Pratt', 
//     'Ailani Welch', 
//     'Hendrix Nunez',
//     'Mya Graham',
//     'Giovanni Robinson'
// ]

// const showEmployee = function (parameter) {
//     console.log('Employees:')
//     console.log('')
//     for (let item of parameter) {
//         console.log(item)
//     }
// }

// showEmployee(employees)

//STEP 15
// let testData = [58, '', 'abcd', true, null, false, 0]

// console.log(testData.filter((item) => item))

// STEP 16
// let numbers = [89, 9, 6, 48, 40, 7, 91, 38, 95, 8, 12, 45, 59, 60, 81, 22, 97, 25, 69, 42]

// console.log('Number sequence:')
// console.log(numbers)
// console.log('')
// console.log(`Randomly selected number: ${getRandomItem(numbers)}`)

// function getRandomItem(parameter) {
//     let index = Math.floor(Math.random() * parameter.length);

//     return parameter[index]
// }

//STEP 17
// let numbers = [89, 9, 6, 48, 40, 7, 91, 38, 95, 8, 12, 45, 59, 60, 81, 22, 97, 25, 69, 42]

// console.log('Number sequence:')
// console.log(numbers)
// console.log('')
// console.log(`Largest number in the array: ${getLargestNumber(numbers)}`)


// function getLargestNumber(parameter) {
//     let workingItem = [...parameter]
//     workingItem.sort()

//     return workingItem[workingItem.length - 1]
// }