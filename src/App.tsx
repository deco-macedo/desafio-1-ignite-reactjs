import { useState } from 'react';
import { EmptyTask } from './components/EmptyTask';
import { Header } from './components/Header';
import { NewTaskHeader } from './components/NewTaskHeader';
import { TaskList } from './components/TaskList';
import { Wrapper } from './styles/App';
import GlobalStyle from './styles/global';

interface Task {
  id: string;
  description: string;
  isComplete: boolean;
}

export function App() {

  const [taskList, setTaskList] = useState<Task[]>([])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <NewTaskHeader taskList={taskList} onCreateNewTask={setTaskList} />
        {taskList.length === 0 ? (
          <EmptyTask />) : (
          <TaskList taskList={taskList} onSetTask={setTaskList} />
        )}
      </Wrapper>
    </div>
  )

}


