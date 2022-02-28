import React from "react";
// Styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children }) => (
    <Wrapper id="media" className="section">
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid;