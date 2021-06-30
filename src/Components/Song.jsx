
function Song(props) {
  // console.log('propppss', props)
  return (
    <div className="App">
      <h1> {props.song.date}</h1>
      <h2> {props.song.songName}</h2>
      <h2> {props.song.artist}</h2>
      <h2> {props.song.tuning}</h2>
      <h2> {props.song.capo}</h2>
      <h2> {props.song.chords}</h2>
    </div>
  );
}

export default Song;
