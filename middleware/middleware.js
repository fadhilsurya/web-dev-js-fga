
const { ResponseTemplate } = require('../helper/template.helper')

function PrintSuccess(req, res, next) {

    console.log(` SELALU BERHASIL AKSES`)
    next()
}

function PrintSuccessRoute(req, res, next) {

    console.log(` SELALU BERHASIL AKSES LEWAT ROUTE LEVEL`)
    next()
}

function CheckPostReq(req, res, next) {

    if (req.body.name == undefined || req.body.address == undefined) {
        let respErr = ResponseTemplate(null, 'invalid request',
            new Error('invalid request'), 400)
        res.json(respErr)
    }

    next()
}


module.exports = {
    PrintSuccess,
    PrintSuccessRoute,
    CheckPostReq
}