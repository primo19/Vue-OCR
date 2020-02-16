
const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')
const router = express.Router()

router.post('/register', async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

/* router.post('/admin', async (req, res) => {
    // Create a new admin user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}) */

router.post('/login', async (req, res) => {
    //Login a registered user
    try {
        const { employeeID, password } = req.body
        const user = await User.findByCredentials(employeeID, password)
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

})

router.post('/adduser', async (req, res) => {
    // Add a new user/admin
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/users/cof', async (req, res) => {
    // View All Users
    try {
        let users = await User.find({ college: "COF" })

        res.status(201).send({ users })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/cas', async (req, res) => {
    // View All Users
    try {
        let users = await User.find({ college: "CAS" })

        res.status(201).send({ users })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/ccs', async (req, res) => {
    // View All Users
    try {
        let users = await User.find({ college: "CCS" })

        res.status(201).send({ users })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/cte', async (req, res) => {
    // View All Users
    try {
        let users = await User.find({ college: "CTE" })

        res.status(201).send({ users })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/chmt', async (req, res) => {
    // View All Users
    try {
        let users = await User.find({ college: "CHMT" })

        res.status(201).send({ users })
    } catch (e) {
        res.status(400).send(e)
    }
})
router.get('/users/cfnd', async (req, res) => {
    // View All Users
    try {
        let users = await User.find({ college: "CFND" })

        res.status(201).send({ users })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/cbma', async (req, res) => {
    // View All Users
    try {
        let users = await User.find({ college: "CBMA" })

        res.status(201).send({ users })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/ccje', async (req, res) => {
    // View All Users
    try {
        let users = await User.find({ college: "CCJE" })

        res.status(201).send({ users })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/user/remove', async (req, res) => {
    try {
        User.deleteOne((err, obj) => {
            if (err) throw err;
            res.status(201).send('Deleted Successfully')
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.put('/user/:id', async (req, res) => {
    try {
        User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            if (err) return next(err)
            user.save();
            res.status(201).send('User updated successfully')
        })
    } catch (e) {
        res.status(400).send(e)
    }
})
// router.post('/users/me/logout', auth, async (req, res) => {
//     // Log user out of the application
//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token != req.token
//         })
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// router.post('/users/me/logoutall', auth, async (req, res) => {
//     // Log user out of all devices
//     try {
//         req.user.tokens.splice(0, req.user.tokens.length)
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

module.exports = router