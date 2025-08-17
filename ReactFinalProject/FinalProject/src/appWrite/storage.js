import { Client, Storage, ID } from "appwrite";
import config from "../config/config";

export class StorageService{
    #client = new Client();
    #storage;

    constructor()
    {
        this.#client
        .setEndpoint(config.api_endPoint)
        .setProject(config.projectID);

        this.#storage = new Storage(this.#client);
    }

    // It creates the file
    async UploadFile(file)
    {
        try {
            return await this.#storage.createFile(
                config.bucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error(`Error in Upload File: ${error}`);
        }
        return null;
    }

    // It deletes the file
    async DeleteFile(fileID)
    {
        try {
            return await this.#storage.deleteFile(
                config.bucketID,
                fileID
            );
        } catch (error) {
            console.error(`Error in Delete File: ${error}`);
        }
        return null;
    }

    // It gets preview
    async GetFilePreview(fileID)
    {
        try {
            return this.#storage.getFilePreview(
                config.bucketID,
                fileID
            );
        } catch (error) {
            console.error(`Error in GetFilePreview: ${error}`);
        }
    }
}

const storage = new StorageService();
export default storage;