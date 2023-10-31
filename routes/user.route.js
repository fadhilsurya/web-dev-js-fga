const express = require('express')
const router = express.Router()
const { Get, Insert, GetByPK, Update, Delete } = require('../controller/user.controller')
const { CheckPostReq } = require('../middleware/middleware')

/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *      - "User"
 *     summary: example to get user
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.get('/', Get)

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *      - "User" 
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
 *         description: Success
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
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