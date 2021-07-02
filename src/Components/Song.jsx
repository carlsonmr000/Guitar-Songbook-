import { useParams } from "react-router-dom";


function Song(props) {
  const params = useParams();

//   useEffect(() => {

//     if(params.id && props.song.length > 0) {
//         const songToEdit = props.song.find((song) => song.id === params.id);

//          if(songToEdit) { 
//              setDate(songToEdit.fields.date);
//              setSongName(songToEdit.fields.songName);
//              setArtist(songToEdit.fields.artist);
//              setTuning(songToEdit.fields.tuning);
//              setCapo(songToEdit.fields.capo);
//              setChords(songToEdit.fields.chords);
//          }
//     }

// }, [params.id, props.song])
//     //collect all the info in object called newSnack

  // const song = props.songName.find((bird) => bird.name === params.name);

   return (  

    <div className="App">
      <h1> {props.song.fields.date}</h1>
      <h2> {props.song.fields.songName}</h2>
      <h2> {props.song.fields.artist}</h2>
      <h2> {props.song.fields.tuning}</h2>
      <h2> {props.song.fields.capo}</h2>
      <h2> {props.song.fields.chords}</h2>
      <button></button>
    </div>

  );
}

export default Song;
