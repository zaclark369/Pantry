const router = require('express').Router();

const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const users = User.findAll(
            {
                attributes: ['id', 'username']
            }
        )
        res.json(users);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;