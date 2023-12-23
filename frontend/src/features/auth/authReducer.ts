import { AuthAction, AuthActionTypes, AuthState } from "./auth.interface"

const initialState: AuthState = {
  token: null,
  error: null,
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
      }
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload,
      }
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        error: null,
      }
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
      }
    case AuthActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
