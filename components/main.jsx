import React, { useState } from "react";
import classes from "../styles/main.module.scss";
import Calendar from "./calendar";
import Modal from "./modal";
const Main = () => {
  const [changemodal, setModal] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const change = () => {
    setModal(!changemodal);
  };

  const getDay = (day) => {
    setDay(day);
  };
  const getMonth = (month) => {
    setMonth(month);
  };

  return (
    <>
      {changemodal ? <Modal modal={change} day={day} month={month} /> : null}
      <div className={classes.main}>
        <div className={classes.main__img}>
          <div className={classes.main__img__content}>
            <h2 className={classes.main__img__content__header}>
              Choose the day for the meeting
            </h2>
            <p className={classes.main__img__content__text}>
              We encourage you to book your appointment online.
              <br />
              This will save you time.
            </p>
          </div>
        </div>
        <div className={classes.calendar}>
          <Calendar modal={change} getDay={getDay} getMonth={getMonth} />
        </div>
      </div>
    </>
  );
};

export default Main;
