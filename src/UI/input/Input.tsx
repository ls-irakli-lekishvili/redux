import React, {FocusEventHandler} from 'react';
import classes from './Input.module.css';

interface Props {
    type?: string;
    placeholder?: string;
    id?: string;
    className?: string;
    showError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, Props>(({
                                                     className,
                                                     placeholder,
                                                     id,
                                                     showError,
                                                     type
                                                 }, ref) => {

    const focusHandler: FocusEventHandler<HTMLInputElement> = () => {

    };

    return (
        <input ref={ref}
               onFocus={focusHandler}
               id={id}
               className={`${className} ${showError? classes.error: undefined}`}
               placeholder={placeholder}
               type={type}
        />
    );
});

export default Input;