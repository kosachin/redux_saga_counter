import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { decCountReq, incCountReq } from "../redux/actions";
import "./counter.css";
const Counter = ({
  count,
  loading,
  error,
  handleIncCountSuc,
  handleIncCountReq,
  handleDecCountReq,
  handleDecCountSuc,
  handleResetCounterSuc,
  handleCounterFailure,
}) => {
  const handleInc = () => {
    handleIncCountReq();
    handleIncCountSuc();
  };
  const handleDec = () => {
    handleDecCountReq();
    handleDecCountSuc();
  };
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div>
            {/* {count < 0 || count > 100 ? (
              ((<h1>{error}</h1>), handleCounterFailure())
            ) : ( */}
            <>
              {" "}
              <h1>{count}</h1>
              <button onClick={handleInc}>+</button>
              <button onClick={handleDec}>-</button>
            </>
            {/* )} */}
          </div>
        )}
        <div>
          <button onClick={handleResetCounterSuc}>Rest</button>
        </div>
      </div>
    </>
  );
};

const enhance = compose(
  connect(
    (state) => ({
      count: state.count,
      loading: state.loading,
      error: state.error,
    }),
    (dispatch) => ({
      fetchIncCountReq: () => dispatch(incCountReq()),
      fetchIncCountSuc: () => dispatch({ type: "INC" }),
      fetchDecCountReq: () => dispatch(decCountReq()),
      fetchDecCountSuc: () => dispatch({ type: "DEC" }),
      fetchResetCountSuc: () => dispatch({ type: "RESET" }),
      fetchCounterLimitFail: () => dispatch({ type: "FAIL" }),
    })
  ),
  withHandlers({
    handleIncCountReq:
      ({ fetchIncCountReq }) =>
      () =>
        fetchIncCountReq(),
    handleIncCountSuc:
      ({ fetchIncCountSuc }) =>
      () =>
        fetchIncCountSuc(),
    handleDecCountReq:
      ({ fetchDecCountReq }) =>
      () =>
        fetchDecCountReq(),
    handleDecCountSuc:
      ({ fetchDecCountSuc }) =>
      () =>
        fetchDecCountSuc(),
    handleCounterFailure:
      ({ fetchCounterLimitFail }) =>
      () =>
        fetchCounterLimitFail(),
    handleResetCounterSuc:
      ({ fetchResetCountSuc }) =>
      () =>
        fetchResetCountSuc(),
  })
);
export default enhance(Counter);
