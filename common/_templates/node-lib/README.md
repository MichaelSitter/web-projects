# `{{ packageName }}`

{{description}}

## Library Documentation

Library doc site can be found <a href="./markdown/index.md">here</a>.

## Api-Extractor & Api-Documenter

Your new library project ships with integrated Api-extractor documentation which uses your source code comments as documentation inputs. This uses [Api-Extractor](https://api-extractor.com/), which is an integrated documentation generator for Typescript. Here's what happens when you run `rushx build`:

- Detect a project’s exported API surface
- Capture the contracts in a concise report designed to facilitate review
- Warn about common mistakes (e.g. missing exports, inconsistent visibility, etc.)
- Generate *.d.ts rollups with trimming according to release type
- Output API documentation in a portable format that’s easy to integrate with your content pipeline.

This library also uses `Api-Documentation` to transform the outputs from `Api-Extractor`, along with your library TSDoc comments, and automatically generates Markdown documentation.

### Working with `Api-Extractor`

- The contents of the `/etc` and `/markdown` directories are auto generated by the documentation plugins. These changes should be committed to source control, but **do not manually edit**.

### TSDoc comments

Api-extractor expects your code documentation comments to use the TSDoc format, which is described in detail [here](https://api-extractor.com/pages/tsdoc/doc_comment_syntax/). Here are some basic tips for getting the most out of your library docs.

- The `@packageDocumentation` annotation can be used to created landing page content for your docsite.
- Comment markup must use HTML syntax. Markdown syntax will not render correctly!
- TSDoc is a subset of the JSDoc; always defer to the TSDoc documentation for supported annotations.