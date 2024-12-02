import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { processarMensagem } from './test/basicTest'


export const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({"server": "Online"})
})

router.post('/api/webhook/teste/', async (req: Request, res: Response) => { 
    const response = req.body
    //mensagem recebida pelo webhook e devolução dos dados teste para controlar o estado       
        
    const processData = await processarMensagem(response.message)

    res.status(200).json({
        success: true,
        status: 200,
        send: response.message,
        response: processData
    })
})