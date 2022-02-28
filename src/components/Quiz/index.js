import React from "react";
// Components
import Question from "../Question";
// Styles
import { Wrapper } from "./Quiz.styles";
// Config
import { USERS } from "../../config";

const Quiz = () => {
    return (
        <Wrapper id="quiz" className="section">
            <h1>Quiz</h1>
            <p>Based on the info extracted from the database and data gathered from Social Media can you try to guess which passwords they use?</p>
            {USERS.map((user) => (
                <Question user={user} key={user.id} />
            ))}
        </Wrapper>
    )
}

export default Quiz;
