import React from "react";
import Image from "next/image";
import Profile from "../components/profile";
import Job from "../components/Job";

const Public = () => {
    return (
        <React.Fragment>
            <h1 style={{ textAlign: "center" }}> 자기소개서 </h1>
            <h3 style={{ margin: "30px" }}> 1. 자기소개 </h3>
            <div style={{ margin: "30px", display: "flex" }}>
                <Image
                    src="/sh.jpg"
                    height={250}
                    width={200}
                ></Image>
                <Profile name="김성현" age="30" address="서울시 관악구" food="콩국수" girlFriend="예후니"></Profile>
            </div>
            <h3 style={{ margin: "30px" }}> 2. 이력 </h3>
            <div style={{ display: "flex"}}>
                <Job jobName="공장" period="2015-01-01 ~ 2017-08-01"></Job>
                <Job jobName="시큐브" period="2019-07-01 ~ 2021-08-01"></Job>

            </div>
            <h3 style={{ margin: "30px" }}> 3. 알바 </h3>
            <h3 style={{ margin: "30px" }}> 4. 자격증 </h3>


        </React.Fragment>
    )
}


export default Public;