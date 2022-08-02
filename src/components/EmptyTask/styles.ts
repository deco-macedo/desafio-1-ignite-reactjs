import styled from "styled-components";

export const EmptyTaskArea = styled.div`

width: 736px;
margin: 1px auto;
background-color: #1A1A1A;
resize: none;

span {
    font-weight: bold;
}

.content {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}

header .headertaskcontent {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

header > :first-child p {
    color: #4EA8DE;
    font-weight: bold;
    display: flex;
}

.created-tasks,
.concluded-tasks {
    background: #333333;
    color: #d9d9d9;
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
  font-size: 0.75rem;
}


header p {
    color: #8284FA;
    font-weight: bold;
    display: flex;
}

header span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #808080;
    color: #262626;
    font-weight: bold;
    border-radius: 10px;
    padding: 0.1rem;
    overflow: hidden;
}

.empty-area {
    border-top: 2px solid #262626;
    border-radius: 8px;
    padding: 0.5rem;
    max-width: 46rem;
    padding-top: 5.5rem;
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;

span {
    font-weight: bold;
}
}

`;