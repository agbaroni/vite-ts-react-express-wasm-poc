CXX=em++
CXXFLAGS=-O2 -flto

main.js:
	$(CXX) $(CXXFLAGS) -sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORTED_RUNTIME_METHODS=['cwrap'] -sEXPORTED_FUNCTIONS=['_fact'] sources/main.cpp -o $@
