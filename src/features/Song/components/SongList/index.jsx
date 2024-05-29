import React from "react";
import PropTypes from "prop-types";
import SongItem from "../SongItem";
import "./styles.scss";
SongList.propTypes = {
  songs: PropTypes.array.isRequired,
};

function SongList({ songs }) {
  return (
    <div>
      <ul className="song-list">
        {songs.map((song) => (
          <li className="song-item" key={song.id}>
            <SongItem song={song} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
