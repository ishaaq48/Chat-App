import { createContext, useState } from "react";


export const FormContext = createContext()

// eslint-disable-next-line react/prop-types
export const FormProvider = ({ children }) => {
    const [formInputs, setFormInputs] = useState({})

    return (
        <FormContext.Provider value={{formInputs, setFormInputs}}>
            {children}
        </FormContext.Provider>
    )
}
