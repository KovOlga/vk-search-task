import { TUser } from "../types/data";
import {
  GET_USERS_EMPTY_RES,
  GET_USERS_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  TUsersActions,
} from "./actions";

export interface IInitialState {
  users: TUser[];
  emptyRes: boolean;
  reqInProccess: boolean;
  reqFailed: boolean;
}

const initialState: IInitialState = {
  users: [],
  emptyRes: false,
  reqInProccess: false,
  reqFailed: false,
};

export const usersReducer = (
  state = initialState,
  action: TUsersActions
): IInitialState => {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return {
        ...state,
        reqInProccess: true,
        reqFailed: false,
        emptyRes: false,
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        reqInProccess: false,
        reqFailed: false,
        emptyRes: false,
        users: action.users,
      };
    }
    case GET_USERS_EMPTY_RES: {
      return {
        ...state,
        reqInProccess: false,
        reqFailed: false,
        emptyRes: true,
        users: [],
      };
    }
    case GET_USERS_FAILED: {
      return { ...state, reqFailed: true, reqInProccess: false };
    }
    default:
      return state;
  }
};
