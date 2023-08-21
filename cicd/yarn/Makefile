export

.PHONY: setup-npmrc setup-yarnrc install install-ci audit lint lint-fix

setup-npmrc: ##
	@envsubst <cicd/yarn/.npmrc.tpl >.npmrc

setup-yarnrc: ##
	@cp cicd/yarn/.yarnrc.tpl .yarnrc

install: ##
	@yarn install --frozen-lockfile

install-ci: ##
	@yarn install --frozen-lockfile --no-progress

audit: ## Checks for known security issues with the installed packages.
	@yarn audit

lint: ##
	@yarn lint

lint-fix: ##
	@yarn lint --fix
