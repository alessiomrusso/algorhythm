/**
 * Sorts the host array implementing the Bubble Sort algorithm
 *
 * @param {*[]} array An array
 */
export function bubbleSort(array) {
    let swap = true;
    do {
        swap = false;
        array.forEach((element, index, array) => {
            if(element > array[index+1]) {
                // Swap elements
                [array[index], array[index+1]] = [array[index+1], array[index]];
                swap = true;
            }
        });
    }
    while (swap)
}