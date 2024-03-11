import { dbConnection } from "../db.js";
import mongoose from "mongoose";
import userSeeder from "./userSeeder.js";
import "dotenv/config.js";

const seed = async () => {
    try {
        await dbConnection();
        console.log("database is connected")
        await userSeeder();


    } catch (error) {
        console.log("database connection is failed");
        console.error(error.message);
    } finally {
        await mongoose.connection.close();
        console.log("database connection closed");
    }

}

seed();