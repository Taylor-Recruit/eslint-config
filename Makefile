all: help

help: ## Show this help.
	@echo 'Targets:'
	@awk 'BEGIN {FS=":.*?##"} /^[[:alnum:]_-]+:.*?##/ {printf "    \033[32m%-10s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sort
.PHONY: help

include cicd/yarn/Makefile
