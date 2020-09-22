# pikchr-typescript

pikchr-typescript is a simple port of [Pikchr](https://pikchr.org/) for Typescript.

Pikchr is a PIC-like markup language for diagrams in technical documentation written by
Dwayne Richard Hipp.

The project was built with [`emscripten`](https://emscripten.org/) and [`tsdx`](https://github.com/formium/tsdx).

## Installation

```bash
npm install pikchr-typescript --save
yarn add pikchr-typescript            # Alternative with yarn
```

## Usage

```ts
import { pikchr } from 'pikchr-typescript';

async function logSvg() {
  const result = await pikchr('box "Hello world!"');
  if (result.svg) {
    console.log(result.svg);
  } else if (result.errorAsHtml) {
    console.error(result.errorAsHtml);
  }
}
```

This should print:

```xml
<svg xmlns="http://www.w3.org/2000/svg" class="pikchr" viewBox="0 0 112.32 76.32">
<path d="M2,74L110,74L110,2L2,2Z" style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);"></path>
<text x="56" y="38" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello&nbsp;world!</text>
</svg>
```

## Links

- [Pikchr](https://pikchr.org/)
- [PickrShow](https://pikchr.org/home/pikchrshow)

## Build

1. Copy the file [`pikchr.c`](https://pikchr.org/home/file?name=pikchr.c&ci=tip) from the Pikchr Fossil repository.
2. Install [`emscripten`](https://emscripten.org/)
3. Run `emcc -s EXPORTED_FUNCTIONS='["_pikchr"]' -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -s MODULARIZE=1 pikchr.c` to generate a new `a.out.js` and `a.out.wasm`.

You can use [`tsdx`](https://github.com/formium/tsdx) commands like `yarn start`, `yarn test`, `yarn build` to build the rest of the project.
