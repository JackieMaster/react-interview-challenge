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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = void 0;
const db_1 = require("../utils/db");
const getAccount = (accountID) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, db_1.query)(`
    SELECT account_number, name, amount, type, credit_limit 
    FROM accounts 
    WHERE account_number = $1`, [accountID]);
    if (res.rowCount === 0) {
        throw new Error("Account not found");
    }
    return res.rows[0];
});
exports.getAccount = getAccount;
