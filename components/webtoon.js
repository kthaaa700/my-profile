import React from "react";
import Image from 'next/image';

const Webtoon = (props) => {
    return (
        <div>
            <a href={props.towebtoon}>
                <Image
                    src={props.link}
                    height={150}
                    width={180}
                ></Image >
            </a>
            <div style={{textAlign : "center"}}>
                <p> 제목 : {props.title} </p>
                <p> 작가 : {props.author} </p>
            </div>
        </div>
    )
}

export default Webtoon;