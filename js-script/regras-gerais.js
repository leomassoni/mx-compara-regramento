var regrasGerais = [
    {
        duvida: "Confisco da caixinha",
        regulador: "CLT",
        link: 'https://www.jusbrasil.com.br/topicos/10713471/artigo-457-do-decreto-lei-n-5452-de-01-de-maio-de-1943',
        regra: "Art. 457 § 3º Considera-se gorjeta não só a importância espontaneamente dada pelo cliente ao empregado, como também o valor cobrado pela empresa, como serviço ou adicional, a qualquer título, e destinado à distribuição aos empregados. § 4º A gorjeta mencionada no § 3º não constitui receita própria dos empregadores, destina-se aos trabalhadores e será distribuída segundo critérios de custeio e de rateio definidos em convenção ou acordo coletivo de trabalho.",
    },

    {
        duvida: "Entrega de escalas",
        regulador: "CLT",
        link: 'https://www.jusbrasil.com.br/topicos/10758983/artigo-67-do-decreto-lei-n-5452-de-01-de-maio-de-1943',
        regra: "Art. 67 Será assegurado a todo empregado um descanso semanal de 24 (vinte e quatro) horas consecutivas, o qual, salvo motivo de conveniência pública ou necessidade imperiosa do serviço, deverá coincidir com o domingo, no todo ou em parte. § Nos serviços que exijam trabalho aos domingos, com exceção quanto aos elencos teatrais, será estabelecida escala de revezamento, mensalmente organizada e constando de quadro sujeito à fiscalização.",
    },

    {
        duvida: "Legalidade do quebra",
        regulador: "CLT",
        link: 'https://www.jusbrasil.com.br/topicos/10712484/artigo-462-do-decreto-lei-n-5452-de-01-de-maio-de-1943',
        regra: "Art. 462 § 1º - Em caso de dano causado pelo empregado, o desconto será lícito, desde de que esta possibilidade tenha sido acordada ou na ocorrência de dolo do empregado.",
    },

    {
        duvida: "Levar trampo para casa",
        regulador: "CLT",
        link: 'https://www.jusbrasil.com.br/topicos/173000266/artigo-75a-do-decreto-lei-n-5452-de-01-de-maio-de-1943',
        regra: "Art. 75-C. A prestação de serviços na modalidade de teletrabalho deverá constar expressamente do contrato individual de trabalho, que especificará as atividades que serão realizadas pelo empregado.",
    },

    {
        duvida: "Prazo do banco de horas",
        regulador: "CLT",
        link: 'https://www.jusbrasil.com.br/topicos/10759850/artigo-59-do-decreto-lei-n-5452-de-01-de-maio-de-1943',
        regra: "Art. 59. § 5º O banco de horas de que trata o § 2o deste artigo poderá ser pactuado por acordo individual escrito, desde que a compensação ocorra no período máximo de seis meses.Art. Porém o Art.611-A. A convenção coletiva e o acordo coletivo de trabalho têm prevalência sobre a lei quando, entre outros, dispuserem sobre: II - banco de horas anual;",
    },

    {
        duvida: "Rango de funça",
        regulador: "CLT",
        link: 'https://www.jusbrasil.com.br/topicos/10713283/artigo-458-do-decreto-lei-n-5452-de-01-de-maio-de-1943',
        regra: "Art. 458 - Além do pagamento em dinheiro, compreende-se no salário, para todos os efeitos legais, a alimentação, habitação, vestuário ou outras prestações in natura que a empresa, por fôrça do contrato ou do costume, fornecer habitualmente ao empregado.",
    }
]

var duvidasLista = regrasGerais.map(function (item, indice) {
    return item.duvida;
})

var duvidasSelect = document.querySelector('#dados__duvida');
var reguladorGeral = document.querySelector('.link__geral');
var regraGeralParagrafo = document.querySelector('#regra__geral');

duvidasLista.forEach((opcao) => {
    option = new Option (opcao, '');
    option.classList.add('duvida__opcao');
    duvidasSelect.options[duvidasSelect.options.length] = option;
});