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

##### Delete a post
DELETE http://localhost:4000/api/posts/:id

- Delete a post by id.
- It is only allowed for the owner of the post.
- Add User's token on Auth/Bearer.

##### Update a post
PUT http://localhost:4000/api/posts/:id

- Update the title of a post by id.
- It is only allowed for the owner of the post.
- Add User's token on Auth/Bearer.

```sh
//write this on body
{
  "title": "feliz navidad"
}
```
</br>

##### Get all your own posts
GET http://localhost:4000/api/posts/own

- Add User's token on Auth/Bearer.
</br>

##### Get all posts view feed
GET http://localhost:4000/api/posts

- Add a token in Auth/Bearer because the watcher should be logged.
</br>

##### Get post by Id
GET http://localhost:4000/api/posts/:id

- Add a token in Auth/Bearer because the watcher should be logged.
- Add postId in the request to find it.
</br>

##### Do Like and Unlike a post by Id
PUT http://localhost:4000/api/posts/like/:id

- Add a token in Auth/Bearer because the watcher should be logged.
- Add the like by body writing this:

```sh
{
  "like": true
}

```
*bug* This only works if your write true because the "botton: like" should be "pressedON" to allow the likes acount change true/false and show whose liked the post.



## To add / Bugs
 
- I tried to add "name" parameter in body of users. But this hasnt control if name is different because in model is not required..
- Added 3 posts and 3 users default for some functionalities.