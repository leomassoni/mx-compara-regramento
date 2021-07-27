var textGeral = duvidasSelect.options[duvidasSelect.selectedIndex].text;
var textRegional = opcoesSelect.options[opcoesSelect.selectedIndex].text;

duvidasSelect.addEventListener('change', function() {
    textGeral = duvidasSelect.options[duvidasSelect.selectedIndex].text;
        
    for(i = 0; i < duvidasLista.length; i++) {
        if(textGeral == duvidasLista[i]) {
            regraGeralParagrafo.innerHTML = regrasGerais[i].regra;
            reguladorGeral.innerHTML = regrasGerais[i].regulador;
            reguladorGeral.href = regrasGerais[i].link;
            reguladorGeral.classList.add('hover');
            opcoesSelect.options[opcoesSelect.selectedIndex = 0];
            regraRegionalParagrafo.innerHTML = 'Agora escolha a região para ler a regulamentação regional a respeito.';
        }
    }

    opcoesSelect.addEventListener('change', function() {
        textRegional = opcoesSelect.options[opcoesSelect.selectedIndex].text;
        
        for(i = 0; i < opcoesLista.length; i++) {
            if(textRegional == opcoesLista[i]) {
                var duvidas = regrasRegionais[i].conteudo.map(function (item, indice) {
                    return item.duvida;
                })

                var regras = regrasRegionais[i].conteudo.map(function (item, indice) {
                    return item.regra;
                })

                reguladorRegional.innerHTML = regrasRegionais[i].regulador;
                reguladorRegional.classList.add('hover');
                reguladorRegional.href = regrasRegionais[i].link;
                console.log(duvidas);

                for(i = 0; i < duvidas.length; i++) {
                    if(duvidas[i] == textGeral) {
                        regraRegionalParagrafo.innerHTML = regras[i];
                    }
                }
            }
        }
    })
});

