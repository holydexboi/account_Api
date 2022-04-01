INTRODUCTION
    This is an account_api that allow users to create an account, deposit, withdraw and transfer for the account to another account.
    
SETUP
    To setup this api, you will need to clone the git repository to your local machine and run "npm i" to install all the necessary dependencies.

DATABASE SETUP
    This project make use of MySql database. To setup  the database you will  need to manually create a database schema and name it "lendsqr".  Secondly, you  need to create two tables under this "lendsqr" database namely "user" and "account".
    The "user" table is use to store the user or customer that can have an account and also use it as means of authentication. The "user" table has four column which are the "userId", "email", "username", "password". 
          The "userId" is configure to be the primary key and is unique for the user table.
          The "email" is configure to  be unique.
          The "username" is configure to  be unique.
          The "password" store an encrypted string using bcrypt
    The "account" table is use to store the user's account available in the system. The "account" table allow users to deposit, withdraw and transfer amount. The "account" table has three column whixh are the "accountId", "user", "balance".
          The "accountId" is configure to be the primary key and is unique for the account table.
          The "user" is a foreign key which reference the userId and it is configure to be unique.
          The "balance" is the amount currently in the account of the user.
          
      
ROUTE IMPLEMENTATION
    Api routes for users to create signup and login to the system:
        POST: /api/signup
            Username, Password & Email Address
        POST: /api/signin
            Password & Email Address
    Api routes for users to create account, deposit, withdraw and transfer:
        POST: /api/account/create
            UserId, amount
        POST: /api/account/deposit
            UserId, amount
        POST: /api/account/withdraw
            UserId, amount
        POST: /api/account/transfer
            UserId, receiverId(accountId), amount
            
            
