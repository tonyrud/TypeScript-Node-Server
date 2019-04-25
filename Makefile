init: setup install
install:
	docker-compose -f docker-compose.builder.yml run --rm install
dev:
	docker-compose up
setup:
	docker volume create nodemodules
psql:
	docker exec -it postgres_container psql -U postgres
seed:
	docker exec -it postgres_container psql -U postgres -d postgres -f /dump.sql

