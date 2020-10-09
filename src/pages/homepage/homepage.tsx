import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Post_I, PostState_I} from "../../redux/types";
import {fetchPosts} from "../../redux/actions";
import Post from "../../components/post/post.component";

const HomePage: React.FC = () => {

    const posts: Post_I[] = useSelector((state: PostState_I) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length) {
            dispatch(fetchPosts());
        }
    }, [posts, dispatch]);

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} />)
            }
        </div>
    );
}

export default HomePage;