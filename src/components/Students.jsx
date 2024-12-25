import Student from "./Student";
export default function Students() {
    // Iterating students array object inside jsx
    const students = [
        { name: "Vinesh", age: 18, location: "Ulwe" },
        { name: "Vighnesh", age: 15, location: "Kamatipura" },
        { name: "Vamshi", age: 22, location: "Antophill" },
    ];
    return <div>
        <ul>
            {students.map(student =>
                /* <li key={student.name}>{student.name}</li> */
                <Student name={student.name} age={student.age} key={student.name} />
            )}
        </ul>
    </div>
}