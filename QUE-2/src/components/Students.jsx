import { useEffect, useState } from 'react';

function Students() {

    const [students, setStudents] = useState([]);

    const [search, setSearch] = useState("");

    const [semester, setSemester] = useState("");

    const [division, setDivision] = useState("");

    const [gender, setGender] = useState("");


    useEffect(() => {

        fetch('/students.json')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.log(error));

    }, []);


    const filteredStudents = students.filter(student => {

        const nameMatch =
            student.firstname
                .toLowerCase()
                .includes(search.toLowerCase());

        const semesterMatch =
            semester === "" ||
            student.semester === semester;

        const divisionMatch =
            division === "" ||
            student.div === division;

        const genderMatch =
            gender === "" ||
            student.gender === gender;

        return (
            nameMatch &&
            semesterMatch &&
            divisionMatch &&
            genderMatch
        );

    });


    return (

        <div>

            <h2>Students</h2>


            <div className="row mb-3">


                <div className="col-md-3">

                    <label>Search First Name</label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                <div className="col-md-3">

                    <label>Semester</label>

                    <select
                        className="form-select"
                        value={semester}
                        onChange={(e) =>
                            setSemester(e.target.value)
                        }
                    >

                        <option value="">
                            All
                        </option>

                        <option value="5">
                            5
                        </option>

                        <option value="6">
                            6
                        </option>

                        <option value="7">
                            7
                        </option>

                    </select>

                </div>


                <div className="col-md-3">

                    <label>Division</label>

                    <select
                        className="form-select"
                        value={division}
                        onChange={(e) =>
                            setDivision(e.target.value)
                        }
                    >

                        <option value="">
                            All
                        </option>

                        <option value="A">
                            A
                        </option>

                        <option value="B">
                            B
                        </option>

                        <option value="C">
                            C
                        </option>

                    </select>

                </div>


                <div className="col-md-3">

                    <label>Gender</label>

                    <select
                        className="form-select"
                        value={gender}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    >

                        <option value="">
                            All
                        </option>

                        <option value="Male">
                            Male
                        </option>

                        <option value="Female">
                            Female
                        </option>

                    </select>

                </div>

            </div>


            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Semester</th>
                        <th>Division</th>
                        <th>Gender</th>

                    </tr>

                </thead>


                <tbody>

                    {filteredStudents.map(student => (

                        <tr key={student.id}>

                            <td>{student.id}</td>

                            <td>{student.firstname}</td>

                            <td>{student.lastname}</td>

                            <td>{student.semester}</td>

                            <td>{student.div}</td>

                            <td>{student.gender}</td>

                        </tr>

                    ))}


                    {filteredStudents.length === 0 && (

                        <tr>

                            <td
                                colSpan="6"
                                className="text-center"
                            >
                                No students found
                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>

    );

}

export default Students;