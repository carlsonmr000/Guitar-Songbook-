import { useParams } from "react-router-dom";

function Show(props) {
   const params = useParams();

   const { date, songName, artist, tuning, capo, chords } = props.fields;


  const song = props.song.fields.find((song) => song.id === params.id);

 return (

    <section id="section">
      <h1 id="song-name">({song.songName})</h1>
      <h3 id="artist">({song.artist})</h3>
     <p>({song.tuning})</p>
     <p>({song.capo})</p>
     <p>({song.chords})</p>
     </section>

        )

 
 }

export default Show;
 