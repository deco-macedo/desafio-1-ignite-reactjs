import { ClipboardText } from "phosphor-react";

import { EmptyTaskArea } from './styles';

export function EmptyTask() {
    return (
      <EmptyTaskArea>
        <div className="content">
            <header>
                <div className="headertaskcontent">
                    <p>Tarefas Criadas</p> 
                    <span className="created-tasks">0</span>
                </div>

                <div className="headertaskcontent">
                    <p>Concluídas</p> 
                    <span className="concluded-tasks">0 de 0</span>
                </div>
            </header>
        </div>
        <div className="empty-area">
        <ClipboardText size={56} weight="light" />
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </EmptyTaskArea>
    )
}

