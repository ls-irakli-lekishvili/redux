import React from 'react';
import {useSelector} from "react-redux";

import classes from './Header.module.css';

const Header: React.FC = () => {
    const name = useSelector((state: any) => state.user.name);

    return (
        <div className={classes.header}>
            <div className={classes.welcomeText}>
                Hello {name}
            </div>
        </div>
    );
};

export default Header;