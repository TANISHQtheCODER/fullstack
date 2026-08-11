function Student({ name, marks }) {

    return (

        <div className="card mb-2">

            <div className="card-body">

                <h5>{name}</h5>

                <p>Marks: {marks}</p>

                {marks >= 40 ? (

                    <span className="badge bg-success">
                        PASS
                    </span>

                ) : (

                    <span className="badge bg-danger">
                        FAIL
                    </span>

                )}

            </div>

        </div>

    );

}


function StudentList() {

    const students = [

        { name: "Tanishq", marks: 85 },
        { name: "Rahul", marks: 35 },
        { name: "Priya", marks: 72 },
        { name: "Amit", marks: 28 }

    ];

    return (

        <div>

            <h2>Conditional Rendering & List</h2>

            {students.map((student, index) => (

                <Student
                    key={index}
                    name={student.name}
                    marks={student.marks}
                />

            ))}

        </div>

    );

}


function Card({ children }) {

    return (

        <div className="card mt-4">

            <div className="card-header">
                Nested Component
            </div>

            <div className="card-body">

                {children}

            </div>

        </div>

    );

}


function ConditionalList() {

    return (

        <div>

            <StudentList />

            <Card>

                <h4>Children / Containment</h4>

                <p>
                    This content is passed using the children prop.
                </p>

            </Card>

        </div>

    );

}

export default ConditionalList;