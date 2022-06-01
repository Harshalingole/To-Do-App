function CardTask(props) {
  const { taskList, deleteTask, taskDone, editTask, editOnChange } = props;
  return (
    <>
      {/* Map over TaskList Array TO show  Container */}
      {taskList.map((task, ind) => {
        return (
          <div
            id={ind}
            className={`task flex flex-row justify-start items-center px-4 py-0 m-2 bg-white rounded-xl shadow-md shadow-slate-400 mb-1 ${
              task.isMark ? "bg-green-200" : ""
            } `}
            key={ind}
            // onClick={taskDone}
          >
            <h1 className="p-2 font-normal text-xl text-black ">{ind + 1}</h1>
            {/* <h1
              className={`p-2  font-normal text-xl text-left text-black w-[70%]  `}
              id={ind}
            >
              {task.title}
            </h1> */}
            <input
              type="text"
              value={task.title}
              className={`p-2  font-normal text-xl text-left text-black w-[70%]  focus:outline-none ${
                task.isMark
                  ? "bg-green-200 italic line-through decoration-slate-500 cursor-not-allowed "
                  : ""
              } `}
              id={ind}
              readOnly
              onChange={editOnChange}
              onClick={editTask}
            />
            <div className="task_action flex ">
              <button
                className="p-1 mr-6  font-normal text-lg text-left text-green-500"
                onClick={taskDone}
              >
                <i className="fa-solid fa-check" id={ind}></i>
              </button>
              {/* <button
                className="p-1 mr-2 font-normal text-lg text-left text-blue-500"
                // onClick={editTask}
              >
                <i className="fa-solid fa-pen"></i>
              </button> */}
              <button
                className="p-1  font-normal text-lg text-left text-red-500"
                onClick={deleteTask}
              >
                <i className="fa-solid fa-trash-can" key={ind} id={ind}></i>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CardTask;
