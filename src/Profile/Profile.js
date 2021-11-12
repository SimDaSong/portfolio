import React from 'react';
import './Profile.css';

const Profile = ({form, children}) => {
    return (
        <div className="Profile-wrap" id="Profile">
            <h1 className="title"><mark>PROFILE</mark></h1>
            <div>
                <p>심다송, Sim Da-song</p>
                <p>Email: song58449@gmail.com</p>
                <p>Github: https://github.com/SimDaSong</p>
                <p>Facebook: </p>
            </div>
        </div>
    );
};

export default Profile;