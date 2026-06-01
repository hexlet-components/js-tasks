all: install compose

install:
	docker-compose run client npm install

compose:
	docker-compose up

compose-bash:
	docker-compose run client bash

test:
	npm test
