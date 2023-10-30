const express = require('express')
const router = express.Router()
const { Get, Insert, GetByPK, Update, Delete } = require('../controller/user.controller')
const { CheckPostReq } = require('../middleware/middleware')

/**
 * @swagger
 * /:
 *   get:
 *     summary: example to get user
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/', Get)

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Get one user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/:id', GetByPK)

// /**
//  * @swagger
//  * /
//  *   post:
//  *     summary: insert user
//  *     responses:
//  *       200:
//  *         description: Successful response
//  */
// router.post('/', CheckPostReq, Insert)

// /**
//  * @swagger
//  * /:id:
//  *   put:
//  *     summary: update one user
//  *     responses:
//  *       200:
//  *         description: Successful response
//  */
// router.put('/:id', Update)

// /**
//  * @swagger
//  * /:id:
//  *   delete:
//  *     summary: delete one
//  *     responses:
//  *       200:
//  *         description: Successful response
//  */
// router.delete('/:id', Delete)

module.exports = router