/**
 * Performs a binary search on the host array
 *
 * @param {*[]} array A sorted array
 * @param {*} target The item to search for within the array.
 * @return {Number} The index of the element inside the array, -1 if not found.
 */
export function binarySearch(array, target)
{
    let left = 0;
    let right = array.length -1;

    while (left <= right)
    {
        let middle = Math.round((right + left) / 2);

        // Check if target is present in the middle
        if (array[middle] === target)
            return middle;

        // If target greater, ignore left half
        if (array[middle] < target)
            left = middle + 1;

        // If target is smaller, ignore right half
        else
            right = middle - 1;
    }

    // Target is not in the array
    return -1;
}