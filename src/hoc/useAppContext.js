import {useContext} from "react";
import {Context} from "./ContexProvider";


const useAppContext = () => useContext(Context)

export {
    useAppContext
}