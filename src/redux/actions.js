import {
  INC_COUNT_SUC,
  INC_COUNT_REQ,
  INC_COUNT_FAIL,
  DEC_COUNT_FAIL,
  DEC_COUNT_REQ,
  DEC_COUNT_SUC,
  RESET_COUNT,
} from "./constants";

export const incCountReq = () => ({
  type: INC_COUNT_REQ,
});
export const incCountSuc = (payload) => ({
  type: INC_COUNT_SUC,
  payload,
});
export const incCountFail = (payload) => ({
  type: INC_COUNT_FAIL,
  payload,
});

export const decCountReq = () => ({
  type: DEC_COUNT_REQ,
});
export const decCountSuc = (payload) => ({
  type: DEC_COUNT_SUC,
  payload,
});
export const decCountFail = (payload) => ({
  type: DEC_COUNT_FAIL,
  payload,
});
export const resetCount = () => ({
  type: RESET_COUNT,
});
