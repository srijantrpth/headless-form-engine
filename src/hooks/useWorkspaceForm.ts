import { useContext } from "react"
import { FormContext } from "../context/FormContext"



export const useWorkspaceForm = ()=>{
    const context = useContext(FormContext)
    if(!context){
        throw new Error("useWorkspaceForm must be used within a FormProvider");
    }
    return context;
}