import React, {useState} from 'react';
import './App.css';

import {ITarefa} from '../types/tarefa';
import SortingVisualizer from "../components/SortingVisualizer";

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    return (
        <div>
            <div className="topnav">
               <h2>Sorting Algorithms</h2>
            </div>
            <SortingVisualizer></SortingVisualizer>
        </div>

    );
}

export default App;
