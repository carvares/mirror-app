
import { useEffect, useState } from 'react';
import { ChangeButton } from './Styles/ChangeButton';
import { Container } from './Styles/Container';
import { MirrorStyle } from './Styles/MirrorStyle';
import {FiRefreshCcw} from 'react-icons/fi'
export function Mirror(){

    var [facing, setFacing] = useState(true);

    function getVideo(){
        

        navigator?.mediaDevices?.getUserMedia({
            video:{
                facingMode:{
                    ideal: facing? 'user':'environment'
                }
            }
        })
        .then(stream => {
            let video = document.getElementById('mirror');
            video.srcObject = stream;
        })
        .catch(err => {
            console.log(err)
        })
            }



    useEffect(()=>getVideo(),[facing])
  
    return(
        <Container>
            <MirrorStyle>
                <video id="mirror" autoPlay ></video>
            <ChangeButton onClick={()=> {setFacing(!facing)}}><FiRefreshCcw/></ChangeButton>
            </MirrorStyle>
        </Container>
    )
}