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
        for (let i = 0; i < 80; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array});
    }

    render() {
        // @ts-ignore
        const {array} = this.state;

        return (
            <main className="main">
                <div className="container">
                    <button className="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className="button" onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button className="button" onClick={() => this.selectionSort()}>Selection Sort</button>

                    <div className="array">
                        {array.map((value: any, idx: any) => (
                            <div
                                className="arrayElement"
                                key={idx}
                                style={{
                                    height: `${value}px`,
                                }}></div>
                        ))}
                    </div>
                </div>
                <footer>
                    <p></p>
                </footer>
            </main>
        )
    }

    // Best: O(n) time | O(1) space
    // Average: O(n^2) time | O(1) space
    // Worst: O(n^2) time | O(1) space
    async bubbleSort() {
        // @ts-ignore
        let arr = this.state.array
        const array = arr.slice();
        let isSorted = false
        let counter = 0;
        while (!isSorted) {
            isSorted = true
            for (let i = 0; i < array.length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    await new Promise<void>(next => {
                        this.swap(i, i + 1, array)
                        isSorted = false
                        this.setState({array})
                        setTimeout(() => {
                            next()
                        }, 20)
                    })
                }
            }
            counter++;
        }
    }

    private swap(i: number, j: number, array: number[]) {
        const temp = array[j];
        array[j] = array[i]
        array[i] = temp
    }


    // Best: O(n) time | O(1) space
    // Average: O(n^2) time | O(1) space
    // Worst: O(n^2) time | O(1) space
    async insertionSort() {
        // @ts-ignore
        let arr = this.state.array
        const array = arr.slice();
        for (let i = 0; i < array.length; i++) {
            let j = i
            while ((j > 0) && (array[j] < array[j - 1])) {
                await new Promise<void>(next => {
                    this.swap(j, j - 1, array)
                    j -= 1
                    this.setState({array})
                    setTimeout(() => {
                        next()
                    }, 20)
                })
            }
        }
    }

    // Best: O(n^2) time | O(1) space
    // Average: O(n^2) time | O(1) space
    // Worst: O(n^2) time | O(1) space
    async selectionSort() {
        // @ts-ignore
        let arr = this.state.array
        const array = arr.slice();
        let startIndex = 0;
        while (startIndex < array.length - 1) {
            let smallIndex = startIndex;
            for (let i = startIndex + 1; i < array.length; i++) {
                if (array[smallIndex] > array[i]) {
                    smallIndex = i;
                }
            }
            await new Promise<void>(next => {
                this.swap(startIndex, smallIndex, array)
                startIndex++;
                this.setState({array})
                setTimeout(() => {
                    next()
                }, 200)
            })
        }
    }
}

function randomIntFromInterval(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;