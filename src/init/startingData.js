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
        volume: 100

    },

    {
        nome: "Frango",
        volume: 2000
    },

    {
        nome: "Tomate",
        volume: 100
    },

    {
        nome: "Feijao",
        volume: 250
    },

    {
        nome: "Arroz",
        volume: 500
    },

    {
        nome: "Sal",
        volume: 10
    },

    {
        nome: "Chumbinho",
        volume: 15
    },

    {
        nome: "Leite",
        volume: 200
    },

    {
        nome: "Farinha",
        volume: 300
    }
]




const receitas = [
    {
        nome: "Frango Assado",
        tdp: 180,
        idIngrediente: [1, 2, 3],
        categoria: "Almoco"
        
    },

    {   
        nome: "Marmita",
        tdp: 75,
        idIngrediente: [2, 3, 4, 5],
        categoria: "Refeicao"
    },

    {
        nome: "Salada",
        tdp: 10,
        idIngrediente: [1, 3, 6],
        categoria: "Acompanhamento"
    },

    {
        nome: "Veneno de Rato",
        tdp: 5,
        idIngrediente: [6, 7],
        categoria: "Outros"
    },

    {
        nome: "Feijoada",
        tdp: 240,
        idIngrediente: [4, 6, 9],
        categoria: "Almoco"
    }

]








module.exports = {
    users,
    receitas,
    ingredientes

}