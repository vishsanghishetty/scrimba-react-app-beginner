1. Why do we need to `import React from "react"` in our files?
   import React from 'react' is required because JSX syntax is defined in React.
   If we were to remove the import we would get a React not defined error.

2. If I were to console.log(page) in index.js, what would show up?
   console would log the page object {} because page is a bunch of JSX and when we log it to the console it is a JS object.

   what we get when we create JSX is JS object.

   React elements that describe what React should
   eventually add to the real DOM for us.

3. What's wrong with this code:

```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

JSX above is 2 sibling elements and it is not wrapped inside a single parent element.
We need our JSX to be nested under a single parent element.

4. What does it mean for something to be "declarative" instead of "imperative"?
   declarative means I would tell the program what to accomplish and it would know how to accomplish. telling what to do and not how to do (React will take care of that)

imperative means telling what to do step by step

5. What does it mean for something to be "composable"?
   can be built in components to make a greater whole

We have small pieces that we can put together to make something
larger/greater than the individual pieces.
