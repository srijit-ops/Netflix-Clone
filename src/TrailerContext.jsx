import {createContext} from "react"
const TrailerContext=createContext()
export function TrailerProvider({children}){
    const item=0
    return(
        <TrailerContext.Provider value={item}>
            {children}
        </TrailerContext.Provider>
    )
}
export default TrailerContext