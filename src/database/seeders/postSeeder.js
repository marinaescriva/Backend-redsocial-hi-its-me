import Post from "../../models/Post.js";
import { fakerES as faker } from '@faker-js/faker';
import User from "../../models/User.js";




const seedPosts = async () => {
    const posts = [];
    const users = await User.find({});

    for (let i = 0; i < 10; i++) {

        const randomUser = Math.floor(Math.random() * users.length);
        const post = {

            title: faker.lorem.lines({min:1, max:3}),
            text: faker.lorem.text(),
            nick: users[randomUser]._id
    
        }
        posts.push(post);

    }
    await Post.create(posts);
}

export default seedPosts;