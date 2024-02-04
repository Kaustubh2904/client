import React, {useState, useEffect}from 'react';
import {useNavigate} from 'react-router-dom';
import {useSocket} from '../providers/socket';

const Homepage = () => {
  const {socket} = useSocket();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [roomID, setRoomID] = useState();

  const handleRoomJoined = ({roomID}) => {
    navigate(`/room/${roomID}`); 
  }

  useEffect(() => {
    socket.on('joined-room', handleRoomJoined); 
    }, [socket]);

  const handleJoinRoom = () => {
    socket.emit('join-room', {emailID: email, roomID});
  };




  return (
    <div className='homepage-container'>
        <div className='input-container'>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter your email here' />
            <input  value={roomID} onChange={e => setRoomID(e.target.value)} type="text" placeholder='Enter Room Code' />
            <button onClick={handleJoinRoom}>Enter Room</button>
        </div>
      
    </div>
  )
}

export default Homepage
