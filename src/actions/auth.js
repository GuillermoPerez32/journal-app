import { supabase } from "../supabase/supabaseClient";
import { authTypes } from "../types/authTypes"

export const startLoginEmailPass = (email, password) => {
    return async (dispatch) => {
        const data = await supabase.auth.signInWithOtp({
            email,
            // password
        });
        console.log(data);
    }
}

export const startSignUp = (email, password, phone) => {
    return async (dispatch) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            phone,
        });
        console.log(data);
        console.log(error);
    }
}

export const login = (uid, name) => (
    {
        type: authTypes.login,
        payload: {
            uid,
            name
        }
    }
)
