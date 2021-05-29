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

This also means, that you have to take care about using `easy-gist-async` function in a proper place and time by yourself (i.e. using your framework lifecycle tools or window.onload event. For more details see examples below)


## Getting started

1. Install package from the package manager

`npm i easy-gist-async`

```
import gistLoader from 'easy-gist-async';

```

## Usage <a name = "usage"></a>

... To be completed soon!


## [CHANGELOG](../CHANGELOG.md)
s

