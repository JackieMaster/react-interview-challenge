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
exports.query = void 0;
const pg_1 = __importDefault(require("pg"));
const query = (query_1, ...args_1) => __awaiter(void 0, [query_1, ...args_1], void 0, function* (query, values = []) {
    const { Client } = pg_1.default;
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    yield client.connect();
    const res = yield client.query(query, values);
    yield client.end();
    return res;
});
exports.query = query;
