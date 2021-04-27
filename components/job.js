import React from "react";

const Job = (props) => {
    return (
        <div style = {{flex : "1" , margin : "30px"}} >
            <p> 업체명 : {props.jobName} </p>
            <p> 기간 : {props.period} </p>
        </div>
    )
}

export default Job;