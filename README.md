## Description
This is a back-end side of the technical test that follows the requirement with the [Figma design](https://www.figma.com/proto/pynjT5AsIQ2GH5z9HnVZfb/Test?node-id=1%3A2&starting-point-node-id=1%3A2), here is the live version of the [API](https://functional-test-api.herokuapp.com), you can check the front-end repo [here](https://github.com/MohammedAlghazali/functional-text-frontend) and to visit the site from [here](functional-test-front.netlify.app/).

Available endpoints in thr APIs

|  Route | Method | Description  | Request Body Allowed Values                       |
|:------:|--------|--------------|---------------------------------------------------|
| /users | POST   | Add New User | firstName, lastName, email, password, phoneNumber |

## Built With
[Node.js](https://nodejs.org/en/)

[TypeScript](https://www.typescriptlang.org/)

[Express.js](https://expressjs.com/)


## Getting Started
To get your local version up and running please follow these steps:


### Prerequisites

in order to be able to run the project you need to install: 

1- [Node.js](https://nodejs.org/en/)

2- [Docker](https://www.docker.com/)


### Installation
1- Clone the repo

```
git clone https://github.com/MohammedAlghazali/functional-text-backend.git
```

2- Install NPM packages

```
npm install
```

3- build the docker image using this command

```
docker-compose build
```

4- run the project using this command

```
docker-compose up
```

Notes:

A - the development database is set up within the `docker-compose.yml` file.

B -  The environment variables are set up for the development and the test environment in the `.env.development` and `.env.test`.


5- Your app is running now on [http://localhost:5000](http://localhost:5000)


### Useful Commands

- To access the node container bash

```
docker exec -it functional-text-backend_web_1 bash
```

- To see the server logs

```
docker logs -f --tail 10 functional-text-backend_web_1
```

### Deployment
The build and the deployment using the docker are set up on `Heroku` using `Github Actions`, the deployment trigger when a pull request is merged to the main branch.