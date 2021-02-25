import React from 'react';

function Users(props) {

    const {users} = props

    return (
        <div>
            {users.map((user) => {
                return (
                <div className="user" key={user.id}>
                    <h2>Name: {user.first_name}</h2>
                    <h2>Email: {user.email}</h2>
                    <h2>Id: {user.id}</h2>
                </div>
                )
            })}
        </div>
    );
}

export default Users;