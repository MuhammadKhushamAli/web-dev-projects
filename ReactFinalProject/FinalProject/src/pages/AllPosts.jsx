import { useEffect, useState } from "react";
import database from '../appWrite/databaseConfig';
import { Container, PostCard } from "../components";

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => (
        database.GetPosts()
            .then((posts) => (
                posts && setPosts(posts.documents)
            ))
    ), []);

    return (
        <Container>
            {posts ? posts.map((post) => (
                <div>
                    <PostCard
                        $id={post.$id}
                        title={post.title}
                        imageID={post.imageID}
                    />
                </div>
            ))
                :
                <h1>
                    No Posts Available
                </h1>
            }
        </Container>
    )
}