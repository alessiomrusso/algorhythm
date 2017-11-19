export default class Fibonacci {
	fibonacci (n) {
		return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
	}
}