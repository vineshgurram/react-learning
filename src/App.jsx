import Students from "./components/Students"
import Fruits from "./components/Fruits"
import Hello from "./components/Hello"
import ConditionalComponents from "./components/CondtionalComponents"
import Message from "./components/Message"
import Counter from "./components/Counter"
import Form from "./components/Form"
import Forms from "./components/Forms"

function App() {
  const person = {
    name: "Vinesh Gurram",
    rollNo: 21,
    greetings: "Good Morning"
  }
  return (
    <>
      <div className="App">
        {/* <Hello person={person} /> */}
        {/* <Fruits /> */}
        {/* <Students /> */}
        {/* <ConditionalComponents /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Form /> */}
        <Forms />
      </div>
    </>
  )
}

export default App
