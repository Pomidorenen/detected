import styles from './styles/module/app.module.scss';
import LightSrc from "./component/lightSrc";
import EffectVHS from "./component/effectVHS";
import Background from "./component/background";
import img1 from "./images/bg-1.jpg";
import img2 from "./images/bg-2.jpg";
import img3 from "./images/bg-3.jpg";
import img4 from "./images/bg-4.jpg";
import ghost from "./images/ghost3.png";
import {useEffect, useRef, useState} from "react";
import MenuCamers from "./component/menuCamers";
import Ghost from "./component/ghost";
function App() {
    const [camers,setCamers] = useState([
        {
            img:img1,
            ghost:[
                {
                    position:[100,100],
                    img:ghost
                },
                {
                    position:[120,100],
                    img:ghost
                },
                {
                    position:[500,200],
                    img:ghost
                }
            ],
        },
        {
            img:img2,
            ghost:[
                {
                    position:[0,0],
                    img:ghost
                }
            ],
        },
        {
            img:img3,
            ghost:[
                {
                    position:[0,0],
                    img:ghost
                }
            ],
        },
        {
            img:img4,
            ghost:[
                {
                    position:[0,0],
                    img:ghost
                }
            ],
        }
    ])
    const [selectCamera,setSelectCamera] = useState(0);

    useEffect(() => {
        const spawnGhost = ()=>{
            const index = Math.round(Math.random()*(camers.length-1));
            const copyCamera = [...camers];
            copyCamera[index].ghost.push({
                img:ghost,
                position:[Math.random()*200,Math.random()*200]
            })
            setCamers([...copyCamera])
        }
        const timer = setInterval(spawnGhost,3000)
        return ()=>clearInterval(timer);
    }, [camers]);
  return (
    <div className={styles.container}>
        {
            camers.map(({img,ghost},i)=>{
                return(i===selectCamera)?<Background key={i} img={img}>
                    {ghost.map(({position,img},j)=>{
                        return <Ghost position={position} img={img}
                                      key ={j}
                                      onClick={()=>{
                                          const copyCamers = [...camers];
                                          copyCamers[i].ghost.splice(j, 1)
                                          setCamers([...copyCamers])
                                      }}/>
                    })}
                </Background>:null
            })
        }
        <LightSrc/>
        <EffectVHS></EffectVHS>
        <MenuCamers
            counts ={camers.length}
            value = {selectCamera}
            setValue = {setSelectCamera}
        />
    </div>
  );
}

export default App;
