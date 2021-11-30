# Difference between class components and functional components

The main difference is how React handle them. 

## How to Setup Hooks

In order to use hooks, we first must import {useState, useEffect} methods from the React library.

Use destructuring assignment to define two variables that are pointing to the return value of useState() method within the functional component. 

The first variable is whatever your state is, the second one is the function to update the state. 

Note that you must declare your state at the TOP level within the function.

The argument you pass in to `useState` method should be the initial state. 

For every functional component, it saves some similar object like this in an external place:

{
    functionName: "FunctionalApp".
    state: 0,
    setState:
}


## useEffect

1. if we ONLY pass in a callback function as an argument to useEffect(), this callback function will behave as componentDidMount, componentDidUpdate, or componentWillUnmountwhich means this callback function will be invoked when compnenent mounted, updated, or unmounted. 
`useEffect(myFunc)`

2. if we pass a second argument - everytime we update the count state, the callback function is being invoked. We are basically saying: invoke the callback function if the count changes. 
`useEffect(myFunc, [count])`

3. we can call useEffect() as many times as we want

4. we can build a costum hook