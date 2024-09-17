# Clean Code Smells & Heuristics: Community Edition ✨

https://homostellaris.github.io/clean-code-smells-and-heuristics/

We encourage you to submit PRs to add to this database of smells & heuristics so that yourself and others can
benefit. Otherwise you are free to make a hard fork and use this repo as a template to start your own from scratch.

# Adding a new smell / heuristic

1. Fork the repository.
1. Create a new markdown file in the folder for the relevant collection.
   - For example if you are adding a smell / heuristic about 'naming' then add it to the `_naming` folder.
   - If you want to create a new collection then refer to [Adding a new collection](#adding-a-new-collection)
1. Ensure that the markdown file has front-matter that defines `code` and `title` variables.
   ```
   ---
   code: C1
   title: Re-iterating The Code
   ---
   ```
   The new file will be automatically organised on the page according to its collection and code.
1. Add code examples, they can be in any language
1. Submit a PR.

# Adding a new collection

1. Create a new folder with with a leading underscore.
2. Update `_config.yml` to register the folder as a collection.

# Getting started with development

Follow the instructions in the [Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll) article.

## TL; DR

1. `bundle install`
2. `bundle exec jekyll serve`
3. `open localhost:4000`
