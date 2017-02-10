# ASCII to Unicode (a2u)

## Getting Started

```
npm install ascii-to-unicode
```

## Usage

```
var asciiToUnicode = require('ascii-to-unicode');

var args = {
  lang: 'si',
  asciiFontId: 'fmabhaya',
  text: <text input you need to convert>
};
var unicodeText = asciiToUnicode.convert(args);
```

## Development Guide

```
git clone git@github.com:textwire/ascii-to-unicode.git
cd ascii-to-unicode

git submodule init
git submodule update
```

