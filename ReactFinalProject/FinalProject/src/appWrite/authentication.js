import { Client, Account, ID } from "appwrite";
import config from '../config/config';

export class Authentication {
    #client = new Client();
    #account;

    Authentication() {
        this.#client
            .setEndpoint(config.api_endPoint)
            .setProject(config.projectID);

        this.#account = new Account(this.#client);
    }

    // It get crenditals and sign up
    async SignUp({ userName, email, password }) {
        try {
            const signUp = await this.#account.create(ID.unique(), email, password, userName);

            if(signUp)
            {

            }
            else
            {
                return signUp;
            }
        } catch (error) {
            console.error(`SignUp Service Error: ${error}`);
        }
        return null;
    }

    // It get cenditals and log in
    async Login({email, password}) {
        try {
            return await this.#account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.error(`Login Service Error: ${error}`);   
        }
        return null;
    }

    // It check is user logged in
    async getCurrentSession()
    {
        try {
            return await this.#account.get();
        } catch (error) {
            console.error(`Is Logged In Service Error: ${error}`);   
        }
        return null;
    }


    // It Logged out from all browser
    async Logout()
    {
        try {
            return await this.#account.deleteSessions();
        } catch (error) {
            console.error(`Logout Service Error: ${error}`);   
        }
        return null;
    }
};


const authService = new Authentication();
export default authService;