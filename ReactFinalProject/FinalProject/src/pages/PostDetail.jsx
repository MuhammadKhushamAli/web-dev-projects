import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import database from '../appWrite/databaseConfig';
import storage from '../appWrite/storage';
import { Button } from '../components';

export default function PostDetail() {
    const { postID } = useParams();
    const [post, setPost] = useState('');
    const navigate = useNavigate();

    useEffect(() => (
        database.GetPost(postID)
            .then((post) => (
                setPost(post)
            ))
    ), []);

    return (
        <div>
            {post &&
                <div>
                    <h1>{post.title}</h1>
                    <img
                        src={storage.GetFilePreview(post.$id)}
                        alt={post.title}
                    />
                    <p>{post.description}</p>
                    <Button
                    onClick={() => navigate(`/PostModification/${post.$id}`)}>
                        Edit Post
                    </Button>
                    <Button
                        onClick={() => database.DeleteBlog(post.$id)}
                    >
                        Delete Post
                    </Button>
                </div>
            }
        </div>
    )
}