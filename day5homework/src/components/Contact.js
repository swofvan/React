import React  from "react";
import Navbar from "./Navbar";


function Contact() {

    const showMessage = () => {
    document.getElementById('msg').innerHTML = 'Hello from React! I love this page!';
    document.getElementById('heading').style.backgroundColor = 'lightblue';
  }

    return (
        <div className="container">
            <Navbar/>

            <div className='row'>

                <div className='col-3'></div>

                <div className='col'>

                    <div className="card" style={{textAlign: 'center', marginTop: '50px'}}>
                        <div className="card-body">
                        <h1 className="card-title" id='heading'>This is the Contact Page</h1>
                        <div><h4 id='msg' className='text-success'></h4></div>

                            <br/><br/>
                            
                            <button
                                className='btn btn-primary'
                                onClick={showMessage}>Show Enthusiasm</button>
                        </div>
                    </div>
                </div>
                <div className='col-3'></div>
            </div>

                
        </div>
        
    )
};

export default Contact;