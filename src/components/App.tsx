import React from 'react';
import classes from './App.module.css';
import UpdateForm from "./updateForm/UpdateForm";
import Header from "./header/Header";


const App = () => {
    return (
        <div className={classes.App}>
            <Header/>
            <div className={classes.Body}>
                <UpdateForm/>
            </div>
        </div>
    );
}

export default App;
