import "./App.css";
import CardTaskList from "./Component/Card/Task_List/task_list.cmpt";
import { useState } from "react";

function App() {
  console.log("AppRender");
  const [taskList, setTaskList] = useState([]);
  const [newTsList, setNewTsList] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [inptEdtStr, setInptEdtStr] = useState("");
  const [prevId, setPrevId] = useState(null);
  const [smryDt, setSmryDt] = useState({
    edtbtnCount: 0,
    readOnlyState: true,
    total: 0,
    remaining: 0,
    done: 0,
    markInd: "",
    isMark: false,
  });
  // useEffect(() => {
  //   console.log("useEffect: smrtDt");
  //   totalTaskCount();
  // }, [smryDt]);
  const totalTaskCount = () => {
    console.log("totalTaskCount");
    const totalTask = newTsList.length;
    smryDt.total = totalTask;
    smryDt.remaining = smryDt.total - smryDt.done;
    setSmryDt(smryDt);
  };
  const getInputVal = (e) => {
    const inputString = e.target.value;
    console.log(inputString);
    setInputVal(inputString);
  };
  const addToList = () => {
    console.log(`addToList btn click`);
    const obj = { title: inputVal, isMark: false };
    taskList.push(obj);
    setNewTsList(taskList);
    setInputVal("");
    totalTaskCount();
  };
  const deleteTask = (e) => {
    console.log("delete btn click");
    e.stopPropagation();
    setPrevId(Number(e.target.id));
    const curId = Number(e.target.id);
    smryDt.isMark = taskList[curId]["isMark"];
    if (smryDt.isMark) {
      smryDt.done--;
      smryDt.remaining = smryDt.total - smryDt.done;
    }
    curId === prevId ? setInputVal("  ") : setInputVal(" ");
    const taskIndex = Number(e.target.id);
    const num = 1;
    taskList.splice(taskIndex, num);
    setTaskList(taskList);
    setNewTsList(taskList);
    totalTaskCount();
    console.log("totaltskcnt");
  };
  const markDone = (e) => {
    console.log("mark btn click");
    const curId = Number(e.target.id);
    console.log(curId);
    // console.log(taskList[curId]["isMark"]);
    taskList[curId]["isMark"] = !taskList[curId]["isMark"];
    smryDt.isMark = taskList[curId]["isMark"];
    // console.log(smryDt.isMark);
    // Increment In Done
    smryDt.isMark ? smryDt.done++ : smryDt.done--;
    console.log(smryDt.readOnlyState, "1");
    smryDt.readOnlyState
      ? (smryDt.readOnlyState = false)
      : (smryDt.readOnlyState = true);
    console.log(smryDt.readOnlyState, "1");

    inputVal === "" ? setInputVal(" ") : setInputVal("");
    totalTaskCount();
  };

  const editTask = (e) => {
    setPrevId(Number(e.target.id));
    const curId = Number(e.target.id);
    // smryDt.isMark = taskList[curId]["isMark"];
    if (taskList[curId]["isMark"]) return;
    console.log("edt btn click");
    if (!(prevId === curId)) {
      smryDt.edtbtnCount = 0;
      prevId === null
        ? (smryDt.readOnlyState = true)
        : (smryDt.readOnlyState = !smryDt.readOnlyState);
      setSmryDt(smryDt);
    }
    if (smryDt.edtbtnCount === 2) return;
    console.log("after");
    if (smryDt.readOnlyState) {
      smryDt.readOnlyState = !smryDt.readOnlyState;
      e.target.removeAttribute("readOnly");
      smryDt.edtbtnCount++;
      setSmryDt(smryDt);
      console.log("readOnlyState");
    }
    setSmryDt(smryDt);
  };
  const editTaskChange = (e) => {
    if (taskList[e.target.id]["isMark"]) return;
    console.log("editTaskChange");
    console.log(smryDt.edtbtnCount);
    const editString = e.target.value;
    console.log(inptEdtStr);
    setInptEdtStr(editString);
    const index = Number(e.target.id);
    console.log(taskList[index]["title"]);
    taskList[index]["title"] = editString;
  };

  // console.log(
  //   "total:",
  //   smryDt.total,
  //   "remaining:",
  //   smryDt.remaining,
  //   "done:",
  //   smryDt.done
  // );
  return (
    <div className="body bg-[#D2E3ED] h-[100vh] flex justify-center items-center w-[100%]">
      <div className="main flex flex-col text-center w-[100%] md:w-[60%] lg:w-[45%] xl:w-[30%] rounded-3xl border-2 border-cyan-300 p-0  bg-[#2B5181]">
        <CardTaskList
          taskList={newTsList}
          sumaryData={smryDt}
          inputValue={inputVal}
          // Method
          inputHandler={getInputVal}
          funAddToList={addToList}
          deleteTask={deleteTask}
          taskDone={markDone}
          editTask={editTask}
          editTaskChange={editTaskChange}
        />
      </div>
    </div>
  );
}

export default App;
