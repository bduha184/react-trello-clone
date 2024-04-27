import React from 'react'
import "./Tasks.css";
import Task from './Task/Task';

const Tasks = ({ taskList, setTaskList }) => {
  return (
    <div>
      {!taskList || (
        taskList.map((task) => (
          <div key={task.id}>
            <Task
              task={task}
              taskList={taskList}
              setTaskList={setTaskList} />
          </div>
        ))
      )}
    </div>
  )
}

export default Tasks
