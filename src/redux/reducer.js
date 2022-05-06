import {
  INC_COUNT_SUC,
  INC_COUNT_FAIL,
  INC_COUNT_REQ,
  DEC_COUNT_FAIL,
  DEC_COUNT_REQ,
  DEC_COUNT_SUC,
  RESET_COUNT,
} from "./constants";

const init = {
  count: 0,
  loading: false,
  error: null,
};
export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case INC_COUNT_REQ:
      return { ...store, loading: true };
    case INC_COUNT_SUC:
      return { ...store, loading: false, count: store.count + payload };
    case INC_COUNT_FAIL:
      return { ...store, loading: false, error: payload };
    case DEC_COUNT_REQ:
      return { ...store, loading: true };
    case DEC_COUNT_SUC:
      return { ...store, loading: false, count: store.count - payload };
    case DEC_COUNT_FAIL:
      // console.log("dec", payload);
      return { ...store, loading: false, error: payload };
    case RESET_COUNT:
      // console.log("reset");
      return { ...store, count: 0 };
    default:
      return { ...store };
  }
};
