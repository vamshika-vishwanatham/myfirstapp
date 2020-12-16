import React, { useState } from 'react';
import ModelComponent from './ModelComponent';

const UserLoginTable = (props) => {
    const [modal,setModal]=useState(false);
    const[userData,setUserData]=useState();
    const openModal=(userprofile)=>{
        setModal(true);
        setUserData(userprofile);
    }
    return (
        <div >
            <table className="user">
                <TableHeader />
                {
                    props.UserData.map(user => {
                        return <TableData userProfile={user} openModal={openModal}/>
                    })
                }
            </table>
            <ModelComponent hide={modal} close={()=>setModal(false)} userdata={userData}/>

        </div>
    );
};

const TableHeader = () => {
    return (
        <tr>
            <th>First-Name</th>
            <th>Last-Name</th>
            <th>Role-Name</th>
            <th>Active</th>
        </tr>)
}

const TableData = (props) => {
    
    return (<tr>
        <td>{props.userProfile.firstName}</td>
        <td>{props.userProfile.lastName}</td>
        <td>{props.userProfile.role}</td>
        <td><button onClick={()=>{props.openModal(props.userProfile)}}>get details</button></td>
    </tr>)
}

export default UserLoginTable;