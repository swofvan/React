import React from "react";

function TaskList({ tasklist, message}) {
    return (
        <div className="container">
            <ul>
                {tasklist.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>

            <p className="message">{message}</p>

        </div>
    )
}

export default TaskList;