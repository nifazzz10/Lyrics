import "./App.css";
import Axios from "axios";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
function Lyricfinder() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");

  function searchLyrics() {
    if (artist === "" || title === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`).then((res) => {
      console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    });
  }

  return (
    <div className="App">
      <h1>Lyrics Finder</h1>
      
      <Stack
        direction="row "
        spacing={8}
        alignItems="center"
        justifyContent="center"
        sx={{m:1}}
      >
        <TextField
          id="outlined-basic"
          label="Artist Name"
          variant="outlined"
          onChange={(e) => {
            setArtist(e.target.value);
          }} sx={{m:1}}
        />
        <TextField
          id="outlined-basic"
          label="Song Name"
          variant="outlined"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />{" "}
        <IconButton aria-label="delete">
          <SearchIcon onClick={() => searchLyrics()} />
        </IconButton>
      </Stack>

      <hr />
      <pre>{lyrics}</pre>
    </div>
  );
}

export default Lyricfinder;
