
import React from "react";
import App from "../App";
import { ITask } from "../interfaces";

interface Props {
    task: ITask;
    completeTask(tasktodelete: string): void;
    editTask(titletoedit: string, timetoedit: number, descriptiontoedit: string): void;
}

const TodoTask = ({ task, completeTask, editTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
                <textarea>{task.description}</textarea>
            </div>
            <button
                onClick={() => {
                    completeTask(task.taskName);
                }}
            >
                X
            </button>

            <button
                onClick={() => {
                    editTask(task.taskName, task.deadline, task.description);

                }}
            >
                Edit
            </button>
        </div>
    );
};

export default TodoTask;