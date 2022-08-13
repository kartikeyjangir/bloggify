import { AUTH } from "../constants/actionTypes";
import * as api from "../Api/index";

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    const reqiuredData = {
      name: data?.result.name,
      email: data?.result.email,
      password: data?.result.password,
      token: data?.token,
    };
    dispatch({ type: AUTH, data: reqiuredData });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    const reqiuredData = {
      name: data?.result.name,
      email: data?.result.email,
      password: data?.result.password,
      token: data?.token,
    };
    dispatch({ type: AUTH, data: reqiuredData });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
