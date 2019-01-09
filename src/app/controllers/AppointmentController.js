const { USer } = require('../models')

class AppointmentController {
  async create (req, res) {
    const provider = await USer.findByPk(req.params.provider)

    return res.render('appointment/create', { provider })
  }
}

module.exports = new AppointmentController()
