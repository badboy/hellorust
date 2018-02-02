DEMOS=add call-js canvas factorial feistel import-memory

build:
	cobalt build
.PHONY: build

serve:
	cobalt watch
.PHONY: serve

rebuild-demos:
	@for demo in $(DEMOS); do \
		make -C demos/$$demo; \
	done
.PHONY: build-demos
