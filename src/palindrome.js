export function isPalindrome(string) {
    const lowerCaseString = string.toLowerCase();
    return lowerCaseString.split('').join('') === lowerCaseString.split('').reverse().join(''); 
}