const mongoose = require('mongoose');

const courses = ['Appetizer', 'Entree', 'Side', 'Dessert']
const LINK_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/

const DishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Dish name is required"],
        minlength: [3, "Dish name must be at least 3 characters long"],
        maxlength: [50, "Dish name must be shorter than 50 characters"]
    },
    image_url: {
        type: String,
        required: [true, "Image URL is required"],
        validate: {
            validator: ((val) => {
                if(val.match(LINK_REGEX)){
                    return true;
                }
                return false;
            })
        }
    },
    price: {
        type: Number,
        required: [true, "Dish price is required"],
        min: [0, "Dish cannot cost less than $0"]
    },
    description: {
        type: String,
        required: [true, "Dish description is required"],
        minlength: [3, "Dish name must be at least 3 characters long"],
        maxlength: [150, "Dish name must be shorter than 80 characters"]
    },
    course: {
        type: String,
        required: [true, "Dish course is required"], 
        validate: {
            validator: ((val) => {
                if(courses.includes(val)){
                    return true;
                }
                return false;
            })
        }
    }
}, { timestamps: true });

module.exports.Dish = mongoose.model('Dish', DishSchema);