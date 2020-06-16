import React from 'react';
import {Link} from "react-router-dom";
import "../css/home.css";
import Button from "@material-ui/core/Button";

function Home(){
    return (
        <div id="doctors">
            <Button variant="contained" color="primary"><Link to={'/doctor0'}>Doctor 1</Link></Button>
            <Button variant="contained" color="primary"><Link to={'/doctor1'}>Doctor 2</Link></Button>
            <Button variant="contained" color="primary"><Link to={'/doctor2'}>Doctor 3</Link></Button>
        </div>
    );
}

export default Home;