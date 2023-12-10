const Ingrediente = require('../model/ingrediente')
const perPageException = require('./functions/exceptions').perPageException
const valueException = require('./functions/exceptions').valueException


module.exports = {
    set: async (info) => {
        const answ = await Ingrediente.findOne({where: {nome: info.nome}})
        if (answ){
            return false
        } else {
        if (valueException(info).status) {
                await Ingrediente.create(info)
            return true
        } else {
            return false
        }
        }
    },

    searchId: async (id) => {
        const answ = await Ingrediente.findOne({where: {id: id}})
        if (answ) {
            return {result: true, ingrediente: answ}
        } else {
            return false
        }   
    },

    searchName: async (nome) => {
        const answ = await Ingrediente.findOne({where: {nome: nome}})
        if (answ) {
            return {result: true, ingrediente: answ}
        } else {
            return false
        }   
    },

    editPerId: async (id, newIng) => {
        if (valueException(newIng)) {
            await Ingrediente.update(newIng, {where: {id: id}})
            return true
        } else {
            return false
        }
    },
    editPerName: async (nome, newIng) => {
        if (valueException(newIng)) {
            await Ingrediente.update(newIng, {where: {nome: nome}})
            return true
        } else {
            return false
        }
    },

    deletePerId: async (id) => {
        await Ingrediente.destroy({where: { id: id }})
        return true
    },
 
    deletePerName: async (nome) => {
        await Ingrediente.destroy({where: { nome: nome}})
        return true
    },

    listlimited: async(qtt, pagina) => {
        qtt = parseInt(qtt)
        pagina = (pagina - 1) * 5

        if (perPageException(qtt, pagina)) {
            const check = await Ingrediente.findAll({offset: pagina, limit: limite})
    
            return {msg: true,check}
        } else {
            return false
        }
    }
    

}

