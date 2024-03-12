# Hi its me!

This app is a social tool modeled after Instagram, allowing users to post text updates in the feed and engage with posts by giving likes.

### Index

[Deploy](#deployd-🚀)

[Installation](#🔧-installation)

[Functionalities](#hammer-functionalities)







### Deploy 🚀


### 🔧 Installation 

- Initial steps to run the proyect

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

``` bash
$ npm i mongoose -E
```

- installation Git

``` bash
$ git init
```
</br>

- Add type module to do import and export (avoid use "requires")


```sh
//(on package.json) 
//write before scripts:

{
    "type":"module"
}
```

``` bash
npm i mongoose
```

## :hammer: Functionalities

- `Auth endpoints`
- `User endpoints`
- `Post endpoints`

##### Make a register
POST http://localhost:4000/api/auth/register 
- Make a register of one user ( default role is "user")

```sh
{
  "email": "user2@user2.com",
  "password":"123456"
}
```


</br>

##### Login of a user
POST http://localhost:4000/api/auth/login
- Logged User have a token

```sh
{
  "email":"user2@user2.com",
  "password":"123456"
}
```
</br>

##### Retrieve all users 
GET http://localhost:4000/api/users/
- Only for who had "super-admin" role.
- Add the user token on auth/ bearer.
- Retrieve all users.

</br>

##### Retrieve user profile
GET http://localhost:4000/api/users/profile
- For all are logged users.
- This works for all users only for see their own profile.
- Add this user's token in auth/bearer too. 

```sh
//write this on body

{
  "email": "user2@user2.com",
  "password":"123456"
}
```




## To add / Bugs
 
- I tried to add "name" parameter in body of users. But this hasnt control if name is different because in model is not required..