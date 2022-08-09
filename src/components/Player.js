import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Player({ activeQuran }) {
  // Ref
  const audioRef = useRef(null);

  // Event Handler
  const playHandler = () => {
    console.log(audioRef.current);
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>start time</p>
        <input type="range" />
        <p>end time</p>
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
      <audio ref={audioRef} src={activeQuran.audio}></audio>
    </div>
  );
}
