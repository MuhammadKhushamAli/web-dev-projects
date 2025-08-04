import { Client, Databases, Query } from "appwrite";
import config from "../config/config";

export class DBService {
    #client = new Client();
    #database;

    DBService() {
        this.#client
            .setEndpoint(config.api_endPoint)
            .setProject(config.projectID);

        this.#database = new Databases(this.#client);
    }

    // It creates a blog
    async CreateBlog({ title, content, imageId, status, userId, slug }) {
        try {
            return await this.#database.createDocument(
                config.databaseID,
                config.collectionID,
                slug,
                {
                    title,
                    content,
                    imageId,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.error(`Error in Create Blog: ${error}`);
        }
        return null;
    }

    // It updates the blog
    async UpdateBlog(slug, {title, content, imageId, status})
    {
        try {
            return await this.#database.updateDocument(
                config.databaseID,
                config.collectionID,
                slug,
                {
                    title,
                    content,
                    imageId,
                    status
                }
            );
        } catch (error) {
            console.error(`Error in Update Blog: ${error}`);
        }
        return null;
    }

    // It deletes the blog
    async DeleteBlog(slug)
    {
        try {
            await this.#database.deleteDocument(
                config.databaseID,
                config.collectionID,
                slug
            );
            return true;
        } catch (error) {
            console.error(`Error in DeleteBlog: ${error}`);
        }
        return false;
    }

    // It gets the Specific Post
    async GetPost(slug)
    {
        try {
            return await this.#database.getDocument(
                config.databaseID,
                config.collectionID,
                slug
            );
        } catch (error) {
            console.error(`Error in Get Post: ${error}`);
        }
        return false;
    }

    // It lists all the acitive posts
    async GetPosts(queries = [Query.equal('status', 'active')])
    {
        try {
            return await this.#database.listDocuments(
                config.databaseID,
                config.collectionID,
                queries
            )
        } catch (error) {
            console.error(`Error in GetPosts: ${error}`);
        }
        return null;
    }
}

const database = new DBService();
export default database;