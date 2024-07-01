import express from "express";
import transactionsRouter from "./routes/transactions";
import accountsRouter from "./routes/accounts";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(function (_, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', '*')
  next()
});

// Setup Routes
app.use("/transactions", transactionsRouter);
app.use("/accounts", accountsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});