import { useNavigate, Link } from "react-router-dom";

function Students () {

    let students =  ["Swofvan", "Akhila", "Nikhil", "Lakshmi"];
    let nav = useNavigate();

    return (
        
        <div className="container">

            <h1>Students</h1>

            <hr/>

            <br/>

            {students.map((stu) => { return <h4 key={stu} style={{textAlign: 'left'}}
                onClick = {() => nav(`/welcome/${stu}`)} >{stu}</h4> } )}

        </div>

    )
    }

export default Students;