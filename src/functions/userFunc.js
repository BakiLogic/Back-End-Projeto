const Receita = require('../model/receita')
const {exceptions} = require('./functions/exceptions')


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
    setAdm: async (info) =>{
        const answ = await Receita.findOne({where: {nome: info.nome}})
        if (answ){
            return false
        } else {
            if (info.tipo != 1){
                if (valueException(info)) {
                    await Receita.create(info)
                return true
                } else {
                    return false
                }
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


    editPerId: async (id, newRcp) => {
        if (valueException(newRcp)) {
            await Receita.update(newRcp, {where: {id: id}})
            return true
        } else {
            return false
        }
    },


    deletePerId: async (id) => {
        await Receita.destroy({where: { id: id }})
        return true
    },
 

}

