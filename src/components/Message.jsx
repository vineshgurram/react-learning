export default function Message() {
    function displayMessage(){
        console.log("please click here");
    }
    return <>
        <button onClick={displayMessage} >Click here</button>
    </>
}