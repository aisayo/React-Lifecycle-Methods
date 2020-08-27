import React from 'react';

const UserList = (props) => {

    return (
        <div>
            User: {props.user.login} - <a href={props.user.repos_url}>Repos</a>
        </div>
    );
};

export default UserList;