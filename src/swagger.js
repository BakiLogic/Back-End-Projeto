const swagger = require('swagger-autogen')()

output = './swagger-doc.json'
endpoints = ['./app.js']

const doc = {
    info: {
      version: '1.0',      
      title: 'Menu para receitad e ingredientes',        
      description: 'Essa API é destinada para a criação de receitas, cadastro de ingredientes e a criação de um menu.'
    }
  }

swagger(output, endpoints, doc)