import { createContext } from "react";

const INITIAL_STATE = { darkMode: true };
export const ThemeContext = createContext(INITIAL_STATE);
