import { AppDispatch, AppThunk } from "../types";
import { TUser } from "../types/data";
import { getUsersList } from "./api";

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_EMPTY_RES = "GET_USERS_EMPTY_RES";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

interface IGetUsersRequestAction {
  readonly type: typeof GET_USERS_REQUEST;
}

interface IGetUsersSuccessAction {
  readonly type: typeof GET_USERS_SUCCESS;
  users: TUser[];
}
interface IGetUsersEmptyAction {
  readonly type: typeof GET_USERS_EMPTY_RES;
}

interface IGetUsersFailedAction {
  readonly type: typeof GET_USERS_FAILED;
}

export type TUsersActions =
  | IGetUsersRequestAction
  | IGetUsersSuccessAction
  | IGetUsersFailedAction
  | IGetUsersEmptyAction;

export const getUsersAction = (): IGetUsersRequestAction => ({
  type: GET_USERS_REQUEST,
});

export const getUsersSuccessAction = (
  users: TUser[]
): IGetUsersSuccessAction => ({
  type: GET_USERS_SUCCESS,
  users,
});

export const getUsersEmptyAction = (): IGetUsersEmptyAction => ({
  type: GET_USERS_EMPTY_RES,
});

export const getUsersFailedAction = (): IGetUsersFailedAction => ({
  type: GET_USERS_FAILED,
});

export const getUsers: AppThunk = (name: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(getUsersAction());
    return getUsersList(name)
      .then(({ users }) => {
        if (!users.length) {
          dispatch(getUsersEmptyAction());
        } else {
          dispatch(getUsersSuccessAction(users));
        }
      })
      .catch(() => {
        dispatch(getUsersFailedAction());
      });
  };
};
