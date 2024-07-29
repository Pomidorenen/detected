import React, {useEffect, useState} from 'react';

const LightSrc = ({size=240}) => {
    const [position,setPosition] = useState([0,0]);
    const halfSize= size/2;
    const handlerMouseMoveSrc =(e)=>{
        setPosition([e.clientX-halfSize,e.clientY-halfSize])
    }
    useEffect(()=>{
        const mouseMove = document.addEventListener("mousemove",handlerMouseMoveSrc)
        return()=> document.removeEventListener("mousemove",mouseMove)

    },[handlerMouseMoveSrc])
    return (
        <div
             style={{
                 position:"absolute",
                 top:position[1],
                 left:position[0],
                 width:size+"px",
                 height:size+"px",
                 background:"radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0) 70%)",
                 borderRadius:"50%",
                 transition:"0.4s all ease-out",
                 backdropFilter:"brightness(3) saturate(120%)"
             }}
        >
        </div>
    );
};

export default LightSrc;