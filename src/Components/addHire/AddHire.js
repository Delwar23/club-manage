import React from 'react';

const AddHire = (props) => {
    console.log(props.hire)
    const hires = props.hire;
    return (
        <div>
            <h1>Hired List</h1>
            <ul>
                {hires.map(hire=><li>{hire.name}</li>)}
            </ul>
        </div>
    );
};

export default AddHire;