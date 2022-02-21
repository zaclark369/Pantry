const router = require('express').Router();

const { User, Favorite } = require('../../models');

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

// get specific users including their favorite recipes
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id,
            {
                attributes: { exclude: ['password']},
                include: [
                    {
                        model: Favorite,
                        attributes: ['recipe_name', 'recipe_image', 'recipe_link']
                    }
                ]
            }
        )
        res.json(user);
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
        
        // save the user to the session
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;

            res.status(200).json({ user: user, message: 'User successfully created!'});
            console.log(req.session.loggedIn);
        })

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

// login route
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne(
            {
                where: {
                    username: req.body.username
                }
            }
        )

        // if there was no user with that username, alert the client and return
        if (!user) { res.status(400).json({ message: 'No user with that username!' }); return; }

        // check if the password was valid
        const isValidPw = user.checkPassword(req.body.password);

        // if the password was not valid, alert the client and return
        if (!isValidPw) { res.status(400).json({ message: 'Incorrect password!' }); return; }

        // save the user to the session
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;

            res.status(200).json({ user: user, message: 'Login successful!'});
            console.log(req.session.loggedIn);
        })

    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
})

// logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
})

module.exports = router;