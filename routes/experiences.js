const router = require('express').Router()
const { all, top5, detail} = require('./../controllers/experiencesController')

router.get('/', all)
router.get('/top5', top5)
router.get('/detail/:id', detail)

module.exports = router