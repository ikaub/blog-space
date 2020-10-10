import React, {useState} from "react";
import {TextareaAutosize, makeStyles, FormControl, InputLabel, Input, Button} from "@material-ui/core";
import {Send} from "@material-ui/icons";
import {Comment_I} from "../redux/types";

type Huita = {
    addComment: Function
}

const InputSection: React.FC<Huita> = ({addComment}: Huita) => {

    const styles = useStyles();
    const [comment, setComment] = useState<Comment_I>({author: "", content: ""});

    const handleChange = (event: React.FormEvent<EventTarget>) => {
        const target = event.target as HTMLInputElement;
        setComment({...comment, [target.name]: target.value});
    }

    return (
        <form>
            <FormControl className={styles.formControl}>
                <InputLabel className={styles.inputField}>Author</InputLabel>
                <Input
                    required
                    className={styles.input}
                    value={comment.author}
                    name="author"
                    onChange={handleChange}
                />
            </FormControl>
            <TextareaAutosize
                className={styles.comment}
                required
                cols={100}
                rows={15}
                value={comment.content}
                name="content"
                onChange={handleChange}
            />
            <Button
                variant="contained"
                color="default"
                startIcon={<Send/>}
                size="large"
                onClick={() => addComment(comment)}
            >
                Post
            </Button>
        </form>
    );
}

const useStyles = makeStyles(() => ({
    formControl: {
        margin: "2rem 0",
        display: "block"
    },

    inputField: {
        fontSize: "1.4rem",
    },

    input: {
        fontSize: "1.6rem"
    },

    comment: {
        resize: "none",
        padding: "1rem",
        fontSize: "1.6rem",
        fontFamily: "Roboto"
    }
}));

export default InputSection;