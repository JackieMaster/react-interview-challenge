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
exports.deposit = exports.withdrawal = void 0;
const db_1 = require("../utils/db");
const accountHandler_1 = require("./accountHandler");
const withdrawal = (accountID, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const account = yield (0, accountHandler_1.getAccount)(accountID);
    account.amount -= amount;
    const res = yield (0, db_1.query)(`
    UPDATE accounts
    SET amount = $1 
    WHERE account_number = $2`, [account.amount, accountID]);
    if (res.rowCount === 0) {
        throw new Error("Transaction failed");
    }
    return account;
});
exports.withdrawal = withdrawal;
const deposit = (accountID, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const account = yield (0, accountHandler_1.getAccount)(accountID);
    account.amount += amount;
    const res = yield (0, db_1.query)(`
    UPDATE accounts
    SET amount = $1 
    WHERE account_number = $2`, [account.amount, accountID]);
    if (res.rowCount === 0) {
        throw new Error("Transaction failed");
    }
    return account;
});
exports.deposit = deposit;
