import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {Post_I} from "../redux/types";
import {Container, Typography, makeStyles, IconButton, TextField, TextareaAutosize} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CommentsSection from "../components/comments-section.component";
import {useDispatch} from "react-redux";
import {updatePost} from "../redux/actions";

const PostPage: React.FC = () => {

    const currentPost: Post_I = useLocation().state as Post_I;
    const styles = useStyles();
    const dispatch = useDispatch();

    const [edit, setEdit] = useState<boolean>(false);
    const [postData, setPostData] = useState<Post_I>(currentPost);

    const handleEdit = () => {
        if (edit) {
            dispatch(updatePost(postData));
        }
        setEdit(prevEdit => !prevEdit);
    }

    const handleChange = (event: React.FormEvent<EventTarget>) => {
        const target = event.target as HTMLInputElement;
        setPostData({...postData, [target.name]: target.value});
    }

    return (
        <Container className={styles.page}>
            <Typography className={styles.header} component="h1" variant="h2">
                {
                    edit
                        ?
                        <TextField
                            fullWidth
                            defaultValue={currentPost.title}
                            name="title"
                            value={postData.title}
                            onChange={handleChange}
                        />
                        :
                        postData.title
                }
                <IconButton onClick={handleEdit}>
                    <EditIcon fontSize="large" color="error"/>
                </IconButton>
            </Typography>
            <Typography color="textSecondary" className={styles.article}>
                {
                    edit
                        ?
                        <TextareaAutosize
                            required
                            cols={100}
                            rows={15}
                            defaultValue={currentPost.body}
                            name="body"
                            value={postData.body}
                            onChange={handleChange}
                            className={styles.textarea}
                        />
                        :
                        postData.body
                }
            </Typography>
            <CommentsSection currentPost={postData}/>
        </Container>
    );
}

const useStyles = makeStyles(() => ({
    page: {
        padding: "1rem"
    },

    article: {
        fontSize: "1.4rem",
        margin: "2rem 0"
    },

    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
    },

    textarea: {
        resize: "none",
        padding: "1rem",
        fontFamily: "Roboto"
    }
}));

export default PostPage;