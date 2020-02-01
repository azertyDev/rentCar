import React from 'react';
import '../Css/list.css';
const List = ({user}) => {
    if(!user){
        return null
    }
    return (
        <div className="list_self">
            <div>
               <b>Name: </b> <span>{user.name}</span>
            </div>
            <div>
             <b>Email: </b> <span>{user.email}</span>
            </div>
        </div>
    );
}

export default List;
