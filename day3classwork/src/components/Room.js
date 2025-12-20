import { useState } from 'react';
import LightSwitch from './LightSwitch';

function Room() {

    let [lighton, setlighton] = useState(false);

    let bgColor = lighton ? "white" : "black";

    function light() {
        setlighton(!lighton);
    }

    return (
        <div className="App"
            style={{ minHeight: '500vh', backgroundColor: bgColor }}>

            <h1 style={{ paddingTop: '100px' }}>
                {lighton ? "The room is bright" : "The room is dark"}
            </h1>

            <LightSwitch islighton = {lighton} light={light} bgColor = {bgColor}  />

        </div>
    );
}

export default Room;