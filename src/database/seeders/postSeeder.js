import Post from "../../models/Post.js";
import { fakerES as faker } from '@faker-js/faker';
import User from "../../models/User.js";

const users = User.find({});


const seedPosts = async () => {
    const posts = [];

    for (let i = 0; i < 10; i++) {

        const post = {

            title: faker..firstName(),
            email: faker.internet.email(),
            password: "123456",
            role: "user"

        }
        users.push(user);

    }
    await Post.create(posts);
}

export default seedPosts;