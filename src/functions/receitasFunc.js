const Receita = require('../model/receita')
const perPageException = require('./functions/exceptions').perPageException
const valueException = require('./functions/exceptions').valueException


module.exports = {
    set: async (info) => {
        const answ = await Receita.findOne({where: {nome: info.nome}})
        if (answ){
            return false
        } else {
        if (valueException(info)) {
                await Receita.create(info)
            return true
        } else {
            return false
        }
        }
    },

    searchId: async (id) => {
        const answ = await Receita.findOne({where: {id: id}})
        if (answ) {
            return {result: true, receita: answ}
        } else {
            return false
        }   
    },

    searchName: async (nome) => {
        const answ = await Receita.findOne({where: {nome: nome.toLowerCase()}})
        if (answ) {
            return {result: true, receita: answ}
        } else {
            return false
        }   
    },

    editPerId: async (id, newRcp) => {
        if (valueException(newRcp)) {
            await Receita.update(newRcp, {where: {id: id}})
            return true
        } else {
            return false
        }
    },
    editPerName: async (nome, newRcp) => {
        if (valueException(newRcp)) {
            await Receita.update(newRcp, {where: {nome: nome}})
            return true
        } else {
            return false
        }
    },

    deletePerId: async (id) => {
        await Receita.destroy({where: { id: id }})
        return true
    },
 
    deletePerName: async (nome) => {
        await Receita.destroy({where: { nome: nome}})
        return true
    },

    listlimited: async(qtt, pagina) => {
        qtt = parseInt(qtt)
        pagina = (pagina - 1) * 5

        if (perPageException(qtt, pagina)) {
            const check = await Receita.findAll({offset: pagina, limit: limite})
    
            return {result: true,check}
        } else {
            return false
        }
    },

    listPerCategoria: async(cat) =>{
        const check = await Receita.findAll({where: { categoria: cat }})
        if (check){
            return {result: true,check}
        } else {
                return false
            }
        
    }

}

