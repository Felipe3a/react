import { Check, CheckIcon, ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTasksClick }) {
  const navigate = useNavigate();

  function onSeaDetailsClick(tasks) {
    const query = new URLSearchParams();
    query.append("title", tasks.title);
    query.append("description", tasks.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left flex items-center gap-2 text-white p-2 rounded-md 
             ${task.isCompleted && "line-through"}`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>

          <Button onClick={() => onSeaDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTasksClick(task.id)}>
            <Trash2 />
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
