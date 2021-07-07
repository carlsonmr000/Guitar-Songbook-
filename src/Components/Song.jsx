 import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";

function Song(props) {
  const {songName, artist } = props.song.fields;

  const history = useHistory();

  const deleteSong = async () => {
    //make specific url

    const songURL = `${baseURL}/${props.song.id}`;
    //make a delete request to that url
    await axios.delete(songURL, config);
    //trigger the useEffect
    props.setToggleFetch((curr) => !curr);
    setTimeout(() => {
      history.push("/");
    });
  };

  return (
    <article>
      <h1>{songName}</h1>

      <h2>{artist}</h2>

  

      <button className="delete" onClick={deleteSong}>
        Delete song
      </button>

      <Link to={`/edit/${props.song.id}`}>
        <button className="edit">Edit Song</button>
      </Link>

      <Link to={`/show/${props.song.id}`}>
        <button className="show">Show more</button>
      </Link>
    </article>
  );
}

export default Song;
