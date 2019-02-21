# debounce-with-map

  A tiny function that runs a delayed execution of unique calls by managing a Map data structure with a custom debounce implementation

## Installation

    $ npm install debounce-with-map
or

    $ yarn add debounce-with-map
    
## Example basic

```js
const debounce = require('debounce-with-map');

const testFunc = (key) => debounce(()=>{
    console.log('debounce: ', key);
}, key, 5000);

testFunc('key1') // call debounced function with key1
testFunc('key1') // call debounced function with key1
testFunc('key2') // call debounced function with key2
testFunc('key1') // call debounced function with key1

/**
* After 5 seconds of last keyed-called function output will be:
*
* debounce:  key2
* debounce:  key1
*/
```

## Example listener

```js
const debounce = require('debounce-with-map');

const myHandler = (event, key) => debounce(() => {
    console.log('mousemove', key)
}, key, 3000);
document.addEventListener("mousemove", ev => myHandler(ev, 'mListener'));

/**
* After 3 seconds of last mouse move output will be:
* 
* mousemove – "mListener"
*/
```

## Usage
debounce(fn, key, delay);

`fn` - function that will be executed after delay  
`key` - key to store in `Map` unique time out id  
`delay` - period in milliseconds after which `fn` will be executed 