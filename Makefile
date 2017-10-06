all: install compose

install:
	docker-compose run client yarn

compose:
	docker-compose up

compose-bash:
	docker-compose run client bash

test:
	yarn test
