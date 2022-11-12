/* eslint-disable no-unused-vars */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const server = express()
const Auth = require('./Auth/auth-router')
const Devices = require('./Devices/device-router')
const Alert = require('./Alert/alert-router')


server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', Auth)
server.use('/api/devices', Devices)
server.use('/api/alert', Alert)



server.use('*', (req, res) => {
  res.status(404).send({message: "No Api for this endpoint"})
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;