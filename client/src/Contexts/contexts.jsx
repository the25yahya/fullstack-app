import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
const StateContext = createContext();
import PropTypes from 'prop-types'

export const ContextProvider = ({children}) => {
    return(
        <StateContext.Provider>
            {children}
        </StateContext.Provider>
    )
}
ContextProvider.PropTypes = {
    children: PropTypes.node.isRequired,
}

export const useStateContext = () => useContext(StateContext);