// // import logo from './logo.svg';
// import MealsProvider from './providers/MealsProvider';
import "./App.css";
import Notes from  './components/Notes';
import { useState } from "react";
// import MealsList from './components/MealsList';
// import Counter from './components/Counter';


// function App() {
//   return (  
//     <>
//       <MealsProvider>
//         <MealsList/>
//         <Counter />
//       </MealsProvider>
//     </>
//   );
// }

// import {useReducer} from 'react';

// const reducer = (state,action) => {
//     if (action.type === 'ride' ) return {money : state.money + 10};
//     if (action.type === 'fuel' ) return {money : state.money - 50};
//     return new Error();
// }

// function App() {

//     const initialState = {money : 100};
//     const [state , dispatch]  = useReducer(reducer,initialState);

//     return (
//         <div>
//             <h1> Wallet : {state.money} </h1>
//             <>
//             <button onClick={() => dispatch({type : 'ride'})}>
//                 A new customer! 
//             </button>
//             <button onClick={() => dispatch({type : 'fuel'})}>
//                 Refill 
//             </button>
//             </>
//         </div>
//     )
// }

// export default App;

function App() {
    const [notes, setNotes] = useState([
        {
            id : 1,
            text : "check my proresss",
        },
        {
            id : 2,
            text:"do work",
        },
    ])
    const [note,setNote] = useState("")

    return (
        <>
        <div 
        style = {{
            display : 'flex',
            justifyContent:'center',
            gap:'5px',
            marginTop:'30px',
        }}
        >
            <input
                type = 'text'
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button 
            onClick={() => {
                setNotes([...notes,{id:notes.length + 1,text:note}])
                setNote('')
            }}
            >
            Add Note
            </button>
        </div>
        <Notes 
            notes = {notes} setNotes = {setNotes}
        />
        </>
    )
}
export default App;