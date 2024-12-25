
// Traditional old method for declaring props
// function Hello(props){
//     console.log(props); // returns in object
//     return <div>{props.greetings} {props.name}</div>
// }

// Destructing props 
// props are inmutable means that we can't change after defining props

// shadowing or overwriting the local variable. -- to be learn
function Hello({person}){
    // name = "Mallesh";
    return <div>{person.greetings} {person.name} {person.rollNo}</div> 
}


export default Hello;