# Resource wall
Pinterest for learners.

Resource wall allow learners to save learning resources like tutorials, blogs and videos in a central place that is publicly available to any user.

Built with Bootstrap and jQuery on the front-end, and Node, Express and PostgreSQL on the back-end.

## Final Product
!["home"](https://github.com/silentcontrol/tweeter/blob/master/docs/main.png?raw=true)
!["comment"](https://github.com/silentcontrol/tweeter/blob/master/docs/error.png?raw=true)
!["post"](https://github.com/silentcontrol/tweeter/blob/master/docs/error.png?raw=true)
!["likes"](https://github.com/silentcontrol/tweeter/blob/master/docs/error.png?raw=true)

## Dependencies
Node.js
bcryptjs
body-parser
cookie-session
ejs
express
knex
knex-logger
morgan
pg

## Getting Started
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
5. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
6. Run the server: `npm run local`
7. Visit `http://localhost:8080/`
