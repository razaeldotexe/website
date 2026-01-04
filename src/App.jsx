import "./App.css";
import artistData from "./database/top artis.json";

function App() {
  const { tiktokArtist } = artistData;

  return (
    <div className="container">
      <h1>Top Artists</h1>
      <div className="artist-list">
        {tiktokArtist.map((artist) => (
          <div key={artist.id} className="artist-card">
            {artist.thumbnail && (
              <img src={artist.thumbnail} alt={artist.name} />
            )}
            <h2>{artist.name}</h2>
            <p>{artist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
