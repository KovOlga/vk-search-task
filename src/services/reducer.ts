import { TUser } from "../components/types/data";
import {
  GET_USERS_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  TUsersActions,
} from "./actions";

export interface IInitialState {
  users: TUser[];
  dataRequest: boolean;
  dataFailed: boolean;
}

const initialState: IInitialState = {
  users: [],
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
        users: action.users,
      };
    }
    case GET_USERS_FAILED: {
      return { ...state, dataFailed: true, dataRequest: false };
    }
    default:
      return state;
  }
};
