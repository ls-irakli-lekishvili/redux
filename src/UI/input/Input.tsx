import React from 'react';
import classes from './Input.module.css';

interface Props {
    type?: string;
    placeholder?: string;
    id?: string;
    showError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, Props>(({
                                                     placeholder,
                                                     id,
                                                     showError,
                                                     type
                                                 }, ref) => {

    return (
        <input ref={ref}
               id={id}
               className={`${classes.Input} ${showError? classes.error: ''}`}
               placeholder={placeholder}
               type={type}
        />
    );
});

export default Input;