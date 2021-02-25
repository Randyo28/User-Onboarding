import React from 'react';

function Users(props) {

    const {users} = props

    return (
        <div>
            {users.map((user, idx) => {
                return (
                <div>
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.id}</h2>
                </div>
                )
            })}
        </div>
    );
}

export default Users;