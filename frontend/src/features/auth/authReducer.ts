import { AuthAction, AuthActionTypes, AuthState } from "./auth.interface"

const initialState: AuthState = {
  token: null,
  error: null,
  type: null,
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
        type: AuthActionTypes.LOGIN_SUCCESS,
      }
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload,
        type: AuthActionTypes.LOGIN_FAILURE,
      }
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        error: null,
        type: AuthActionTypes.LOGOUT,
      }
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
        type: AuthActionTypes.REGISTER_SUCCESS,
      }
    case AuthActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        type: AuthActionTypes.REGISTER_FAILURE,
      }
    default:
      return state
  }
}

export default authReducer
