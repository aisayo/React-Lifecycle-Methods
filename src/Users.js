import React from 'react';

import UserList from './UserList'

const Users = (props) => {
    return (
        <div>
            { props.users.map(user => <div key={user.id}><UserList  user={user}/></div>)}
        </div>
    );
};

export default Users;


