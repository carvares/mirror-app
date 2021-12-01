import './mirror.css';
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
        <div className="container">
            <video id="mirror" autoPlay></video>
        </div>
    )
}