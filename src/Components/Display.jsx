import React,{useState,useEffect} from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import List from "./List"
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
const Display = ({id,currentTrack,audioRef}) => {
  const[playing,setPlaying]=useState(false);
  const[idx,setIdx]=useState(0);
  const[listing,setList]=useState(false);
  const playHandler=()=>{
    console.log("clicked")
    setPlaying((prev)=>!prev);
    if(playing){
     audioRef.current.play();
    }
    else{
      audioRef.current.pause();
    }
  }
  const prevHandler=()=>{
    if(idx==0){
      // console.log(currentTrack.length-1);
      setIdx(currentTrack.length-1);
    }
    else{
    setIdx(idx-1);
    }
  }
  const nextHandler=()=>{
    if(idx==currentTrack.length-1){
      setIdx(0);
    }
    else{
    setIdx(idx+1);
    }
  }
  const selectHandler=(item)=>{
   setIdx(item)
  }
  const showList=()=>{
   setList((prev)=>!prev);
  }
  return (
    
    <div id="main">
      {
        console.log(idx)
      }
    <div className='audioPlayer'>
      <div className='dummy'>
        <div className='chill'>Chill Vibes</div>
        <div className='track-info'>
          <img src={currentTrack[idx].thumbnail} alt="song "/>
        </div>
        </div>
        <div className="text">
        <h4 className="title">{currentTrack[idx].title}</h4>
          <h6 className='artist'>Artist</h6>
        </div>
        <div className='icons w3-xlarge'>
        <span onClick={prevHandler}className='arrow'><ArrowCircleLeftIcon fontSize='large'/></span>
       {
       playing? <button onClick={playHandler}>
       <PlayCircleFilledWhiteIcon/>
       </button>
       :<button onClick={playHandler}>
        <PauseCircleIcon/>
        </button>
        }
        <span onClick={nextHandler}className='arrow'><ArrowCircleRightIcon fontSize='large'/></span>
        </div>
        <div className='list'>
      <button onClick={showList}>Show More</button>
    </div>
    </div>
    <h1 id="audio"><audio controls src={currentTrack[idx].src} ref={audioRef}/></h1>
   { listing?<List data={currentTrack}/> : ''}
    </div>
  )
}

export default Display