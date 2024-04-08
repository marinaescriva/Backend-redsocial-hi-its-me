import Post from "../../models/Post.js";
import { fakerES as faker } from '@faker-js/faker';
import User from "../../models/User.js";


const seedPosts = async () => {
    const posts = [
            {
                _id: "65f08bf319ed20287fd19c56",
                title: "Sanseviera cilindrica",
                text: "Conscendo addo venia ubi ciminatio utpote uredo auctor cursus.",
                nick: "65f08bf319ed20287fd19c3c",
                image: faker.image.urlLoremFlickr({ category: 'nature' })
    
            },
            {
                _id: "65f08bf319ed20287fd19c55",
                title: "Syngonium pink",
                text: "Conocido como punta de flecha, cinco dedos o Nephthytis; el Syngonium Podophyllum es miembro del género Syngonium y de la familia Araceae.",
                nick: "65f08bf319ed20287fd19c3a",
                image: faker.image.urlLoremFlickr({ category: 'nature' })
    
            },
            {
                _id: "65f08bf319ed20287fd19c54",
                title: "costilla de Adán",
                text: "Esta planta de interior es sencilla de cuidar y queda muy bonita en tu salón..",
                nick: "65f08bf319ed20287fd19c3b",
                image: faker.image.urlLoremFlickr({ category: 'nature' })
               
    
            }
        ];

    const users = await User.find({});

    for (let i = 0; i < 10; i++) {

        const randomUser = Math.floor(Math.random() * users.length);
        const post = {

            title: faker.lorem.lines({min:1, max:2}),
            text: faker.lorem.lines({min:2, max:3}),
            nick: users[randomUser]._id,
            image: faker.image.urlLoremFlickr({ category: 'nature' })
    
        }
        posts.push(post);

    }
    await Post.create(posts);
}

export default seedPosts;