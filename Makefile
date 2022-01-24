install:
	npm install
gendiff:
	node bin/gendiff.js
lint:
	npx eslint .

lint-fix:
	npx eslint --fix .