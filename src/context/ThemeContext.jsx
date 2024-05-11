import { createContext } from "react"

export const ThemeContext = createContext()

const context = {}

export const ThemeContextProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={context}>
            { children }
        </ThemeContext.Provider>
    )
}