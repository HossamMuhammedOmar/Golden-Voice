import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Player({ activeQuran, isPlaying, setIsPlaying }) {
  // Ref
  const audioRef = useRef(null);

  // Event Handler
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeFormat = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSoundInfo({ ...soundInfo, currentTime: current, duration });
  };

  // States
  const [soundInfo, setSoundInfo] = useState({
    currentTime: null,
    duration: null,
  });

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{timeFormat(soundInfo.currentTime)}</p>
        <input type="range" />
        <p>{timeFormat(soundInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        type="audio/mp3"
        ref={audioRef}
        src={activeQuran.audio}
      ></audio>
    </div>
  );
}
