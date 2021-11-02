import React from 'react';
import {useSelector} from "react-redux";

import classes from './Header.module.css';

const Header: React.FC = () => {
    const name = useSelector((state: any) => state.user.name);

    return (
        <div className={classes.header}>
            {name}
        </div>
    );
};

export default Header;