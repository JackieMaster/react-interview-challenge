"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const joi_1 = __importDefault(require("joi"));
const transactionHandler_1 = require("../handlers/transactionHandler");
const router = express_1.default.Router();
const transactionSchema = joi_1.default.object({
    amount: joi_1.default.number().required(),
});
router.put("/:accountID/withdraw", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = transactionSchema.validate(request.body);
    if (error) {
        return response.status(400).send(error.details[0].message);
    }
    try {
        const updatedAccount = yield (0, transactionHandler_1.withdrawal)(request.params.accountID, request.body.amount);
        return response.status(200).send(updatedAccount);
    }
    catch (err) {
        if (err instanceof Error) {
            return response.status(400).send({ "error": err.message });
        }
    }
}));
router.put("/:accountID/deposit", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = transactionSchema.validate(request.body);
    if (error) {
        return response.status(400).send(error.details[0].message);
    }
    try {
        const updatedAccount = yield (0, transactionHandler_1.deposit)(request.params.accountID, request.body.amount);
        return response.status(200).send(updatedAccount);
    }
    catch (err) {
        if (err instanceof Error) {
            return response.status(400).send({ "error": err.message });
        }
    }
}));
exports.default = router;
