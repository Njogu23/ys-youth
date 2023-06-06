import React from 'react';

const UserCards = ({ users }) => {

    const userCard = users.map((u) => {

        return(
            <div key={u.id}>
                
            </div>
        )
    })
    return (
        <div>
            {userCard}
        </div>
    );
}

export default UserCards;
