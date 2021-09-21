import { createStore } from "redux";

const SET_MONTH = {
  type: "SET_MONTH",
};
const SET_DAY = {
  type: "SET_DAY",
};

const MODAL_STATUS = {
  type: "MODAL_STATUS",
  payload: true,
};

export const defaultState = {
  day: "",
  month: "",
  modalStatus: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MONTH:
      return {
        ...state,
      };
    case SET_DAY:
      return {
        ...state,
      };
    case MODAL_STATUS:
      return {
        ...state,
        modalStatus: !state.modalStatus,
      };
    default: {
      return state;
    }
  }
};

export const store = createStore(reducer);
