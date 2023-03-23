import React, { useState, useEffect } from "react";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";
// Components
import Button from "../Button";
import Message from "../Message";
// Styles
import { Wrapper, Content } from "./Question.styles";

const Question = ({ user }) => {
  const [state, setState] = useState("");
  const [correct, setCorrect] = useState(false);
  const [message, setMessage] = useState({ text: "", color: "red" });

  const checkAnswer = (answer, password_hash) => {
    const hash = sha1(sha256(answer).toString()).toString();
    if (hash === password_hash) {
      setCorrect(true);
      setMessage({ text: "Correct answer!", color: "green" });
      document.activeElement.blur();
    } else {
      setCorrect(false);
      setMessage({ text: "Wrong answer", color: "red" });
      setTimeout(() => {
        setMessage({ text: "", color: "red" });
      }, 3000);
    }
  };

  const handleKeypress = (e) => {
    if (e.code === "Enter") {
      checkAnswer(state, user.password_hash);
    }
  };

  useEffect(() => {
    setCorrect(correct);
  }, [correct]);

  return (
    <Wrapper>
      <Content>
        <div>
          What is <b>{user.username}</b>'s password?
        </div>
        <input
          type="text"
          placeholder="Submit your answer here..."
          onChange={(e) => setState(e.currentTarget.value)}
          onKeyPress={handleKeypress}
          value={state}
          disabled={correct}
        />
        <div>
          {!correct && (
            <Button
              text="Submit"
              correct={correct}
              callback={() => checkAnswer(state, user.password_hash)}
            />
          )}
        </div>
        <Message text={message.text} color={message.color} />
      </Content>
    </Wrapper>
  );
};

export default Question;
