import React from "react";
import {TextareaAutosize, makeStyles, FormControl, InputLabel, Input, Button} from "@material-ui/core";
import {Send} from "@material-ui/icons";

type InputProps = {
    submitHandler: any,
    inputLabel: string,
    inputName: string,
    inputValue: string,
    textareaName: string,
    textareaValue: string,
    onChangeHandler: any
}

const InputSection: React.FC<InputProps> =
    ({
         submitHandler, inputLabel, inputName, inputValue, textareaName, textareaValue, onChangeHandler
     }: InputProps) => {

        const styles = useStyles();

        return (
            <form>
                <FormControl className={styles.formControl}>
                    <InputLabel className={styles.inputField}>{inputLabel}</InputLabel>
                    <Input
                        required
                        className={styles.input}
                        value={inputValue}
                        name={inputName}
                        onChange={onChangeHandler}
                    />
                </FormControl>
                <TextareaAutosize
                    className={styles.comment}
                    required
                    cols={100}
                    rows={15}
                    value={textareaValue}
                    name={textareaName}
                    onChange={onChangeHandler}
                />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Send/>}
                    size="large"
                    onClick={submitHandler}
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