import React from "react";

function SongItem({ song }) {
  return (
    <div className="song-content">
      <img src={song.url} alt={song.name} />
      <h3>{song.name}</h3>
    </div>
  );
}

export default SongItem;
