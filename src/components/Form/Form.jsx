import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import FileBase from "react-file-base64";

import {Button, Paper, TextField, Typography} from "@material-ui/core";

import {createPost, updatePost} from "../../actions/posts";

import useStyles from "./styles";

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: "",
        message: "",
        selectedFile: "",
        tags: "",
        title: ""
    });
    const post = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post]);

    function clear() {
        setCurrentId(null);
        setPostData({
            creator: "",
            message: "",
            selectedFile: "",
            tags: "",
            title: ""
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }

        clear();
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Editing" : "Creating"} A Memory</Typography>
                <TextField 
                    fullWidth 
                    label="Creator" 
                    name="creator"
                    onChange={(event) => setPostData({...postData, creator: event.target.value})} 
                    value={postData.creator}
                    variant="outlined" 
                />
                <TextField 
                    fullWidth 
                    label="Title" 
                    name="title"
                    onChange={(event) => setPostData({...postData, title: event.target.value})} 
                    value={postData.title}
                    variant="outlined" 
                />
                <TextField 
                    fullWidth 
                    label="Message" 
                    name="message"
                    onChange={(event) => setPostData({...postData, message: event.target.value})} 
                    value={postData.message}
                    variant="outlined" 
                />
                <TextField 
                    fullWidth 
                    label="Tags" 
                    name="tags"
                    onChange={(event) => setPostData({...postData, tags: event.target.value.split(",")})} 
                    value={postData.tags}
                    variant="outlined" 
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        multiple={false} 
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})} 
                        type="file"
                    />
                </div>
                <Button className={classes.buttonSubmit} color="primary" fullWidth size="large" type="submit" variant="contained">Submit</Button>
                <Button color="secondary" fullWidth onClick={clear} size="small" variant="contained">Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;