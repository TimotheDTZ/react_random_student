import React, { createContext, useContext, useState } from 'react';

const AbsentContext = createContext();

export function AbsentProvider({ children }) {
    const [absentGuysList, setAbsentGuysList] = useState([]);
    const [absentGirlsList, setAbsentGirlsList] = useState([]);

    const addAbsentGuy = (name) => {
        setAbsentGuysList([...absentGuysList, name]);
    };

    const addAbsentGirl = (name) => {
        setAbsentGirlsList([...absentGirlsList, name]);
    };

    const removeAbsentGuy = (name) => {
        const updatedAbsentGuysList = absentGuysList.filter((absentGuy) => absentGuy !== name);
        setAbsentGuysList(updatedAbsentGuysList);
    };

    const removeAbsentGirl = (name) => {
        const updatedAbsentGirlsList = absentGirlsList.filter((absentGirl) => absentGirl !== name);
        setAbsentGirlsList(updatedAbsentGirlsList);
    };

    return (
        <AbsentContext.Provider value={{ absentGuysList, absentGirlsList, addAbsentGuy, addAbsentGirl, removeAbsentGuy, removeAbsentGirl }}>
            {children}
        </AbsentContext.Provider>
    );
}

export function useAbsentContext() {
    return useContext(AbsentContext);
}
