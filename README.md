# react-pixel-grid &nbsp; &nbsp; [![Latest Version](https://img.shields.io/npm/v/react-pixel-grid.svg?style=flat)](https://npmjs.org/package/react-pixel-grid)

A simple component that wraps [freeman-lab/pixel-grid](https://github.com/freeman-lab/pixel-grid).

`npm install react-pixel-grid`


## Usage

![screenshot](./screenshot.png "screenshot")

```jsx
import PixelGrid from "react-pixel-grid";

<PixelGrid
  data={Array(64).fill(0).map(Math.random)}
  options={{
    size: 10,
    padding: 2,
    background: [0, 0.5, 1],
  }}
/>
```

<br/>

![screenshot2](./screenshot2.png "screenshot2")

```jsx
const r = "#f00";
const g = "#0f0";
const b = "#00f";
const x = "#000";

<PixelGrid data={[
    x, r, x, g, x, b, 
    r, x, g, x, b, x, 
    x, r, x, g, x, b, 
    r, x, g, x, b, x, 
    x, r, x, g, x, b, 
    r, x, g, x, b, x,
]} />
```


<br/><br/>

### Note on animation:
It renders updates fine at < 50 hz. But if you need that sweet 60fps let me know. I can try looking into supporting pixel-grid's [frame](https://github.com/freeman-lab/pixel-grid#pixelsframecb) callback –
but it's tricky because React's scheduler doesn't use requestAnimationFrame like say, \*cough\* Elm, which is probably more cut out for this sort of thing, aside from vanilla js.