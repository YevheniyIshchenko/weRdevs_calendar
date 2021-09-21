import classes from "../styles/modal.module.scss";

export default function Modal(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.modal__window}>
        <button onClick={() => props.modal()} className={classes.modal__btn}>
          &#10006;
        </button>

        <div className={classes.modal__window__content}>
          <h2 className={classes.modal__window__content__header}>Month</h2>
          <input
            readOnly
            className={classes.modal__window__content__text}
            type="text"
            value={props.month}
          />
        </div>
        <div className={classes.modal__window__content}>
          <h2 className={classes.modal__window__content__header}>Day</h2>
          <input
            readOnly
            className={classes.modal__window__content__text}
            type="text"
            value={props.day}
          />
        </div>
      </div>
    </div>
  );
}
