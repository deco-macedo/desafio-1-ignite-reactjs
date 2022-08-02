import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { HeaderBar } from "./styles";


interface Task {
  id: string;
  description: string;
  isComplete: boolean;
}

interface NewTaskBarProps {
  taskList: Task[];
  onCreateNewTask: (taskList: Task[]) => void;
}

export function NewTaskHeader({ taskList, onCreateNewTask }: NewTaskBarProps) {

  const [taskDescription, setTaskDescription] = useState("");

  function handleCreateNewtask(event: FormEvent) {
    event.preventDefault();

    const task = {
      id: Math.random().toString(),
      description: taskDescription,
      isComplete: false,
    };

    const newTaskList = [...taskList];
    newTaskList.push(task);

    onCreateNewTask(newTaskList);
    setTaskDescription("");
      }


    return (
        <HeaderBar>
        <form className="newTaskForm" onSubmit={handleCreateNewtask}>
        <textarea
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Adicione uma nova tarefa"
          value={taskDescription}
          required
        />
        <button type="submit">
          <span>Criar</span>
          <PlusCircle size={18} weight="light" />
        </button>
      </form>
      </HeaderBar>
    )
}