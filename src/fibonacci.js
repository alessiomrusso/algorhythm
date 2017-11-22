export default function fibonacci(index, cache) {
	cache = cache || [];
	if(cache[index]) {
		return cache[index];
	} else {
		switch(index) {
			case 0:
				cache[index] = 0;
				break;
			case 1:
				cache[index] = 1;
				break;
			default:
				cache[index] = fibonacci(index - 1, cache) + fibonacci(index - 2, cache);
		}
	}
	return cache[index];
};