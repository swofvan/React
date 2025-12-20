import React from "react";

function LightSwitch( {islighton, light, bgcolor} ) {

    return(
        <div className="App"
            style={{ minHeight: '500vh', backgroundColor: bgcolor}}>

            <button className="btn btn-primary"
            style={{ marginTop: '200px' }}
                onClick={light}>
                {islighton ? "Light OFF" : "Light ON"}
            </button>

        </div>
    )
}

export default LightSwitch;