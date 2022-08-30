// Importando o array de pizzas
const pizzas = require('../database/pizzas.json');
const { search } = require('../routes/PizzasRouter');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        res.render('index.ejs', {pizzas});
      
    },
    show:(req,res) => {
        //levantar o id  que veio no param rota
        let id = req.params.id;
        //encontrar o arrays de pizzas a pizza
        let pizza = pizzas.find(p=>p.id==id);



        ///retornar a view pizza.ejs, a pizza encontrada
        res.render('pizzas.ejs', {pizza});
    },
    search:() => {

    }

}
    