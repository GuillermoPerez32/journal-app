/*{
   uid: 'dasdasdasd'
   name: 'guille' 
}*/

import { authTypes } from "../types/authTypes";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case authTypes.login:
            return {
                uid: action.payload.uid,
                name: action.payload.name
            }
        case authTypes.logout:
            return {}
        default:
            return state;
    }
}