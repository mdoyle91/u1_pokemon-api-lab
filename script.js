// const getPokemon = async () => {
//     const pokemon = await axios.get('https://pokeapi.co/api/v2/')
//     const pokemonName = pokemon.data.pokemon
//     // const pokemonColor = pokemon.data.pokemon-color
//     console.log(pokemon)
//     console.log(pokemonName)
// //     console.log(pokemonColor)
//   }

//   getPokemon()


// const button = document.querySelector(`.btn`)
// const textInput = document.querySelector(`.searchBar`)
// const pokemonImage = document.querySelector(`.imgContainer`)
// const attributeBox = document.querySelector(`.attributeBox`)

// button.addEventListener(`click`, async () => {
//     let pokemonName = textInput.value
//     console.log(pokemonName)
//     let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     console.log(response.data.pokemon)
// })

// const pokemonAbility = await axios.get(`https://pokeapi.co/api/v2/ability/`)
// const pokemonEvoChain = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/`)

// console.log(pokemonAbility)
// console.log(pokemonEvoChain)

// const button = document.querySelector(".btn")
// const textInput = document.querySelector(".searchBar")
// const pokemonImg = document.querySelector(".imgContainer")
// const attributeBox = document.querySelector(".attributeBox")
// const ability = document.querySelector("#ability")
// const height = document.querySelector("#height")
// button.addEventListener(`click` , async () => {
//     let searchText = textInput.value
//     console.log(searchText)
//     let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
//     console.log(response)
//     let pokemonName = response.data.name
//     console.log(pokemonName)
//     let pokemonId = response.data.id
//     console.log(pokemonId)
//     let pokemonAbility = response.data.ability
//     console.log(pokemonAbility)
//     ability.setAttribute("src", pokemonAbility)
//     let pokemonForms
//     let pokemonTypes 
//     let pokemonHeight = response.data.height
//     height.setAttribute("src", pokemonHeight)
//     let pokemonWeight
//     let pokemonImage = response.data.sprites.front_default
//     console.log(pokemonImage)
//     pokemonImg.setAttribute("src", pokemonImage)
// })


// const button = document.querySelector(`.btn`)
// const textInput = document.querySelector(`.searchBar`)
// const pokemonImg = document.querySelector(`.imgContainer`)
// const attributeBox = document.querySelector(`.attributeBox`)
// button.addEventListener(`click`, async () => {
//     let searchText = textInput.value
//     console.log(searchText)
//     let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}/`)
//     console.log(response)
//     let pokemonName = response.data.name
//     console.log(pokemonName)
//     let pokemonId = response.data.id
//     console.log(pokemonId)
//     let pokemonPic = response.data.sprites.front_default
//     console.log(pokemonPic)

//     pokemonImg.setAttribute(`src`, pokemonPic)
// })

// let button = document.querySelector(".btn")

// button.addEventListener('click', async () => {
//     let pokemonName = document.querySelector(".attributeBox")
//     let pokemonImage = document.querySelector(".imgContainer")
//     //where does this need to be scoped?
//     let textInput = document.querySelector("#inputBar").value
        

//     //Axios call goes here
//     //remember to use Async and Await!
//     //DOM Setters go here

// }
// )



// const button = document.querySelector(`.btn`)
// const textInput = document.querySelector(`.searchBar`)
// const imgContainer = document.querySelector(`.imgContainer`)
// const attributeBox = document.querySelector(`.attributeBox`)
// const name = document.querySelector(`#name`)
// const iD = document.querySelector(`#iD`)
// const weight = document.querySelector(`#weight`)
// const height = document.querySelector(`#height`)
// const ability = document.querySelector(`#ability`)
// const evolution = document.querySelector(`#evolution`)
// const generation = document.querySelector(`#generation`)
// const move = document.querySelector(`#move`)
// button.addEventListener(`click`, async () => {
//     let searchText = textInput.value
//     console.log(searchText)
//     let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}/`)
//     console.log(response)
//     let pokemonName = response.data.name
//     console.log(pokemonName)
//     let pokemonId = response.data.id
//     console.log(pokemonId)
//     let pokemonImg = response.data.sprites.front_default
//     let pokemonHeight = response.data.height
//     let pokemonWeight = response.data.weight
//     let pokemonAbility1 = response.data.abilities[0].ability.name
//     let pokemonEvolution = response.data.evolution
//     let pokemonGeneration = response.data.generation
//     let pokemonMove = response.data.moves
//     console.log(pokemonImg)
//     imgContainer.setAttribute("src", pokemonImg)
//     name.append(pokemonName)
//     iD.append(pokemonId)
//     weight.append(pokemonWeight)
//     height.append(pokemonHeight)
//     ability.append(pokemonAbility1)
//     evolution.append(pokemonEvolution)
//     generation.append(pokemonGeneration)
//     move.append(pokemonMove)
// }
// )

const button = document.querySelector(".btn")
const textInput = document.querySelector(".searchBar")
const imgContainer = document.querySelector(".imgContainer")
const attributeBox = document.querySelector(".attributeBox")
const ability = document.querySelector("#ability")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const evolution = document.querySelector("#evolution")
const generation = document.querySelector("#generation")
const move = document.querySelector("#move")
const name = document.querySelector("#name")
const id = document.querySelector("#id")
button.addEventListener(`click` , async () => {
    let searchText = textInput.value
    console.log(searchText)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
    console.log(response)
    let pokemonName = response.data.name
    //console.log(pokemonName)
    let pokemonId = response.data.id
    //console.log(pokemonId)
    let pokemonImg = response.data.sprites.front_default
    //console.log(pokemonImage)
    let pokemonHeight = response.data.height
    let pokemonWeight = response.data.weight
    let pokemonAbility1 = response.data.abilities[0].ability.name
    let speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
    let evolutionChainUrl = speciesResponse.data.evolution_chain.url
    let evolutionResponse = await axios.get(evolutionChainUrl)
    let evolutionNames = []
    let currentEvolution = evolutionResponse.data.chain
    while (currentEvolution) {
        evolutionNames.push(currentEvolution.species.name);
        currentEvolution = currentEvolution.evolves_to[0];
    }
    //console.log(pokemonImg)
    imgContainer.setAttribute("src", pokemonImg)
    name.textContent = `Name: ${pokemonName}`
    id.textContent = `ID: ${pokemonId}`
    weight.textContent = `Weight: ${pokemonWeight}`
    height.textContent = `Height: ${pokemonHeight}`
    ability.textContent = `Abilities: ${pokemonAbility1}`
    evolution.textContent = `Evolves from/to: ${evolutionNames.join(' → ')}`
})
console.log(`working`)

// Used ChatGPT to check why it wasn't populating "Evolution," so I updated that variable to a series of different variables and a while statment according to what it told me to do, but I don't understand what it's doing completely.