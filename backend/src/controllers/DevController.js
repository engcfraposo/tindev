const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { login } = req.body;

        const response = await axios.get(`https://api.github.com/users/${login}`);

        const dev = await Dev.create({
            name,
            login,
            bio,
            avatar_html,
        })

        return res.json(dev);
    }
}