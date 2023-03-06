const { Dish } = require('../models/dish.model');

module.exports.index = (request, response) => {
    response.json({message: "Hello World! This is the Restaurant Database"});
}

module.exports.addDish = (request, response) => {
    const { name, image_url, price, description, course } = request.body;
    Dish.create({ name, image_url, price, description, course })
        .then(dish => response.json(dish))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
}

module.exports.findAllDishes = (request, response) => {
    Dish.find({})
      .then(allDishes => response.json({ dishes: allDishes }))
      .catch(err => response.json({ message: "Something went wrong", error: err }));
  };
  
module.exports.findDish = (request, response) => {
    Dish.findOne({ _id: request.params.id })
        .then(dish => response.json({ dish: dish }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};

module.exports.updateDish = (request, response) => {
    Dish.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedDish => response.json({ dish: updatedDish }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteDish = (request, response) => {
    Dish.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};