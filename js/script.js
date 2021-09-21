$(function() {
    //constant variables
const pokemon_url="https://pokeapi.co/api/v2/pokemon/"
let pokemonData;

// elements
// const $type
// const $height
// const $health
// const 
$.ajax(`https://pokeapi.co/api/v2/pokemon/`).then(function(data){
    const pokemonData = data;
    console.log(pokemonData)
})



});