import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import quranData from "./util";
import { useState } from "react";

function App() {
  // States
  const [quran, setQuran] = useState(quranData());
  const [currentQuran, setCurrentQuran] = useState(quran[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song activeQuran={currentQuran} />
      <Player
        activeQuran={currentQuran}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
