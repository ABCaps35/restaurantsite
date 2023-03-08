const { User } = require('../models/user.model');

module.exports.index = (request, response) => {
    response.json({message: "Hello World! This is the Restaurant Database"});
}

module.exports.login = async(request, response) => {
    const user = await User.findOne({ email: request.body.email });
    if(user === null) return response.sendStatus(400);

    const correctPassword = await bcrypt.compare(request.body.password, user.password);
    if(!correctPassword) return response.sendStatus(400);
    
    const userToken = jwt.sign({id: user._id}, process.env.SECRET_KEY);
    
    response.cookie("usertoken", userToken, secret, {httpOnly: true})
        .json({ message: "Login success!", user: user });
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

module.exports.register = (request, response) => {
    User.create(request.body)
        .then(user => {
            const userToken = jwt.sign({id: user._id}, process.env.SECRET_KEY);
            response.cookie("usertoken", userToken, secret, {httpOnly: true})
                .json({ message: "Registration success!", user: user });
        })
        .catch(err => response.json({ message: "Something went wrong", error: err })); 
}

module.exports.addUser = (request, response) => {
    const { firstName, lastName, email, password } = request.body;
    Dish.create({ firstName, lastName, email, password })
        .then(user => response.json(user))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
}

module.exports.findAllUsers = (request, response) => {
    User.find({})
      .then(allUsers => response.json({ users: allUsers }))
      .catch(err => response.json({ message: "Something went wrong", error: err }));
  };
  
module.exports.findUser = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(user => response.json({ user: user }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedUser => response.json({ user: updatedUser }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};