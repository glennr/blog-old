# Deploy will push current master, merge with gh-pages, push that, then check master back out.
# So only run make deploy once your current master is ready to go
deploy:
	git checkout master
	git push origin master
	git checkout gh-pages
	git merge master
	git push origin gh-pages
	git checkout master

.PHONY: deploy