import User from "../../models/User.js";
import { fakerES as faker } from '@faker-js/faker';
import bcrypt from "bcrypt";


const seedUsers = async () => {
    const users = [
        {
            _id:"65f08bf319ed20287fd19c3a",
            name: "super_admin",
            email: "super_admin@super_admin.com",
            password: await bcrypt.hash("123456" , 8 ),
            role: "super_admin"

        },
        {
            _id: "65f08bf319ed20287fd19c3b",
            name: "admin",
            email: "admin@admin.com",
            password: await bcrypt.hash("123456" , 8 ),
            role: "admin"

        },
        {
            _id:"65f08bf319ed20287fd19c3c",
            name: "user",
            email: "user@user.com",
            password: await bcrypt.hash("123456" , 8 ),
            role: "user"

        }
    ];
    for (let i = 0; i < 10; i++) {

        const user = {

            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: await bcrypt.hash("123456" , 8 ),
            role: "user"

        }
        users.push(user);

    }
    await User.create(users);
}

export default seedUsers;