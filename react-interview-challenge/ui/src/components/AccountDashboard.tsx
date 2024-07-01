import React, { useState, useEffect } from "react";
import { account as AccountType } from "../Types/Account";
import Paper from "@mui/material/Paper";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { depositFundsAPI, withdrawFundsAPI } from "../services/apiService";

type AccountDashboardProps = {
  account: AccountType;
  signOut: () => Promise<void>;
};

export const AccountDashboard = (props: AccountDashboardProps) => {
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [account, setAccount] = useState(props.account);
  const [dailyWithdrawals, setDailyWithdrawals] = useState(0);
  const [lastWithdrawDate, setLastWithdrawDate] = useState(new Date().toISOString().slice(0, 10));
  const { signOut } = props;

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    if (today !== lastWithdrawDate) {
      setDailyWithdrawals(0);
      setLastWithdrawDate(today);
    }
  }, [lastWithdrawDate]);

  const handleError = (message: string) => {
    alert(message);
  };

  const depositFunds = async () => {
    if (depositAmount > 1000) return handleError("You cannot deposit more than $1000 in a single transaction.");
    if (account.type === 'credit' && depositAmount + account.amount > 0) return handleError("You cannot deposit more than needed to zero out your credit account.");

    try {
      const data = await depositFundsAPI(account.accountNumber, depositAmount);
      setAccount(data);
    } catch (error) {
      handleError((error as {message: string}).message);
    }
  };

  const withdrawFunds = async () => {
    if (withdrawAmount > 200) return handleError("You cannot withdraw more than $200 in a single transaction.");
    if (dailyWithdrawals + withdrawAmount > 400) return handleError("You cannot withdraw more than $400 in a single day.");
    if (withdrawAmount % 5 !== 0) return handleError("You can only withdraw amounts that can be dispensed in $5 bills.");

    const availableBalance = account.type === 'credit' ? account.creditLimit + account.amount : account.amount;
    if (withdrawAmount > availableBalance) return handleError("You cannot withdraw more than your available balance or credit limit.");

    try {
      const data = await withdrawFundsAPI(account.accountNumber, withdrawAmount);
      setAccount(data);
      setDailyWithdrawals((prev: number) => prev + withdrawAmount);
    } catch (error) {
      handleError((error as {message: string}).message);
    }
  };

  return (
    <Paper className="account-dashboard">
      <div className="dashboard-header">
        <h1>Hello, {account.name}!</h1>
        <Button variant="contained" onClick={signOut}>Sign Out</Button>
      </div>
      <h2>Balance: ${account.amount}</h2>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={6}>
          <Card className="deposit-card">
            <CardContent>
              <h3>Deposit</h3>
              <TextField 
                label="Deposit Amount" 
                variant="outlined" 
                type="number"
                sx={{
                  display: 'flex',
                  margin: 'auto',
                }}
                onChange={(e) => setDepositAmount(+e.target.value)}
              />
              <Button 
                variant="contained" 
                sx={{
                  display: 'flex', 
                  margin: 'auto', 
                  marginTop: 2}}
                onClick={depositFunds}
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="withdraw-card">
            <CardContent>
              <h3>Withdraw</h3>
              <TextField 
                label="Withdraw Amount" 
                variant="outlined" 
                type="number" 
                sx={{
                  display: 'flex',
                  margin: 'auto',
                }}
                onChange={(e) => setWithdrawAmount(+e.target.value)}
              />
              <Button 
                variant="contained" 
                sx={{
                  display: 'flex', 
                  margin: 'auto', 
                  marginTop: 2
                }}
                onClick={withdrawFunds}
                >
                  Submit
                </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
    
  )
}