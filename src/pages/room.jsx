import React, {useEffect} from 'react';
import {useSocket} from '../providers/socket';

const RoomPage = () => {
    const {socket} = useSocket();

    const handleNewUSerJoined = (data) => {
        const {emailID} = data
        console.log('new user joined room', emailID);
    };




        useEffect(() => {
            socket.on('user-joined', handleNewUSerJoined); 
        }, [socket]);    
    
    
        return (
            <div className='room-page-container'>
                <h1>Room Page</h1>
            </div>
        );
    };

export default RoomPage;