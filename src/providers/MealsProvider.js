//USING CONTEXT API MANAGING STATE

import React from 'react';

const MealsContext = React.createContext();

const todaysMeals = ['bannana' , 'apple' , 'mango'];

const MealsProvider = ({children}) => {
    const [meals, setMeals] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value = {{meals}} >
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;


