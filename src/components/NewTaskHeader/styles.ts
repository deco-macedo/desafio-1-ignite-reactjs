import styled from "styled-components";

export const HeaderBar = styled.div`

width: 736px;
margin: 1px auto;
background-color: #1A1A1A;
resize: none;
margin-top: calc(0px - 27px);

.newTaskForm {
    display: flex;
    gap: 0.5rem;

}

.newTaskForm textarea {
  flex: 1;
  background: #262626;
  border: 0;
  border-radius: 8px;
  resize: none;
  height: 3.375rem;
  padding: 1.2rem;
}

.newTaskForm textarea:focus {
  color: #f2f2f2;
  outline: 1px solid #8284fa;
}

.newTaskForm button {
  padding: 1rem;
  border-radius: 8px;
  border: 0;
  background: #4ea8de;
  color: #f2f2f2;

  font-weight: 700;
  font-size: 0.875rem;

  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.newTaskForm button:hover {
  background: #5e60ce;
  transition: 0.2s;
}

`