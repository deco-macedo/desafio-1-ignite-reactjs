import styled from "styled-components";

export const TaskListArea = styled.div` 

max-width: 46rem;
margin: 1rem auto;

.taskList {
  margin-top: 4rem;
}

.tasksInfo {
  font-weight: 400;
  font-size: 0.8rem;
  color: #d9d9d9;

  display: flex;
  justify-content: space-between;
}

.createdTasks b {
  color: #4ea8de;
  margin-right: 0.5rem;
}

.createdTasks span,
.finishedTasks span {
    background: #333333;
    color: #d9d9d9;
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
  font-size: 0.75rem;
}

.finishedTasks b {
  color: #8284fa;
  margin-right: 0.5rem;
}

.taskList ul {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.taskList li {
  background: #262626;
  border: 1px solid #333333;
  padding: 1rem;
  border-radius: 8px;

  font-size: 0.875rem;

  display: flex;
  gap: 0.75rem;
}

input[type="checkbox"] {
  appearance: none;
  width: 1.09rem;
  height: 1.09rem;
  border: 2px solid #4ea8de;
  border-radius: 9999px;
  cursor: pointer;

  display: grid;
  place-content: center;
}

input[type="checkbox"]:hover {
  border-color: #1e6f9f;
}

input[type="checkbox"]::before {
  content: "";
  width: 1.09rem;
  height: 1.09rem;
  border-radius: 999px;
  transform: scale(0);
  transition: 120ms transform;
  background: #5e60ce;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:hover::before {
  background: #8284fa;
}

input[type="checkbox"]:checked::after {
  content: "";
  position: absolute;
  justify-self: center;
  align-self: center;
  width: 0.2rem;
  height: 0.4rem;
  border: solid #f2f2f2;
  border-width: 0 0.0625rem 0.0625rem 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg) translateY(-0.0625rem) translateX(-0.0625rem);
}

.finishedTask {
  color: #808080;
  text-decoration: line-through;
  order: 2;
}

.deleteButton {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-items: center;
}

.deleteButton:hover {
  background: #333333;
}

.deleteButton svg {
  color: #e25858;
}

.deleteButton svg:hover {
  color: var(--danger);
}

`