import React from "react";
// Styles
import { Wrapper } from "./Message.styles";

const Message = ({ text, color }) => {
    return (
        <Wrapper>
            <span style={{ "color": color }}>
                {text}
            </span>
        </Wrapper >
    )
}

export default Message;
