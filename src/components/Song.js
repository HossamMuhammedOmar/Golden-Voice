export default function Song({ activeQuran }) {
  return (
    <div className="song-container">
      <img src={activeQuran.cover} />
      <h2>{activeQuran.name}</h2>
      <h3>{activeQuran.artist}</h3>
    </div>
  );
}
