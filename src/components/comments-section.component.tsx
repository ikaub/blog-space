import React, {useState} from "react";
import {Comment_I, Post_I, PostState_I} from "../redux/types";
import {Typography} from "@material-ui/core";
import InputSection from "./input-section.component";
import {useDispatch, useSelector} from "react-redux";
import {addComment} from "../redux/actions";
import Comment from "./comment.component";

type CurrentPost = {
    currentPost: Post_I
}

const CommentsSection: React.FC<CurrentPost> = ({currentPost}: CurrentPost) => {
    const dispatch = useDispatch();
    const comments: Comment_I[] = useSelector((state: PostState_I) => state.posts)
        .find(post => post.id === currentPost.id)!.comments;

    const [comment, setComment] = useState<Comment_I>({author: "", content: ""});

    const handleChange = (event: React.FormEvent<EventTarget>) => {
        const target = event.target as HTMLInputElement;
        setComment({...comment, [target.name]: target.value});
    }

    const handleAddComment = () => {
        if (comment.author.length && comment.content.length) {
            dispatch(addComment(currentPost, comment));
            setComment({author: "", content: ""});
        } else
            alert("Input fields cannot be empty. Try again, please.");
    }

    return (
        <div>
            {
                comments.length
                    ?
                    comments.map((comment: Comment_I, index: number) => <Comment comment={comment} key={index}/>)
                    :
                    <Typography component="h2" variant="h4">
                        There are no comments yet!
                    </Typography>
            }
            <InputSection
                submitHandler={handleAddComment}
                inputLabel="Author"
                inputName="author"
                inputValue={comment.author}
                textareaName="content"
                textareaValue={comment.content}
                onChangeHandler={handleChange}
            />
        </div>
    )
};

export default CommentsSection;