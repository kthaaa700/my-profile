import React from "react";

const Profile = (props) => {
    return (
        <div style={{ background : "yellow", flex : 1, display: "flex", flexDirection: "column", alignItems: "space-between", marginLeft: "10px" }}>
            <p> 이름 : {props.name} </p>
            <p> 나이 : {props.age} </p>
            <a href = {props.link} >
                <p> 주소 : {props.address} </p>
            </a>
            <p> 좋아하는 음식 : {props.food} </p>
            <p> 여자친구 : {props.girlFriend} </p>
        </div>
    )
}

export default Profile;