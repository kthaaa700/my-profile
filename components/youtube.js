import React from "react";
import Image from 'next/image';

const Youtube = (props) => {
    return (
        <div>
            <a href={props.toYoutube}>
                <Image
                    src={props.link}
                    height={150}
                    width={180}
                ></Image>
            </a>
            <p style={{textAlign : "center"}}>
                유튜브 이름 : {props.name} </p>
        </div>
    )
}

export default Youtube;