import { Button } from "./Styles/Button";
import { MirrorStyle } from "./Styles/MirrorStyle";
export function Mirror() {
  function getVideo() {
    let constraintObj = {
      audio: true,
      video: {
        facingMode: {
          ideal: { exact: "user" },
        },
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 },
      },
    };

    navigator?.mediaDevices
      ?.getUserMedia(constraintObj)
      .then((stream) => {
        let video = document.getElementById("mirror");
        video.srcObject = stream;
        video.onloadedmetadata = function (ev) {
          video.play();
        };
        let start = document.getElementById('start');
        let stop = document.getElementById('stop');
        let vidSave = document.getElementById('mirror2')
        let mediaRecorder = new MediaRecorder(stream);
        let chunks = [];

        start.addEventListener('click', (ev) => {
            mediaRecorder.start();
        });
        stop.addEventListener('click', (ev) => {
            mediaRecorder.stop();
        });
        mediaRecorder.ondataavailable = function(ev) {
            chunks.push(ev.data);
        }
        mediaRecorder.onstop = (ev) => {
            let blob = new Blob(chunks, {'type': 'video/webm;'});
            chunks = [];
            let videoURL = window.URL.createObjectURL(blob);
            vidSave.src = videoURL
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getVideo();

  return (
    <>
      <MirrorStyle id="mirror" controls/>
      <MirrorStyle id="mirror2" controls/>
      <Button id="start">start</Button>
      <Button id="stop">stop</Button>
    </>
  );
}
