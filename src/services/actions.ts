import { AppDispatch, AppThunk } from "../components/types";
import { TUser } from "../components/types/data";
import { getUsersList } from "./api";

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

interface IGetUsersRequestAction {
  readonly type: typeof GET_USERS_REQUEST;
}

interface IGetUsersSuccessAction {
  readonly type: typeof GET_USERS_SUCCESS;
  users: TUser[];
}

interface IGetUsersFailedAction {
  readonly type: typeof GET_USERS_FAILED;
}

export type TUsersActions =
  | IGetUsersRequestAction
  | IGetUsersSuccessAction
  | IGetUsersFailedAction;

export const getUsersAction = (): IGetUsersRequestAction => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccessAction = (users: TUser[]): IGetUsersSuccessAction => ({
  type: GET_USERS_SUCCESS,
  users,
});

export const getUsersFailedAction = (): IGetUsersFailedAction => ({
  type: GET_USERS_FAILED,
});

export const getUsers: AppThunk = (name: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(getUsersAction());
    return getUsersList(name)
      .then(({ users }) => {
        console.log("users", users);
        dispatch(getUsersSuccessAction(users));
      })
      .catch((e) => {
        dispatch(getUsersFailedAction());
      });
  };
};
