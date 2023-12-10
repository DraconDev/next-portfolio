import { createContext } from "react";

const state = {
    fullName: "Adam Nagy",
};

const MyContext = createContext(state);

export default MyContext;
