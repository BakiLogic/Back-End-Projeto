const User = require('../model/receita')
const perPageException = require('./functions/exceptions').perPageException
const valueException = require('./functions/exceptions').valueException



module.exports = {
    setNovo: async (info) => {
        const answ = await User.findOne({where: {nome: info.nome}})
        if (answ){
            return false
        } else {
        if (valueException(info)) {
                await User.create(info)
            return true
        } else {
            return false
        }
        }
    },
    setAdm: async (info) =>{
        const answ = await User.findOne({where: {nome: info.nome}})
        if (answ){
            return false
        } else {
            if (info.tipo != 1){
                if (valueException(info)) {
                    await User.create(info)
                return true
                } else {
                    return false
                }
            }
        }
        
    },

    searchId: async (id) => {
        const answ = await User.findOne({where: {id: id}})
        if (answ) {
            return {result: true, user: answ}
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
        await User.destroy({where: { id: id }})
        return true
    },

    listlimited: async(qtt, pagina) => {
        qtt = parseInt(qtt)
        pagina = (pagina - 1) * 5

        if (perPageException(qtt, pagina)) {
            const check = await User.findAll({offset: pagina, limit: limite})
    
            return {result: true,check}
        } else {
            return false
        }
    }
 

}

