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
  dataRequest: boolean;
  dataFailed: boolean;
}

const initialState: IInitialState = {
  users: [],
  emptyRes: false,
  dataRequest: false,
  dataFailed: false,
};

export const usersReducer = (
  state = initialState,
  action: TUsersActions
): IInitialState => {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return {
        ...state,
        dataRequest: true,
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        dataRequest: false,
        dataFailed: false,
        emptyRes: false,
        users: action.users,
      };
    }
    case GET_USERS_EMPTY_RES: {
      return {
        ...state,
        dataRequest: false,
        dataFailed: false,
        emptyRes: true,
        users: [],
      };
    }
    case GET_USERS_FAILED: {
      return { ...state, dataFailed: true, dataRequest: false };
    }
    default:
      return state;
  }
};
