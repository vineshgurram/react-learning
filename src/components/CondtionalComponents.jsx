export default function ConditionalComponents() {
    let display = false;
    let message = ""
    if (display) {
        // return <h1>This is Vinesh G</h1>
        return message = <h1>This is Vinesh G</h1>
    } else {
        // return <h1>This is Vinesh Gurram</h1>
        return message = <h1>This is Vinesh Gurram</h1>
    }
}