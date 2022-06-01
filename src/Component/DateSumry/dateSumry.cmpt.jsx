function DateSumry({ taskList, sumaryData }) {
  const { total, remaining, done } = sumaryData;
  // const sumryData = [{ title: "total", totalCount: 20 }];
  const d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className="sec-1  bg-[#1E3656] ">
        <div className="date mb-10 p-2">
          <h2 className="text-white font-bold text-3xl">
            {days[d.getDay()]}, {d.getDate()}
          </h2>
          <h1 className="text-white font-semibold text-xl">
            {month[d.getMonth()]}
          </h1>
        </div>
        <div className="summary-sec   flex flex-row justify-between items-center px-4 pb-2">
          {/* Map Use   -3Div for Total/Remaingin/Done*/}
          <div className="sumry_TRD ">
            <h1 className="text-white font-medium text-2xl m-0 p-0">{total}</h1>
            <h2 className="text-white font-medium text-lg m-0 p-0">Total</h2>
          </div>
          <div className="sumry_TRD ">
            <h1 className="text-white font-medium text-2xl m-0 p-0">
              {remaining}
            </h1>
            <h2 className="text-white font-medium text-lg m-0 p-0">Remainig</h2>
          </div>
          <div className="sumry_TRD ">
            <h1 className="text-white font-medium text-2xl m-0 p-0">{done}</h1>
            <h2 className="text-white font-medium text-lg m-0 p-0">Done</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default DateSumry;
