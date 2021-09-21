$(function() {
    //constant variables
    const pokemon_url="https://pokeapi.co/api/v2/pokemon/"
    let pokemonData;
    // elements
    const $type = $("#type");
    const $height = $("#height");
    const $health = $("#health");
    const $weight = $("#weight");
    const $form = $('form');
    const $input = $('input[type="text"]');
    const $photo = $("image")
    $form.on('submit', handleGetData)
    
    function handleGetData(event) {
            event.preventDefault();
            const pokemonName = $input.val();
            $input.val("");
            $.ajax(`${pokemon_url}${pokemonName}`).then(function(data){
                pokemonData = data;
                console.log(pokemonData);
                render();
            }, function(error) {
                console.log(error);
            });

    };

    function render(){
        $type.text("Type: " + pokemonData.types[0].type.name)
        $height.text("Height: " + pokemonData.height)
        $health.text("Health: " + pokemonData.stats[0].base_stat)
        $weight.text("weight: " + pokemonData.weight)
    }

});