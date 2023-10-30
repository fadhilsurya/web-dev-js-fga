
const { ResponseTemplate } = require('../helper/template.helper')
const Joi = require('joi');
// function PrintSuccess(req, res, next) {
//     const { } = req.params.id
//     console.log(` SELALU BERHASIL AKSES`)
//     next()
// }

// function PrintSuccessRoute(req, res, next) {

//     console.log(` SELALU BERHASIL AKSES LEWAT ROUTE LEVEL`)
//     next()
// }

function CheckPostReq(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().alphanum().max(255).required(),
        address: Joi.string().alphanum().required(),
        email: Joi.string().alphanum().email().required()
    })

    const { error } = schema.validate(req.body)
    if (error) {
        let respErr = ResponseTemplate(null, 'invalid request',
            error.details[0].message, 400)
        res.json(respErr)
        return
    }

    next()
}





module.exports = {
    CheckPostReq
}