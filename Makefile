# Including commands
run-django-server:
	poetry run task manage runserver_plus localhost:8000 --cert-file ./localhost.crt --key-file ./localhost.key

run-nuxt-server:
	yarn dev --host localhost --port 8080 --open --https --ssl-cert ./localhost.crt --ssl-key ./localhost.key

install-backend:
	poetry install --with dev --no-root

install-backend-prod:
	poetry install --with prod --no-root

install-frontend:
	yarn install

.PHONY: run-frontend
run-frontend:
	@make run-nuxt-server

.PHONY: run-backend
run-backend:
	@make run-django-server

.PHONY: clear
clear:
	poetry run task clear

.PHONY: createadmin
createadmin:
	poetry run task createsuperuser

.PHONY: migrate
migrate:
	poetry run task migrate

# Primary commands
.PHONY: install
install:
	@make -j 2 install-backend install-frontend
	poetry run task initconfig --debug
	@make migrate
	mkcert localhost
	poetry run task defaultadmin
	poetry run task defaultfixtures
	poetry run safety check

.PHONY: install-prod
install-prod:
	poetry run pip install -U pip
	@make install-backend-prod
	poetry run task initconfig

.PHONY: run
run:
	@make -j 2 run-django-server run-nuxt-server

.PHONY: build
build:
	poetry run task collectstatic
	@make migrate
	poetry run task defaultadmin
	poetry run task defaultfixtures
