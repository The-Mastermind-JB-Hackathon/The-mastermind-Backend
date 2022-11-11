/* eslint-disable no-unused-vars */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const server = express()
const Auth = require('./Auth/auth-router')

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', Auth)

server.use('*', (req, res) => {
  res.status(200).send({message: "api up"})
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;