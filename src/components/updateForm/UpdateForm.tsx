import React, {FocusEventHandler, FormEventHandler, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {update} from "../../redux/userSlice";
import Input from "../../UI/input/Input";
import Card from "../../UI/card/Card";
import classes from './UpdateForm.module.css';

const UpdateForm = () => {
    const [emailError, setEmailError] = useState<boolean>(false);
    const [nameError, setNameError] = useState<boolean>(false);
    const emailRef = React.createRef<HTMLInputElement>();
    const nameRef = React.createRef<HTMLInputElement>();

    const dispatch = useDispatch();

    const onSubmitHandler: FormEventHandler = (event) => {
        event.preventDefault();
        const email = emailRef.current?.value || null;
        const name = nameRef.current?.value || null;

        if (validateInput(email, name)) {
            dispatch(update({name, email}));
        }
    };


    const validateInput = (email: string | null, name: string | null) => {
        let valid = true;
        if(!email) {
            setEmailError(true);
            valid = false;
        }
        if(!name || name.length <= 5) {
            setNameError(true);
            valid = false;
        }
        return valid;
    };


    const onBlurHandler: FocusEventHandler<HTMLFormElement> = () => {
        setEmailError(false);
        setNameError(false);
    };

    return (
        <Card header={'update info'}>
            <form onSubmit={onSubmitHandler} onBlur={onBlurHandler} className={classes.form}>
                <Input showError={nameError}
                       ref={nameRef}
                       placeholder={'update name'}
                       type={'text'}
                       key={'name'}
                />
                <Input showError={emailError}
                       ref={emailRef}
                       placeholder={'update email'}
                       type={'email'}
                       key={'email'}
                />
                <button type="submit">change</button>
            </form>
        </Card>
    );
};

export default UpdateForm;