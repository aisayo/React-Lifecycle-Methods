# React Lifecycle Methods :recycle:

## Component lifecycle consists of three phases:

1. Mounting(creation)
2. Updating
3. Unmounting(deletion)

- [React Lifecycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
____________________________________________________________________________

### Mounting

- Putting elements into the DOM
- Methods that get called during mounting phase: constructor, getDerivedStateFromProps, render, componentDidMount(in this order)

#### constructor() optional

- Called before component is mounted
- Not necessary if not initializing state or binding methods
- Don’t use props in constructor to manipulate state
- Call `super(props)` to initiate parents constructor method and inherit from parents methods

#### static getDerivedStateFromProps() optional

- Gets called after the constructor but before render
- Can access any props/state or modify state
- Uncommon to use, we want to initially render a component before manipulating data
- For example, it might be handy for implementing a <Transition> component that compares its previous and next children to decide which of them to animate in and out

```getDerivedStateFromProps exists for only one purpose. It enables a component to update its internal state as the result of changes in props. Our previous blog post provided some examples, like recording the current scroll direction based on a changing offset prop or loading external data specified by a source prop. We did not provide many examples, because as a general rule, derived state should be used sparingly. All problems with derived state that we have seen can be ultimately reduced to either (1) unconditionally updating state from props or (2) updating state whenever props and state don’t match. (We’ll go over both in more detail below.)```

#### render() required

- Describes what HTML for component will look like

#### componentDidMount() optional

- Runs after the component output has been rendered to the dom
- If you need to load data, this is where you want to do it
- Commonly used for fetching/updating data/asynchronous processes
_____________________________________________________________________________

### Updating

- Happens whenever a components state or props are changed
- Component gets re-rendered, very quick and responsive
- 5 methods get called during this phase: getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate (in this order)

#### static getDerivedStateFromProps() optional

- Gets invoked on update before anything else
- Again, used for rare cases!

#### shouldComponentUpdate() optional

- Invoked just before component will re-render
- Receives `nextProps` or `nextState` as arguments
- Should always return a boolean, default is `true`
- Asking: 'Should I re-render?'
- Improves performance by avoiding unnecessary re-renders

#### render() required

- Called after the first two methods

#### getSnapshotBeforeUpdate() optional 

- returns a 'snapshot' that can be used in componentDidUpdate
- Have access to the values of `props` and `state` before the update
- If you use this method, you have to include componentDidUpdate, will throw an error if you do not
- Snapshot is passed in as a third argument to componentDidUpdate

#### componentDidUpdate() optional

- Called after component updates in the DOM

- [Examples of use cases](https://www.newline.co/@dmitryrogozhny/using-componentdidupdate-in-react--f037b5aa)

### Unmounting

- Phase when the React element is removed from the DOM
- Deletion/Clean up phase
- One method: componentWillUnmount

#### componentWillUnmount()

- Called before the component is removed from the DOM

## Good to know! :bulb:

- [Styling Components](https://reactjs.org/docs/dom-elements.html#style)
- [React Bootstrap](https://react-bootstrap.github.io/components/cards/)
- [React.createRef()](https://www.newline.co/@dmitryrogozhny/how-to-access-dom-nodes-in-react-with-refs--57d97b3d)
- [React Components Rendering Twice](https://medium.com/@andreasheissenberger/react-components-render-twice-any-way-to-fix-this-91cf23961625)
- [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)
- [When to use PureComponent](https://medium.com/better-programming/when-to-use-react-purecomponent-723f85738be1#:~:text=PureComponent%20Is%20Primarily%20Used%20for,performance%20boost%20in%20some%20cases.)
- [Use case for componentDidUpdate](https://kevgathuku.me/2018/06/07/a-practical-use-case-for-reacts-componentdidupdate/)
- [When to use derived state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state)