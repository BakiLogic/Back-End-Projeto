const users = [
    {
        login: "Josvi",
        senha: "122404",
        tipo: "1"
    },

    {
        login: "Fernando",
        senha: "boraB1LL",
        tipo: "0"
    },

    {
        login: "Vinkira",
        senha: "072104",
        tipo: "0"
    },

    {
        login: "Yamaguchi",
        senha: "donPO11O",
        tipo: "0"
    },

    {
        login: "FelixLoL",
        senha: "yuumigato12",
        tipo: "0"
    },
]

const ingredientes = [
    {
        nome: "Cenoura",
        volume: 100,
        idReceita: 1

    },

    {
        nome: "Frango",
        volume: 2000,
        idReceita: 1
    },

    {
        nome: "Tomate",
        volume: 100,
        idReceita: 3
    },

    {
        nome: "Feijao",
        volume: 250,
        idReceita: 5
    },

    {
        nome: "Arroz",
        volume: 500,
        idReceita: 2
    },

    {
        nome: "Sal",
        volume: 10,
        idReceita: 5
    },

    {
        nome: "Chumbinho",
        volume: 15,
        idReceita: 4
    },

    {
        nome: "Leite",
        volume: 200,
        idReceita: 4
    },

    {
        nome: "Farinha",
        volume: 300,
        idReceita: 5
    },
    {
        nome: "Alface",
        volume:20,
        idReceita: 3
    }
]




const receitas = [
    {
        nome: "Frango Assado",
        tdp: 180,
        categoria: "Almoco"
        
    },

    {   
        nome: "Marmita",
        tdp: 75,
        categoria: "Refeicao"
    },

    {
        nome: "Salada",
        tdp: 10,
        categoria: "Acompanhamento"
    },

    {
        nome: "Veneno de Rato",
        tdp: 5,
        categoria: "Outros"
    },

    {
        nome: "Feijoada",
        tdp: 240,
        categoria: "prato"
    }

]








module.exports = {
    users,
    receitas,
    ingredientes

}