import React, {useMemo} from "react";
import {io} from "socket.io-client";

const SockerContext = React.createContext(null);

export const useSocket = () => {
    return React.useContext(SockerContext);

};


export const SocketProvider = (props) => {
    const socket = useMemo (
        () => io("http://localhost:8001"),

    []
    );
    return(
        <SockerContext.Provider value={{ socket }}>
            {props.children}
        </SockerContext.Provider>
    )
}