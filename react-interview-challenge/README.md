Hello! Welcome to the Advisor's Excel coding challenge. The goal of this exercise is to give us an idea of how you approach problems, utilize existing code and write your own code. When you complete the challenge, our team will review your code and if accepted, we will meet for an interview in which we will discuss your work and review with you.

### Prerequisites
- [Docker](https://www.docker.com/products/docker-desktop/)

### The Challenge

We have created a basic ATM system which is comprised of a database, express api, and react ui. This allows our customers to enter their account number, and then see their balance. They can then withdraw or deposit money and see their balance update.

We would like you to add the following functionality to withdrawals and deposits. You may change any of the components of this project in whichever way makes the most sense to you.

#### Making Withdrawals
When making a withdrawal, the following rules should apply.
- A customer can withdraw no more than $200 in a single transaction.
- A customer can withdraw no more than $400 in a single day. 
- A customer can withdraw any amount that can be dispensed in $5 bills.
- The customer cannot withdraw more than they have in their account, unless it is a credit account, in which case they cannot withdraw more than their credit limit.

#### Making Deposits
When making a deposit, the following rules should apply.
- A customer cannot deposit more than $1000 in a single transaction.
- If this is a credit account, the customer cannot deposit more in their account than is needed to 0 out the account.

### Wrapping Up
Once you have completed the project, we ask that you take some time to answer the questions in the included `wrap-up.md` file.

### Submitting the Project
Please create a public Github repo and use that while you work on this project. Once completed, send michael.hartung@advisorsexcel.com a link to the public repo, and our team will review.

### Evaluation Process
When evaluating this project, we will start by downloading the project, running `docker run build` and then `docker compose up -d`. Make sure that your project can be run with these two steps, otherwise it will not be considered.

After testing the project and reviewing code, we will discuss internally, and if your project is accepted, we will reach out to schedule the first interview, which involves a code review of your project.

### Questions
If you have any questions while working on this project, feel free to reach out to michael.hartung@advisorsexcel.com and i'll get back to you within a day.