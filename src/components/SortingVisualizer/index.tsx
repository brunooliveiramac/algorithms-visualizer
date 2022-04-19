import React from 'react';
import './SortingVisualizer.css';

class SortingVisualizer extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 50; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array});
    }

    render() {
        // @ts-ignore
        const {array} = this.state;

        return (
            <main>
                <h2 className="tittle">Sorting Algorithms</h2>
                <button className="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <div className="container">
                    {array.map((value: any, idx: any) => (
                        <div
                            className="arrayElement"
                            key={idx}
                            style={{
                                height: `${value}px`,
                            }}></div>
                    ))}
                </div>
                <footer>
                    <p></p>
                </footer>
            </main>
        )
    }

    async bubbleSort() {
        console.log("Hi")
        // @ts-ignore
        let arr = this.state.array
        // @ts-ignore
        const array = arr.slice();
        let isSorted = false
        let counter = 0;
        while (!isSorted) {
            // @ts-ignore
            console.log(array.length)

            isSorted = true
            // @ts-ignore
            for (let i = 0; i < array.length - 1; i++) {
                // @ts-ignore
                if(array[i] > array[i + 1]){
                    await new Promise<void>(next=> {
                        // @ts-ignore
                        this.swap(i, i + 1, array)
                        isSorted = false
                        this.setState({array})
                        setTimeout(() => {
                           next()
                        }, 20)
                    })
                }
            }
            counter ++;
        }
        console.log(array)
    }

    private swap(i:number, j:number, array:number[]){
        const temp = array[j];
        array[j] = array[i]
        array[i] = temp
    }
}

function randomIntFromInterval(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;