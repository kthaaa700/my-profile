import React from "react";
import Image from 'next/image';
import Profile from '../components/profile';
import Webtoon from "../components/webtoon";
import Youtube from "../components/youtube";

const Private = () => {
    return (
        <React.Fragment>
            <title>This is my Profile</title>
            <link rel="icon" href="/favicon.ico" />
            <h1 style={{ textAlign: "center" }}> 비밀 자기소개서 </h1>
            <h3 style={{margin : "30px"}}> 1. 자기소개 </h3>
            <div style={{ margin : "30px", display: "flex" }}>
                <Image
                    src="/sh.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={250}
                />
                <Profile style={{ flex: 1 }} name="김성현" age="30" address="서울시 관악구 신림동 90-99 오빌팰리스 106호" food="건강한 음식" girlFriend="신예훈" link="https://m.map.naver.com/search2/search.naver?query=%EA%B4%80%EC%95%85%EA%B5%AC%20%EC%8B%A0%EB%A6%BC%EB%8F%99%2090-99&sm=hty&style=v5"></Profile>
            </div>
            <h3 style={{margin : "30px"}}> 2. 좋아하는 웹툰 </h3>
            <div style={{ margin : "30px", display: "flex", justifyContent: "space-between" }}>
                <Webtoon title="소녀의세계" author="모랑지" towebtoon="https://comic.naver.com/webtoon/list.nhn?titleId=654774&weekday=mon" link="/sonyu.jpg"></Webtoon>
                <Webtoon title="전지적 독자 시점" author="슬리피-C" towebtoon="https://comic.naver.com/webtoon/list.nhn?titleId=747269&weekday=wed" link="/docja.jpg"></Webtoon>
                <Webtoon title="나노마신" author="금강불괴" towebtoon="https://comic.naver.com/webtoon/detail.nhn?titleId=747271&no=46&weekday=thu" link="/nano.jpg"></Webtoon>
                <Webtoon title="더 복서" author="정지훈" towebtoon="https://comic.naver.com/webtoon/list.nhn?titleId=736989&weekday=thu" link="/boxer.jpg"></Webtoon>
            </div>

            <h3 style={{margin : "30px"}}> 3. 좋아하는 유튜브 채널 </h3>
            <div style={{ margin : "30px", display: "flex", justifyContent : "space-between"}}>
                <Youtube name="워크맨" link="/workman.jpg" toYoutube="https://www.youtube.com/results?search_query=+%EC%9B%8C%ED%81%AC%EB%A7%A8"></Youtube>
                <Youtube name="네고왕" link="/dalla.jpg" toYoutube="https://www.youtube.com/channel/UC0SoPwEH3idvemSDvKaYgGA"></Youtube>
                <Youtube name="승우아빠" link="/abba.jpg" toYoutube="https://www.youtube.com/channel/UCgsffS7MfKL6YU3r_U3E-aA"></Youtube>
                <Youtube name="짧은대본" link="/daebon.jpg" toYoutube="https://www.youtube.com/channel/UChgOgRNxrtCcVARDQT_c-Zg"></Youtube>
            </div>

        </React.Fragment>
    )
}


export default Private;