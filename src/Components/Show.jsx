import { useParams } from "react-router-dom";

function Show(props) {
   const params = useParams();

   //const { date, songName, artist, tuning, capo, chords } = props.fields;


  const song = props.song.find((song) => song.id === params.id);

  if(!song) {
      return <h4>Loading ...</h4>
  }


  console.log(song)

 return (

    <section id="section">
      <h1 id="song-name">{song.fields.songName}</h1>
      <h3 id="artist">{song.fields.artist}</h3>
     <p>{song.fields.tuning}</p>
     <p>({song.fields.capo})</p>
     <p>({song.fields.chords})</p>
     </section>

        )

 
 }

export default Show;
 