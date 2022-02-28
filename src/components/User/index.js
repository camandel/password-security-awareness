import React from "react";

const User = ({ user }) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.password_hash}</td>
            <td>{user.password_hint}</td>
        </tr>
    )
}

export default User;
