import React from "react";
// Components
import User from "../User";
// Styles
import { Wrapper, Table } from "./Database.styles";

const Database = ({ users }) => {
    return (
        <Wrapper id="database" className="section">
            <h1>Data from database</h1>
            <Table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>password_hash</th>
                        <th>password_hint</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <User user={user} key={user.id} />
                    ))}
                </tbody>
            </Table>
        </Wrapper>
    )
}

export default Database;
