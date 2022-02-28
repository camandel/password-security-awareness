import React from "react";
// Styles
import { Wrapper } from "./Intro.styles";

const Intro = () => {
    return (
        <Wrapper id="introduction" className="section">
            <h1>Introduction</h1>
            <p>
                You have successfully hacked the web application at ACME inc and got access to the database.
                After a quick search you found the user table and noticed that there are very useful "hints".
                And after some time spent on Social Engineering attacks you collected other data about thoese users from Social Media sites.
            </p>
            <p>Can you try to guess which passwords they are using?</p>
        </Wrapper>
    )
}

export default Intro;
