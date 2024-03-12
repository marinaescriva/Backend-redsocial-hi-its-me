import Post from "../../models/Post.js";
import { fakerES as faker } from '@faker-js/faker';
import User from "../../models/User.js";




const seedPosts = async () => {
    const posts = [
            {
                _id: "65f08bf319ed20287fd19c56",
                title: "el tituloooo",
                text: "Conscendo addo venia ubi ciminatio utpote uredo auctor cursus. Cometes…",
                nick: "65f08bf319ed20287fd19c3c"
    
            },
            {
                _id: "65f08bf319ed20287fd19c55",
                title: "el tituloooo2",
                text: "Conscendo addo venia ubi ciminatio utpote uredo auctor cursus. Cometes…",
                nick: "65f08bf319ed20287fd19c3c"
                
    
            },
            {
                _id: "65f08bf319ed20287fd19c54",
                title: "el tituloooo3",
                text: "Conscendo addo venia ubi ciminatio utpote uredo auctor cursus. Cometes…",
                nick: "65f08bf319ed20287fd19c3c"
               
    
            }
        ];

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