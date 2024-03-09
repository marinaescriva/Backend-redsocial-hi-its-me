
``` bash
$ npm init --yes
```


``` bash
$ npm i express
```

``` bash
$ npm i nodemon -D 
```

``` bash
$ npm dotenv -E
```

##### add type module to do import and export (avoid use "requires")

(on package.json) 
write before scripts:
```
{
    "type":"module"
}
```

``` bash
npm i mongoose
```



## Solved
 
- I tried to add "name" parameter in body of users. But this hasnt control if name is different because in model is not required..

## Endpoints

POST http://localhost:4000/api/auth/register 
- Make a register of one user ( default role is "user")

```
{
  "email": "user2@user2.com",
  "password":"123456"
}
```

</br>


POST http://localhost:4000/api/auth/login
- Logged User have a token

```
{
  "email":"user2@user2.com",
  "password":"123456"
}
```
</br>

GET http://localhost:4000/api/users/
- Only for who had "super-admin" role.
- Add the user token on auth/ bearer.

</br>

GET http://localhost:4000/api/users/profile
- For all are logged users.
- This works for all users only for see their own profile.
```
//write this on body

{
  "email": "user2@user2.com",
  "password":"123456"
}
```
- Add this user's token in auth/bearer too. 


