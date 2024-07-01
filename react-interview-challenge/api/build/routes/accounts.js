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
const accountHandler_1 = require("../handlers/accountHandler");
const router = express_1.default.Router();
const getAccountSchema = joi_1.default.string().required();
router.get("/:accountID", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = getAccountSchema.validate(request.params.accountID);
    if (error) {
        return response.status(400).send(error.details[0].message);
    }
    try {
        const account = yield (0, accountHandler_1.getAccount)(request.params.accountID);
        response.send(account);
    }
    catch (err) {
        response.status(404).send({ "error": "Account not found" });
    }
}));
exports.default = router;