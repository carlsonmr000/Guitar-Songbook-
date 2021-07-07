import { useParams } from "react-router-dom";

function Show(props) {
   const params = useParams();

   //const { date, songName, artist, tuning, capo, chords } = props.fields;


  const song = props.song.find((song) => song.id === params.id);

  if(!song) {
      return <h4>Loading ...</h4>
  }



 return (

    <section id="section">
      <h1 id="show-name">{song.fields.songName}</h1>
      <h3 id="show-artist">{song.fields.artist}</h3>
     <p id="show-tuning">{song.fields.tuning}</p>
     <p id="show-capo">{song.fields.capo}</p>
     <p id="show-chords">{song.fields.chords}</p>
     </section>

        )

 
 }

export default Show;
 