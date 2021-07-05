# basic-auth

**Author: Ahmad Abu Osbeh**
<br>

- tests report
- back-end

**Setup**
<br>

- .env requirements
- PORT - 3003
- Running the app
- npm start
- Endpoint:

```
data should be:
 const obj = {
    username: 'ahmad',
    password: '1234',
  };

```

**example hit :**
[sign up](https://ahmadosbeh-api-server.herokuapp.com/api/v1/food)

- https://ahmadosbeh-api-server.herokuapp.com/api/v1/food

**example hit :**
[signin](https://ahmadosbeh-api-server.herokuapp.com/api/v1/clothes)

- https://ahmadosbeh-api-server.herokuapp.com/api/v1/clothes

- Returns : json with requested data

```

{
"domain": "https://ahmadosbeh-api-server.herokuapp.com/",
"status": "running",
"port": 3003
}

```

# PR link

[PR link](https://github.com/Ahmad-AbuOsbeh/api-server/pull/1)

**Tests**

**using supertest and jest**

- Unit Tests: npm run test

# UML

<br>

![UML-lab03](images/basic-auth.jpg)
