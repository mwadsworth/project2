# Project 2 - Database APIs



[TOC]

## Schema

- We are using the Node.js package sequelize as an ORM to manage our database schema and access layer.
- The following is the current table/column depiction of the Challenge Board schema.

![](./images/apiImage01.gif)


## Schema API Routes

- API routes for these tables pictured above are listed below.

## Users API Routes

- localhost:3000/api/users GET

![](./images/apiImage02.gif)

- localhost:3000/api/users/:id GET by id
- localhost:3000/api/users POST

![](./images/apiImage02a.gif)

- localhost:3000/api/users PUT

![](./images/apiImage02b.gif)

- localhost:3000/api/users/:id DELETE by id

![](./images/apiImage02c.gif)

## Challenges API Routes

- localhost:3000/api/challenges GET

![](./images/apiImage03.gif)

- localhost:3000/api/challenges/:id GET by id
- localhost:3000/api/challenges POST

![](./images/apiImage03a.gif)

- localhost:3000/api/challenges PUT

![](./images/apiImage03b.gif)

- localhost:3000/api/challenges/:id DELETE by id

![](./images/apiImage03c.gif)

## Challenge Details API Routes

- localhost:3000/api/challenge/details GET

![](./images/apiImage08.gif)

- localhost:3000/api/challenge/details/:cid GET details for a Challenge by  challenge id

![](./images/apiImage09.gif)

- localhost:3000/api/challenge/details POST

![](./images/apiImage10.gif)

- localhost:3000/api/challenge/details PUT

![](./images/apiImage11.gif)

- localhost:3000/api/challenge/details/:id DELETE by Challenge Detail id

![](./images/apiImage12.gif)

## Test Forms For API Routes

- There are test forms for each of the APIs. These forms and their embedded javascript  demonstrate the CRUD actions for the various APIs discussed above.

- Main form - localhost:3000/test

  ![](./images/apiImage04.gif)

- User form at localhost:3000/test/users

  ![](./images/apiImage05.gif)

- Challenge form at localhost:3000/test/challenges

  ![](./images/apiImage06.gif)

- Challenge with details form at localhost:3000/test/challenge/details

  ![](./images/apiImage07.gif)

  