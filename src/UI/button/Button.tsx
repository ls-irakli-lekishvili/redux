import React, {MouseEventHandler} from 'react';
import classes from './Button.module.css';

type IButtonType = "button" | "submit" | "reset" | undefined;

interface Props {
    onClick?: MouseEventHandler;
    type?: IButtonType;
}

const Button: React.FC<Props> = ({children, onClick, type}) => {
    return (
        <button
            className={classes.Button}
            onClick={onClick}
            type={type}>
            {children}
        </button>
    );
};

export default Button;