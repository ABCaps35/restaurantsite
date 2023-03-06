const MenuController = require('../controllers/menu.controller');

module.exports = function(app){
    app.get('/api/index', MenuController.index);
    app.get('/api/dishes/', MenuController.findAllDishes);
    app.get('/api/dishes/:id', MenuController.findDish);
    app.post('/api/dishes/add', MenuController.addDish);
    app.put('/api/dishes/update/:id', MenuController.updateDish);
    app.delete('/api/dishes/delete/:id', MenuController.deleteDish);
}