import storage from "../appWrite/storage";
import { Link } from "react-router-dom";

export default function PostCard(
    {
        $id,
        title,
        imageID
    }
) {
    return (
        <Link
            to={`/post/${$id}`}
            className="w-[30%] p-4"
        >
            <div
            className="w-full">
                <img src={storage.GetFilePreview(imageID)} alt={title} />
                <h2>{title}</h2>
            </div>
        </Link>
    )
}