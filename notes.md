# React Lifecycle Methods

## Component lifecycle consists of three phases:

    1. Mounting(creation) 
    2. Updating
    3. Unmounting(deletion)

- [React Lifecycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Mounting

    - Putting elements into the DOM
    - Methods that get called during mounting phase: 

        - `constructor()` - optional
            - Called before component is mounted
            - Not necessary if not initializing state or binding methods
            - Don’t use `props` in constructor

        - `static getDerivedStateFromProps()` - optional-
            - Gets called after the constructor but before render
            - Can access any props + state or modify state
            - Uncommon to use, we want to initially render a component before manipulating data

        - `render()`- required
            - Required
            - Describes what HTML for component will look like

        - `componentDidMount()` - optional
            -  Runs after the component output has been rendered to the dom
            -  Commonly used for fetching/updating data/asynchronous processes

### Updating

    - Happens whenever a components state or props are changed
    - Component gets re-rendered, very quick and responsive

    - static getDerivedStateFromProps()
        - Gets invoked on update before anything else
    - shouldComponentUpdate()
        - Invoked just before component will re-render
        - Can compare previous props or state with current props or state to avoid unnecessary re-render
    - render()
        - Called after the first two methods