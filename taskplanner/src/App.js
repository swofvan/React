import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';

import TaskList from './components/Tasklist';


function App() {

  let [task, settask] = useState('');  // store input value 
  let [tasklist, settasklist] = useState([]);  // store as array;

  let [message, setmessage] = useState("Add a task to get started!");

  let [bgColor, setBgColor] = useState("white");



  let addtask = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    settasklist([...tasklist, task]);
    settask('');
    setmessage(`Task added: ${task}`);
    setBgColor("#c3f5f9ff");

  }

  return (
    <div className="container" style={{ backgroundColor: bgColor, minHeight: '500px' }}>

      <div className='row text-center'
          style={{ display:'flex', justifyContent: 'center', alignContent:'center'}}>

        <div className='col-md-3'></div>

          <div className='col-md-3'>

            <h1 style={{ marginTop: '50px' }}>Add Tasks</h1>

            <form className='form-group' style={{ marginTop: '20px' }} onSubmit={addtask}>

              <input className='form-control' type='text'
                  placeholder='Enter Task Name' value={task} 
                  onChange={(e) => settask(e.target.value)}/>
              
              <br/>

              <button className='btn btn-primary' type='submit'>Add Task</button>

            </form>

            <br/>

            <TaskList tasklist = {tasklist} message = {message}/>

          </div>

          <div className='col-md-3'></div>

      </div>

    </div>
  );
}

export default App;





// Create a React Task Planner 

// Create a simple React component that manages tasks.
// Add a form to input a task name and a button to add it to a task list.
// The list should be displayed in a child component, with a message below it showing
// “Task added: [task name]!” when a task is added. The initial message should show “Add a task to get started!”.

// Requirements:
// App Structure:
// Use two components:

// Parent (App.js): Contains a form with an input for task names and an “Add Task” button.
// Child (TaskList.js): Displays the task list and a message.
// Parent handles input and button clicks, updating the child’s task list and message.
// Input Form (Parent):
//   Include an input box for task names and an “Add Task” button (btn btn-primary).
//   On button click, append the task to the child’s list, update the message to
// “Task added: [task name]!”, clear the input, and change the parent’s 