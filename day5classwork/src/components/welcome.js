import { useParams, useNavigate } from "react-router-dom";

function Welcome () {
    
    let { name } = useParams();
    let nav = useNavigate();

    function goback () {
        nav('/')
    }
 
    return (
        <div className="container" style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>

            <div>
            
                <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Welcome, <span className="text-primary">{name}</span>!</h1>

                <button 
                    className="btn btn-secondary" style={{marginTop: '50px', marginLeft: '35%' }}
                    onClick={goback}>
                    Go Back</button>

            </div>

        </div>
    )
}

export default Welcome;