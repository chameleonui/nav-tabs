
build: components index.js
	@component build --dev

deploy: components index.js
	@component build && uglifyjs -o build/build.min.js

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
