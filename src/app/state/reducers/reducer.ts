import { ActionReducer, Action } from "@ngrx/store";
import { State, intitialState } from "../state/state";
import { INCREMENT,DECREMENT } from "../actions/actions";
export const mainStoreReducer: ActionReducer<State> =
    (state = intitialState, action: Action) => {
    console.log('Action came in ' + action.type);
   switch(action.type) {
      case INCREMENT: {
        return {
          counter: state.counter + 1
        }
      }
     case DECREMENT: {
        return {
          counter: state.counter - 1
        }
      }
      default: {
        return state;
      }
    }
};