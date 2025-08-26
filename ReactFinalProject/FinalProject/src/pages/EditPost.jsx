import { useEffect } from "react";
import database from "../appWrite/databaseConfig";
import { Post_Form } from "../components";
import { useParams } from "react-router-dom";

export default function EditPost(){
    const {postID} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => (
        postID && database.GetPost(postID)
            .then((post) => (
                setPost(post)
            ))
    ), [postID]);

    return <Post_Form post={post} />;
}