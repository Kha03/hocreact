import React from "react";
import PropTypes from "prop-types";
import SongList from "./components/SongList";

Song.propTypes = {};

function Song(props) {
  const songs = [
    {
      id: 1,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg",
      name: "Nhạc hoa lời việt",
    },
    {
      id: 2,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/c/8/b/1c8bcc5d85e2093dcdd9189be7d16293.jpg",
      name: "Rap Việt Ngày Nay",
    },
    {
      id: 3,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/4/4/a/744a785a683a19e948ac7651f3cfeb08.jpg",
      name: "Nhạc hay",
    },
    {
      id: 4,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/1/3/9/0139b1f71ed807473a500a6a37695c65.jpg",
      name: "Nhạc trẻ hot",
    },
  ];
  return (
    <div>
      <SongList songs={songs} />
    </div>
  );
}

export default Song;
