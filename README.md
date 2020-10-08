# Quick-Mechanic App (ReactJs-Frontend)

## Introduction
Quick-mechanic App is a solution that first originated as an idea to help leverage the desperate situations that long-distance drivers
meet in the field.

Later generalized to every vehicle, the solution allows drivers to create an account on the platform, and be able to see the available mechanics
in their vicinity, as well as send out a breakdown alert to the mechanics, should they have one. 


Similarly, it allows the mechanic to register on the platform and be able to receive sos alerts from stranded drivers in need of assistance.

## Technologies Used
ReactJs (Frontend), GraphQL & MongoDB (Backend)

## React hooks 
This project used React hooks almost in each component, as such, here's a short tutorial in React hooks.

#### What is Hooks?
These are just some set of in-built React functions that help with state management in a functional component.
The choice of functional components over class components is an easy one. Functional components have multiple advantages, some being:
1. improved code re-use
2. Better code composition
3. Custom hooks can be easily shared with other components
4. Functional components reduce complexity of code

The advantages could vary from developer to developer, but no matter, Hooks are better.
Now let's dive into some of the hooks implemented in this Project.

#### useState
The lifecycle begins. The useState function is used to declare a hooks variable. Setting an initial state so to the variable.
When the app renders, the variables bears this initial state. In any project, there will be multiple variables who have initial values that need be 
shown as soon as the app renders, and useState is perfect for this. Here's an example from the project (SignIn.js) of how it's implemented;

```jsx
const [showLoading, setShowLoading] = React.useState(false);
```
The code above simply creates a boolean variable called "showLoading" and gives set to it an initial value of false. 
This is loading spinner that pops up when a user clicks on the logIn button, just to show that the logIn process has begun. 
Since the button is unpressed when the app renders, the variable has to be false, as in the loading spinner should not show.
One might wonder though, what is the second variable in the "array-like definition", well wonder no more. 
The second parameter in the hooks definition is the set method, that will be later used to change variable state i.e. from false to true. More about that, see below. 

#### Changing state
So now, say a user has clicked the login button, we need to show the progress spinner to the, most probably, impatient user who doesn't know of the fetch requests we are making in the background.
How do we do this in hooks? Simple.
We change variable state by using setState. In the same signIn.js, the function login;

```jsx
const login = () => {
    setShowLoading(true);
    //start the authentication process etc
}
```
As you've noticed, we have used the second parameter in the hooks definition. 
It is very advisable in hooks that you do not assign the variable value directly like is done in other languages, or even javascript itself. (i.e. something like showLoading = true)
The set method itself re-renders the view, and updates the state, Making sure that the app is up to date and in-sync.

#### useEffect
You might have state variables whose values will definitely need to be obtained elsewhere, i.e. their values will only be obtained the app has already completed it's first initial render.
In that case, enter useEffect. In class components, useEffect can be thought of component mounting, updating and unmounting — all combined in one function.
Interactions with the Browser/DOM API or external API-like data fetching or subscriptions should be placed in the useEffect function to avoid state inconsistencies.

An example from this project of the useEffect function in action is in the map.js

```jsx
React.useEffect(() => {

        navigator.geolocation.getCurrentPosition((position) => {
            const userCoordinates = [position.coords.longitude, position.coords.latitude];
            getLocationNames(position.coords.latitude, position.coords.longitude);});

            //proceed to loading the map on the screen
});
```
Above, the app gets the location from the driver soon after log-in, so that it can be sent out to a mechanic when they send out an alert everytime they have a breakdown.
However, the location can only be obtained after the app has already rendered, and the user logged, hence the useEffect function in the map component.
The useEffect function will re-run each time the state goes through a re-render (an update), thereby keeping the app up to date.

Passing the second argument in useEffect will prevent an infinite chain of updates (componentDidUpdate()) and it’ll also allow our useEffect() hook to act as a componentDidMount lifecycle method and render once without re-rendering on every change in the tree.

#### useRef
useState is magnificent and all but there's just one problem. Sometimes, one may want a variable that persists its value across re-renders.
The useRef hook has a .current property that returns a value that persists throughout the lifetime of the component.
An example from the project would also be in the map.js component.

```jsx
const mapContainerRef = React.useRef(null);
```

and it's .current property is called later on, i.e.

```jsx
 map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: userCoordinates,
                zoom: 10,
            });
```

#### other hooks
There's definitely more hooks out there that haven't been used in this project. some of them are;
1. useReducer : used for management of local state of complex components with a reducer.
2. useContext : used for subscribing to React context.

## Project Members
Appreciation should go to the whole team 291 for their unending efforts and contributions to the project.

## License
[MIT](https://choosealicense.com/licenses/mit/)