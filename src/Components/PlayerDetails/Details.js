import React from 'react';
const details = (props) => {

  
    const detailsStyle = { border: '2px solid black', marginTop: '5px', backgroundColor: 'gray', textAlign: 'center' }
    const player = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (

        <div style={detailsStyle}>
            <h2>Name : {player.name}</h2>
            <h4>UserName : {player.username}</h4>
            <h4>Mail : {player.email}</h4>
            <h4>Phone No : {player.phone}</h4>
            <button onClick={() => handleAddPlayer(player)}>Hire Me</button>


        </div>
    );
};

export default details;