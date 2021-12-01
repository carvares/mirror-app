
import { Container } from './Styles/Container';
import { MirrorStyle } from './Styles/MirrorStyle';
export function Mirror(){
    function getVideo(){
        navigator.mediaDevices?.enumerateDevices().then(response => console.log)

        navigator?.mediaDevices?.getUserMedia({
            video:true
        })
        .then(stream => {
            let video = document.getElementById('mirror');
            video.srcObject = stream;
        })
        .catch(err => {
            console.log(err)
        })
    }
    getVideo();
    return(
        <Container>
            <MirrorStyle id="mirror" autoPlay/>
        </Container>
    )
}