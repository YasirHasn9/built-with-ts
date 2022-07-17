`Why using TS`

1. Reduces Errors

   - prevents us from calling a function with the wrong type
   - passing the wrong types as arguments
   - function returns the wrong type
   - typing the wrong name of a property inside an object

2. Helps to code faster
   - we know what types we are dealing with
   - we know right away if we are missing something

**_ Note _**
JS, in its nature a lose language, it wants to the get the job done
so sometimes it coerced values together into illegal types

```js
let name = "Yasir";
let isBool = false;
console.log(name + " " + isBool); // Yasir false
```

JS a converted a bool type into string 👎

`Setup`

1. yarn init -y to initialize package.json
2. yarn add typescript -D in the development dep <<<<TS COMPLIER>>>>
3. yarn add ts-node -D this a wrapper around js that works for ts
4. npx tsc --init create ts configuration
