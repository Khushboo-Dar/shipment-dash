const shipment = require('../models/shipmentModel')
const document = require('../models/documentModel')
const location = require('../models/locationModel')

module.exports.AnalyticsData = async (req, res, err) => {
    try {
        const locations = await location.find({})
        const shipments = await shipment.find({})
        return res.status(200).json({
            status : true,
            shipments: shipments,
            locations : locations
        })
    } catch (error) {
        console.log("error in analytics data server: " + error.message)
    }
}

module.exports.DashboardData = async (req, res, err) => {
    try {
        const locations = await location.find({})
        const documents = await document.find({})
        const shipments = await shipment.find({})
        return res.status(200).json({
            status : true,
            documents : documents,
            locations : locations,
            shipments : shipments
        })
    } catch (error) {
        console.log("error in dashboard data server: "+ error.message)
    }
}