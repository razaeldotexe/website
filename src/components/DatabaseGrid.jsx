import { useState } from "react";
import Card from "./Card";
import songs from "../database/songs.json";
import artists from "../database/artists.json";
import books from "../database/books.json";
import games from "../database/games.json";

const DatabaseGrid = () => {
  const [activeTab, setActiveTab] = useState("songs");

  const tabs = [
    { id: "songs", label: "Songs", data: songs },
    { id: "artists", label: "Artists", data: artists },
    { id: "books", label: "Books", data: books },
    { id: "games", label: "Games", data: games },
  ];

  const currentData = tabs.find((t) => t.id === activeTab)?.data || [];

  return (
    <div className="database-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {currentData.length > 0 ? (
        <div className="grid-container">
          {currentData.map((item) => (
            <Card
              key={item.id}
              title={item.title || item.name}
              subtitle={
                item.artist || item.author || item.platform || item.description
              }
              image={item.cover || item.thumbnail}
              link={item.link}
              type={activeTab}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No Items Found</h2>
          <p>This collection is currently empty.</p>
        </div>
      )}
    </div>
  );
};

export default DatabaseGrid;
