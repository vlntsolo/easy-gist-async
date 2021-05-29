# easy-gist-async

<!-- 
## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md) -->

## About Easy-Gist-Async <a name = "about"></a>

`easy-gist-async` is a simple function which loads Github gists in async manner after the document DOM was already rendered/changed.

In case you're using a custom frontend framework to parse content from a Headless CMS, you might want to have some flexibility in rendering your articles.
Specifically, if you'd try to import full @html to an existing DOM element, the GitHub Gist embed code won't work. What `easy-gist-async` does, it searches for markup snippet with gist data in the content and loads gist along with proper css stylesheet afterwords.

This way, you can load your gists in async manner after the page was rendered.

This also means, that you have to take care about using `easy-gist-async` function in a proper place and time by yourself (i.e. using your framework lifecycle tools or `window.onload` event. For more details see examples below)

### [DEMO](https://valentine.click/blog/django-q-and-beanstalk)

## Getting started

1. Install the package from npm

`npm i easy-gist-async`

2. Import it into your project

```
// As an ES6 Module
import gistLoader from 'easy-gist-async';

```

3. Use markup snippets for Gists

`easy-gist-async` expects a div element with gist data in its attributes. 

Use the following format to include the full gist using its url.

`<div data-gist="https://gist.github.com/someuser/34261e6026oi4c303c40c6ece9961182">`

Here: `[data-gist]` - the url of your Gist *required

If you want to include **just one file** from the Gist, add optional `[data-file]` attribute:

`<div data-gist="https://gist.github.com/someuser/34261e6026oi4c303c40c6ece9961182" data-file="01_file.js" >`


### How to load GitHub gists in a Svelte component

```
<script>
import gistLoader from 'easy-gist-async';
import { beforeUpdate, tick } from 'svelte';

beforeUpdate(async() => {
    await tick();
    gistLoader();
	});

</script>
```

## [CHANGELOG](./CHANGELOG.md)
