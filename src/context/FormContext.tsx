import { createContext } from "react";
import type { UsageTypeData, WorkspaceDetailsData } from "../schemas/workspaceSchema";
import React from "react";
import { useReducer } from "react";
export interface FormState{
    currentStep: number;
    usageData: UsageTypeData| null;
    workspaceData: WorkspaceDetailsData | null;
}

export type FormAction  = | {type: "SET_STEP", payload:number}  | {type: "NEXT_STEP"} | {type: "PREV_STEP"} | {type:"UPDATE_USAGE"; payload: UsageTypeData} | {type: "UPDATE_WORKSPACE", payload:WorkspaceDetailsData};


interface FormContextType{
    state: FormState;
    dispatch: React.Dispatch<FormAction>;


}

export const FormContext = createContext<FormContextType|null>(null);

export const formReducer = (state: FormState, action: FormAction): FormState => {
    switch(action.type){
        case 'NEXT_STEP':
            return {
                ...state, currentStep: state.currentStep+1
            };
        case 'PREV_STEP':
            return {
                ...state, currentStep: state.currentStep-1
            };
        case 'UPDATE_USAGE':
            return {
                ...state, usageData: action.payload
            };
        case 'UPDATE_WORKSPACE':
            return {
                ...state, workspaceData: action.payload
            };
        case 'SET_STEP':
            return {
                ...state, currentStep: action.payload
            };
        default:
            return state
    }
}

const initialState: FormState = {

    currentStep : 1,
    workspaceData: null,
    usageData: null
}

export const FormProvider = ({children}:{children:React.ReactNode}) => {
const [state, dispatch] = useReducer(formReducer, initialState);
return (
    <FormContext.Provider value={{state, dispatch}}>
{children}
    
</FormContext.Provider> 

)
}
