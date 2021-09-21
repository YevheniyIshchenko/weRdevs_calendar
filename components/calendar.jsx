import React from "react";
import { format, isSameMonth, isSameDay, addMonths } from "date-fns";
import { takeMonth } from "./calendarData";
import classes from "../styles/calendar.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Calendar = (props) => {
  const [selectedData, setData] = useState(new Date());
  const data = takeMonth(selectedData)();

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const cliker = (e) => {
    e.preventDefault();
    const arr = e.target.id.split(" ");
    props.getMonth(arr[1]);
    props.getDay(`${arr[2].slice(0, -1)} ${arr[0].slice(0, -1)}`);
    props.modal();
  };

  function dayColor(day) {
    if (!isSameMonth(day, new Date())) return classes.grayDay;

    if (isSameDay(day, new Date())) return classes.sameDay;
  }
  function nextMonth() {
    const addMonth = addMonths(selectedData, 1);
    setData(new Date(addMonth));
  }
  function previousMonth() {
    const addMonth = addMonths(selectedData, -1);
    setData(new Date(addMonth));
  }

  return (
    <>
      <div className={classes.calendar__head}>
        <button onClick={previousMonth}>{"<"}</button>
        {`${format(selectedData, "MMMM")} ${format(selectedData, "y")}`}
        <button onClick={nextMonth}>{">"}</button>
      </div>
      <table onClick={cliker} className={classes.calendar}>
        <tbody>
          {data.map((week) => (
            <tr key={Math.random()} className={classes.calendar__day}>
              {week.map((day) => (
                <td
                  key={Math.random()}
                  id={format(day, "PPPP")}
                  className={`${classes.calendar__day__cell}  ${dayColor(day)}`}
                  data-day={format(day, "dd")}
                  data-month={format(day, "MMMM")}
                  value={format(day, "dd")}
                >
                  {format(day, "dd")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        <tfoot className={classes.footer}>
          <tr>
            {daysOfWeek.map((el) => (
              <td key={Math.random()} className={classes.header__day}>
                {el}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Calendar;
