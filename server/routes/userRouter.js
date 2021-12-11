const Router = require('express')
const router = new Router()

router.post('/registration', ) 
router.post('/login',)
router.get('/auth', (req, res) => {
    res.json({message: 'ALL WORKING'})
}) //here we look at whether the user is registered or not

module.exports = router