"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transactions_1 = __importDefault(require("./routes/transactions"));
const accounts_1 = __importDefault(require("./routes/accounts"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(function (_, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});
// Setup Routes
app.use("/transactions", transactions_1.default);
app.use("/accounts", accounts_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
