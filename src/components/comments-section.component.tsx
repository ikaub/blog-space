import React from "react";
import {Comment_I, Post_I, PostState_I} from "../redux/types";
import {Card, CardContent, CardHeader, Avatar, Typography, makeStyles} from "@material-ui/core";
import InputSection from "./input-section.component";
import {useDispatch, useSelector} from "react-redux";
import {addComment} from "../redux/actions";
import {red} from "@material-ui/core/colors";

type CurrentPost = {
    currentPost: Post_I
}

const CommentsSection: React.FC<CurrentPost> = ({currentPost}: CurrentPost) => {

    const styles = useStyles();
    const dispatch = useDispatch();
    const comments: Comment_I[] = useSelector((state: PostState_I) => state.posts)
        .find(post => post.id === currentPost.id)!.comments;

    const handleAddComment = (comment: Comment_I) => {
        dispatch(addComment(currentPost, comment));
    }

    return (
        <div>
            {
                comments.length ?
                    comments.map((comment: Comment_I, index: number) =>
                        <Card key={index} className={styles.card}>
                            <CardHeader
                                avatar={
                                    <Avatar className={styles.avatar}>
                                        {comment.author[0].toUpperCase()}
                                    </Avatar>
                                }
                                title={comment.author}
                                titleTypographyProps={{variant: "h6"}}
                            />
                            <CardContent>
                                {comment.content}
                            </CardContent>
                        </Card>
                    ) :
                    <Typography component="h2" variant="h4">
                        There are no comments yet!
                    </Typography>
            }
            <InputSection addComment={handleAddComment}/>
        </div>
    )
};

const useStyles = makeStyles(() => ({
    card: {
        marginTop: "1.5rem"
    },

    author: {
        fontSize: "1.6rem"
    },

    avatar: {
        backgroundColor: red[500]
    }
}));

export default CommentsSection;