import { store } from "../../main";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { TUsersActions } from "../../services/actions";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TUsersActions>
>;
