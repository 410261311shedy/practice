State Hooks
//To remember” information like user input
useState declares a state variable that you can update directly.
e.g.:
function ImageGallery() {
   const[index, setIndex] = useState(0)
}
const[index, setIndex] = useState(0)
//Declares a state variable called index,
//and it's setter function setIndex,
//initializing the state with a value of 0
useState(0) 
//React Hook that creates state with initial value 0
const[index, setIndex] = useState(0)
//Array destructuring that assigns
//index = current state value
//setIndex = function to update the satate value

Context Hooks
//Context lets a component receive information from 
//distant parents without passing it as props
e.g: 
//your app’s top-level component can pass the current UI theme 
//to all components below, no matter how deep.
useContext
e.g:
frunction Button() {
    const theme = useContext(ThemeContext);
}

Ref Hooks
//Refs let a component hold some information 
//that isn’t used for rendering
//Refs allow components to store information
//that doesn't affect the visual rendering
