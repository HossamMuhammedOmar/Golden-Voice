import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import quranData from "./util";
import { useState } from "react";

function App() {
  const [quran, setQuran] = useState(quranData());
  const [currentQuran, setCurrentQuran] = useState(quran[0]);

  return (
    <div className="App">
      <Song activeQuran={currentQuran} />
      <Player activeQuran={currentQuran} />
    </div>
  );
}

export default App;
