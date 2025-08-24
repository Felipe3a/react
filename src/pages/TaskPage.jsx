import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title.jsx";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const title = searchParam.get("title");
  const description = searchParam.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col  p-6">
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <div className="flex justify-center relative mb-6">
            <button
              onClick={() => navigate(-1)}
              className=" absolute left-0 top-0 bottom-0 bg-slate-400 p-2 rounded-md ml-2 text-white"
            >
              <ChevronLeftIcon />
            </button>

            <Title>Detalhes da Tarefa</Title>
          </div>
          <div className="bg-slate-200 p-4 rounded-md">
            <h2 className="text-xl font-bold text-slate-600 mb-2">{title}</h2>
            <p className=" text-slate-600 ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
