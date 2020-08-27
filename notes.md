# React Lifecycle Methods

## Component lifecycle consists of three phases:

1. Mounting(creation)
2. Updating
3. Unmounting(deletion)

- [React Lifecycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
____________________________________________________________________________

### Mounting

- Putting elements into the DOM
- Methods that get called during mounting phase: constructor, getDerivedStateFromProps, render, componentDidMount

#### constructor() optional

- Called before component is mounted
- Not necessary if not initializing state or binding methods
- Don’t use props in constructor to manipulate state
- Call `super(props)` to initiate parents constructor method and inherit from parents methods
- 

#### static getDerivedStateFromProps() optional

- Gets called after the constructor but before render
- Can access any props/state or modify state
- Uncommon to use, we want to initially render a component before manipulating data
- For example, it might be handy for implementing a <Transition> component that compares its previous and next children to decide which of them to animate in and out
-

```getDerivedStateFromProps exists for only one purpose. It enables a component to update its internal state as the result of changes in props. Our previous blog post provided some examples, like recording the current scroll direction based on a changing offset prop or loading external data specified by a source prop. We did not provide many examples, because as a general rule, derived state should be used sparingly. All problems with derived state that we have seen can be ultimately reduced to either (1) unconditionally updating state from props or (2) updating state whenever props and state don’t match. (We’ll go over both in more detail below.)```

#### render() required

- Describes what HTML for component will look like

#### componentDidMount() optional

- Runs after the component output has been rendered to the dom
- Commonly used for fetching/updating data/asynchronous processes

_____________________________________________________________________________

### Updating

- Happens whenever a components state or props are changed
- Component gets re-rendered, very quick and responsive

#### static getDerivedStateFromProps()

- Gets invoked on update before anything else

#### shouldComponentUpdate()

- Invoked just before component will re-render
- Can compare previous props or state with current props or state to avoid unnecessary re-render

#### render()

- Called after the first two methods