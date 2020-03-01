
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

router.get('/users', async (req, res) => {
    // Get All Users
    try {
        let users = await User.find();
        res.status(201).send({ users })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/user', async (req, res) => {
    // Get Single User
    try {
        let user = await User.findOne({ _id: req.body })
        res.status(201).send({ user })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/user/:id', async (req, res) => {
    // Get Single User by ID
    try {
        let user = await User.findById(req.params.id)
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/user/remove/:id', async (req, res) => {
    try {
        User.findByIdAndDelete(req.params.id, req.body, (err, obj) => {
            if (err) throw err;
            res.status(201).send(obj)
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.put('/user/update/:id', async (req, res) => {
    try {
        // User.updateOne({ _id: req.body }, req.body, (err, user) => {
        //     if (err) throw err;
        //     //user.save();
        //     res.status(201).send('User updated successfully')
        User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            if (err) throw err;
            res.status(201).send(user)
        })

        // })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.put('/user/pds/:id', async (req, res) => {
    try {
        User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            if (err) throw err;
            res.status(201).send(user)
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router