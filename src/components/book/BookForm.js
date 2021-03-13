import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function BookForm(props) {
    const classes = useStyles();
    const history = useHistory();
    const executeSubmit = (data, event) => {
        console.log(data);
        event.preventDefault();
        fetch("http://localhost:8080/api/books", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            history.push('/bookList');
        }).catch(err => {
            console.log(err);
        })
    }

    const {register, handleSubmit, errors} = useForm();
    return (
        <form className={classes.form} onSubmit={handleSubmit(executeSubmit)}>
            <div>
                <TextField id="name" label="Name" name="name" fullWidth 
                    inputRef={register({
                        required: {
                            value: true,
                            message: "This field id required",
                        },
                        maxLength: {
                            value: 10,
                            message: "This field should be less than 10"
                        }
                    })} 
                    error={Boolean(errors.name)}
                    helperText={errors.name && <span>{errors.name.message}</span>}
                />
            </div>
            <div>
                <TextField id="author" label="Author" name="author" fullWidth inputRef={register} />
            </div>
            <div>
                <TextField id="url" label="URL" name="url" fullWidth inputRef={register} />
            </div>
            <div>
                <Button type="submit" variant="contained" color="primary" fullWidth startIcon={<SaveIcon />}>Save</Button>
            </div>
        </form>
    );
}

export default BookForm;