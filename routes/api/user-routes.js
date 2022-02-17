const router = require('express').Router();

const { User } = require('../../models');

// get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll(
            {
                attributes: { exclude: ['password']}
            }
        )
        res.json(users);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// create new user
router.post('/', async (req, res) => {
    try {
        const user = await User.create(
            {
                username: req.body.username,
                password: req.body.password
            }
        )
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

module.exports = router;