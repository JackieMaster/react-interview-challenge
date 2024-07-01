import { query } from "../utils/db";

export const getAccount = async (accountID: string) => {
  const res = await query(`
    SELECT account_number, name, amount, type, credit_limit 
    FROM accounts 
    WHERE account_number = $1`,
    [accountID]
  );

  if (res.rowCount === 0) {
    throw new Error("Account not found");
  }

  return res.rows[0];
};