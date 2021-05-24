$.ajax({
    url: "https://covid.mathdro.id/api",
    success: function (resposta) {
        pegaDados(resposta)
        
    }

});

function pegaDados(dadosApi){
    $('#confirmados').html(`
        <h2>Casos confirmados</h2>
        <div><h1>${dadosApi.confirmed.value}</h1></div>
    `)

    $('#recuperados').html(`
        <h2>Casos recuperados</h2>
        <div><h1>${dadosApi.recovered.value}</h1></div>
    `)

    $('#mortos').html(`
        <h2>Óbitos confirmados</h2>
        <div><h1>${dadosApi.deaths.value}</h1></div>
    `)
}

