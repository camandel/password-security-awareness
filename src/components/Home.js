import React from "react";
// Components
import Menu from './Menu';
import Intro from "./Intro";
import Database from "./Database";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Quiz from "./Quiz";
// Images
import Images from "./Images";
// Config
import { USERS } from "../config";

const Home = () => {
    return (
        <>
            <Menu />
            <Intro />
            <Database users={USERS} />
            <Grid header="Data collected from Social Media">
                {Images.map((item) => (
                    <Thumb image={item} key={item} />
                ))}
            </Grid>
            <Quiz />
        </>
    )
}

export default Home;