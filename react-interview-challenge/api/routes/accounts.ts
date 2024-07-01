import express, { Request, Response } from "express";
import Joi, { Schema } from "joi";
import { getAccount } from "../handlers/accountHandler";

const router = express.Router();

const getAccountSchema: Schema = Joi.string().required();

router.get("/:accountID", async (request: Request, response: Response) => {
  const {error} = getAccountSchema.validate(request.params.accountID);
  
  if (error) {
    return response.status(400).send(error.details[0].message);
  }

  try {
    const account = await getAccount(request.params.accountID);
    response.send(account);
  } catch (err) {
    response.status(404).send({"error": "Account not found"});
  }
});

export default router;

