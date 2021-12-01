
import { useEffect, useState } from 'react';
import { ChangeButton } from './Styles/ChangeButton';
import { Container } from './Styles/Container';
import { MirrorStyle } from './Styles/MirrorStyle';
import {FiRefreshCcw} from 'react-icons/fi'
export function Mirror(){

    var [facing, setFacing] = useState('user');

    function getVideo(){


        navigator?.mediaDevices?.getUserMedia({
            video:{
                facingMode:{
                    ideal:facing
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


    function changeView(){
        if(facing === 'user'){
            setFacing('environment')
            return
        } 
        setFacing('user')
    }
    
    useEffect(() => {
        getVideo();
    });

    return(
        <Container>
            <MirrorStyle>
                <video id="mirror" autoPlay ></video>
            <ChangeButton onClick={()=> {changeView()}}><FiRefreshCcw/></ChangeButton>
            </MirrorStyle>
        </Container>
    )
}