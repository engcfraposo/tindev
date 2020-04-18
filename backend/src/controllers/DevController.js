const axios = require('axios');
const Dev = require('../models/Dev');



module.exports = {
    
    async index(req, res){
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes}},
                { _id: { $nin: loggedDev.dislikes}}
            ],


        })
        return res.json(users)
    },
    
    
    async store(req, res) {
        const { login } = req.body;

        const userExists = await Dev.findOne({login})

        if (userExists) {
            return res.json(userExists);
        }
        
        const response = await axios.get(`https://api.github.com/users/${login}`);

        const { name, bio, avatar_url } = response.data

        const dev = await Dev.create({
            name,
            login,
            bio,
            avatar_url,
        })
        
        

        return res.json(dev);
    }
}