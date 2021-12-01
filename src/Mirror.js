
import { useState } from 'react';
import { ChangeButton } from './Styles/ChangeButton';
import { Container } from './Styles/Container';
import { MirrorStyle } from './Styles/MirrorStyle';
export function Mirror(){
    var [facing, setFacing] = useState('user');
    function getVideo(){
        navigator.mediaDevices?.enumerateDevices().then(response => console.log)

        navigator?.mediaDevices?.getUserMedia({
            video:{
                facingMode: 'environment'
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
    function changeView(){
        if(facing === 'user'){
            setFacing('environment')
            return
        } 
        setFacing('user')
    }
    getVideo();
    return(
        <Container>
            <MirrorStyle>
                <video id="mirror" autoPlay ></video>
            <ChangeButton onClick={()=> changeView()}></ChangeButton>
            </MirrorStyle>
        </Container>
    )
}