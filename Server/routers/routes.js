const { AnalyticsData, DashboardData } = require('../controllers/controller')

const router = require('express').Router()

router.get('/analytics', AnalyticsData)
router.get('/dashboard', DashboardData)

module.exports = router