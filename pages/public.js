import React from "react";
import Image from 'next/image';
import Profile from '../components/profile';
import Webtoon from "../components/webtoon";

const Public = () => {
    return (
        <React.Fragment>
            <title>This is my Profile</title>
            <link rel="icon" href="/favicon.ico" />
            <h1 style={{ textAlign: "center" }}> 자기소개서 </h1>
            <h3> 1. 자기소개 </h3>
            <div style={{ display: "flex" }}>
                <Image
                    src="/sh.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={250}
                />
                <Profile style = {{ flex : 1 }}name="김성현" age="30" address="서울시 관악구 신림동 90-99 오빌팰리스 106호" food="건강한 음식" girlFriend="신예훈" link="https://m.map.naver.com/search2/search.naver?query=%EA%B4%80%EC%95%85%EA%B5%AC%20%EC%8B%A0%EB%A6%BC%EB%8F%99%2090-99&sm=hty&style=v5"></Profile>
            </div>
            <h3> 2. 좋아하는 웹툰 </h3>
            <div style={{ display: "flex" }}>
                <Webtoon title="소녀의세계" author="모랑지" towebtoon="https://comic.naver.com/webtoon/list.nhn?titleId=654774&weekday=mon" link="/sonyu.jpg"></Webtoon>
                <Webtoon title="전지적 독자 시점" author="슬리피-C" towebtoon="https://comic.naver.com/webtoon/list.nhn?titleId=747269&weekday=wed" link="/docja.jpg"></Webtoon>
            </div>

            <h3> 3. 좋아하는 유튜브 채널 </h3>

        </React.Fragment>
    )
}


export default Public;