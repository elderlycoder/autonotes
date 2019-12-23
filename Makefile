service:
		@docker-compose -f docker-compose.yml rm -fs $(filter-out $@,$(MAKECMDGOALS))
		@docker-compose -f docker-compose.yml up -d --build $(filter-out $@,$(MAKECMDGOALS))
%:
		@: