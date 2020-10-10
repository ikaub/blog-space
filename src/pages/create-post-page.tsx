import React, {useState} from "react";
import InputSection from "../components/input-section.component";
import {useDispatch} from "react-redux";
import {addNewPost} from "../redux/actions";
import {Post_I} from "../redux/types";
import {useHistory} from "react-router-dom";
import {Container} from "@material-ui/core";

type PostInput = {
    title: string,
    body: string
}

const CreatePostPage: React.FC = () => {

    const [postContent, setPostContent] = useState<PostInput>({title: "", body: ""});
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event: React.FormEvent<EventTarget>) => {
        const target = event.target as HTMLInputElement;
        setPostContent({...postContent, [target.name]: target.value});
    }

    const handleAddPost = () => {
        dispatch(addNewPost(postContent as Post_I));
        history.push("/");
    }

    return (
        <Container>
            <InputSection
                submitHandler={handleAddPost}
                inputLabel="Title"
                inputName="title"
                inputValue={postContent.title}
                textareaName="body"
                textareaValue={postContent.body}
                onChangeHandler={handleChange}
            />
        </Container>
    );
}

export default CreatePostPage;