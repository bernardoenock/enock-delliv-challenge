export enum AuthActionTypes {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT = "LOGOUT",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAILURE = "REGISTER_FAILURE",
}

interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS
  payload: string
}

interface LoginFailureAction {
  type: AuthActionTypes.LOGIN_FAILURE
  payload: string
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT
}

interface RegisterSuccessAction {
  type: AuthActionTypes.REGISTER_SUCCESS
}

interface RegisterFailureAction {
  type: AuthActionTypes.REGISTER_FAILURE
  payload: string
}

export type AuthAction =
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | RegisterSuccessAction
  | RegisterFailureAction

export interface AuthState {
  token: string | null
  error: string | null
}
