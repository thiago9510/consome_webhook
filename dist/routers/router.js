"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const basicTest_1 = require("./test/basicTest");
exports.router = express_1.default.Router();
exports.router.get('/', (req, res) => {
    res.status(200).json({ "server": "Online" });
});
exports.router.post('/api/webhook/teste/', async (req, res) => {
    const response = req.body;
    //mensagem recebida pelo webhook e devolução dos dados teste para controlar o estado       
    const processData = await (0, basicTest_1.processarMensagem)(response.message);
    res.status(200).json({
        success: true,
        status: 200,
        send: response.message,
        response: processData
    });
});
