import React, {useState} from 'react';
import './App.css';

import {ITarefa} from '../types/tarefa';
import SortingVisualizer from "../components/SortingVisualizer";

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    return (
        <SortingVisualizer></SortingVisualizer>
    );
}

export default App;
