import DateSumry from "../../DateSumry/dateSumry.cmpt";
import CardTask from "../Task/task.cmpt";

function CardTaskList({
  inputHandler,
  inputValue,
  funAddToList,
  taskList,
  deleteTask,
  sumaryData,
  taskDone,
  editTask,
  editTaskChange,
}) {
  return (
    <>
      <DateSumry taskList={taskList} sumaryData={sumaryData} />
      <h1 className="mt-2 px-2 text-2xl text-white font-serif">
        Task For Today
      </h1>
      <div className="newtask flex justify-start items-center px-4 py-2 mb-4 ">
        <input
          type="text"
          name="task"
          id="taskfield"
          placeholder="Add New Task"
          className="p-2 mr-2 w-[85%] "
          value={inputValue}
          onChange={inputHandler}
        />
        <button
          className="px-2 py-2 bg-green-400 text-xl font-bold text-white rounded-xl o"
          onClick={funAddToList}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <CardTask
        taskList={taskList}
        deleteTask={deleteTask}
        taskDone={taskDone}
        sumaryData={sumaryData}
        editTask={editTask}
        editOnChange={editTaskChange}
      />
    </>
  );
}

export default CardTaskList;
