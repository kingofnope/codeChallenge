import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [description, setDesc] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "deadline") {
      setDealine(Number(event.target.value));
    }
  };

  const handleChange1 = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (event.target.name === "desc") {
      setDesc(event.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline, description: description };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
    setDesc("");
  };

  const completeTask = (tasktodelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != tasktodelete;
      })
    );
  };

  const editTask = (titletoedit: string, timetoedit: number, descriptiontoedit: string): void => {
    setTodoList(
      todoList.filter((task) => {
        if (task.taskName == titletoedit) {
          const newTask = { taskName: titletoedit, deadline: timetoedit, description: descriptiontoedit };
          setTodoList([...todoList, newTask]);
          setTask("");
          setDealine(0);
          setDesc("");
        }
        return todoList
      }
      ))
  }

  return (
    <div className="App">
      <h1> Agenda for the Day </h1>
      <div className="header">
        <div className="inputContainer">
          <h2> Task/ Topic Title</h2>
          <input
            type="text"
            placeholder="Title..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <h2> Time in minutes </h2>
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
          <h2> Text description </h2>
          <textarea

            placeholder="Description"
            name="desc"
            value={description}
            onChange={handleChange1}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <h1> Topic for today </h1>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} editTask={editTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
