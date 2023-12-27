import { Dispatch } from "redux"
import axios from "axios"
import { AuthActionTypes, AuthAction } from "./auth.interface"

export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await axios.post<{ result: any }>(
        "http://localhost:4242/auth/login",
        { email, password },
      )

      if (response) {
        console.log(response.data.result.token)
      }
      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: response.data.result.token,
      })
    } catch (error: any) {
      dispatch({
        type: AuthActionTypes.LOGIN_FAILURE,
        payload: error.message,
      })
    }
  }

export const logout = () => (dispatch: Dispatch<AuthAction>) => {
  dispatch({
    type: AuthActionTypes.LOGOUT,
  })
}

export const register =
  (name: string, email: string, password: string) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      await axios.post("http://localhost:4242/auth/register", {
        name,
        email,
        password,
      })

      dispatch({
        type: AuthActionTypes.REGISTER_SUCCESS,
      })
    } catch (error: any) {
      dispatch({
        type: AuthActionTypes.REGISTER_FAILURE,
        payload: error.message,
      })
    }
  }
