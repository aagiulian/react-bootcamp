import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Seven nation Army", duration: "4:05" },
    { title: "Barbie girl", duration: "3:30" },
    { title: "All star", duration: "3:15" },
    { title: "I want it that Way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
