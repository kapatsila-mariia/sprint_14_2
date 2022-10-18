import {fetchAmount} from "./api";

export function increment() {
    return {type : "INCREMENT"};
}

export function amountRequestSucceeded(amount) {
    return {type : "AMOUNT_REQUEST_SUCCEEDED", amount};
}

export function amountRequestFailed(error) {
    return {type : "AMOUNT_REQUEST_FAILED", error};
}


export function incrementThreeTimes() {
    return (dispatch) => {
        for (let i = 0; i < 3; i++) {
            dispatch({type: 'INCREMENT'})
        }
        // TODO This thunk needs to dispatch `"INCREMENT"` three times in a row
    }
}

export function dispatchIncrementIfEven() {
    return (dispatch, getState) => {
        if (getState().counter % 2 === 0){
            dispatch({type: 'INCREMENT'});
        }
        // TODO This thunk needs to dispatch `"INCREMENT"`, but only if `state.counter` is even
    }
}


export function fetchAndLoadAmount() {
    return async (dispatch) => {
      try {
        await fetchAmount()
        dispatch({type: 'AMOUNT_REQUEST_SUCCEEDED'})
      } catch (error){
        dispatch({type: 'AMOUNT_REQUEST_FAILED', error})
      }
        // TODO This thunk needs to call the `fetchAmount()` API function imported above, and handle
        // TODO the promise it returns.  If the promise succeeds, the thunk should dispatch `requestAmountSucceeded()`
        // TODO with the returned amount.  If it fails, dispatch `requestAmountFailed()` instead with the error.

    }
}