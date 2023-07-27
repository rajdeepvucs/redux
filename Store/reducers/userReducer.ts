import { userMain } from "../../Models/User";
import InitialState from "./initialState";

const initialState : userMain = InitialState.user

export default function UserReducer(
    state: userMain = initialState,
    action: any,
){
    switch (action.type){
        default:
        return state; 
    }
}