import React from 'react';
import classes from './Card.module.css';

interface Props {
    header?: string;
}

const Card: React.FC<Props> = ({children, header}) => {
    return (
        <div className={classes.card}>
            {header &&
            <div className={classes.cardHeader}>
                {header}
            </div>}
            <div className={classes.cardBody}>
                {children}
            </div>
        </div>
    );
};

export default Card;