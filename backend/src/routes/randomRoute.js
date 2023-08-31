import express from 'express'
import {fork} from 'child_process'
import randomNums from '../services/randomService.js'

const router = express.Router()

let calculo = fork('./utils/random.js')

router.get('/', randomNums )

export default router