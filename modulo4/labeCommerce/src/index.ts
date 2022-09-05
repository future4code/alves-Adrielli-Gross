import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express";
import { userInput, userInsert } from "./types";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const insertUser =async (insertUser : userInsert): Promise<string> => { 
    const { id, name, email, password } = insertUser

    await connection("labecommerce_users")
    .insert({
        id,
        name, 
        email, 
        password
    })

    return `User ${name} created susscefully!`
}

const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, password}:userInput = req.body
        
        if(!name || !email || !password) {
            throw new Error("Name, Email and Password required")
        }
        
        const userInsert : userInsert = {
            id: Date.now().toString(),
            name, 
            email,
            password
        }

        const answer = await insertUser(userInsert)
        res.status(201).send("Sucess!")

    } catch (err:any) {
        res.status(500).send("Error")
    }
}
app.post("/user", createUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});