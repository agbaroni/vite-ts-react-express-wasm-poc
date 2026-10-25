#include <emscripten/emscripten.h>

extern "C" int fact(int);

EMSCRIPTEN_KEEPALIVE
int fact(int n) {
	if (n < 2) {
		return 1;
	}

	return n * fact(n - 1);
}
