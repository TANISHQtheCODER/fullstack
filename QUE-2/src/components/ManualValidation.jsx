import { useState } from 'react';

function ManualValidation() {

    const [form, setForm] = useState({

        name: "",
        email: "",
        password: ""

    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }


    function validate() {

        const newErrors = {};

        if (form.name.trim() === "") {

            newErrors.name = "Name is required";

        }

        if (form.email.trim() === "") {

            newErrors.email = "Email is required";

        }
        else if (!form.email.includes("@")) {

            newErrors.email = "Enter valid email";

        }

        if (form.password.length < 6) {

            newErrors.password =
                "Password must be at least 6 characters";

        }

        return newErrors;

    }


    function handleSubmit(e) {

        e.preventDefault();

        const validationErrors = validate();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            alert("Form submitted successfully!");

        }

    }


    return (

        <div>

            <h2>Manual Form Validation</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <small className="text-danger">
                        {errors.name}
                    </small>

                </div>


                <div className="mb-3">

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <small className="text-danger">
                        {errors.email}
                    </small>

                </div>


                <div className="mb-3">

                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <small className="text-danger">
                        {errors.password}
                    </small>

                </div>


                <button className="btn btn-primary">
                    Submit
                </button>

            </form>

        </div>

    );

}

export default ManualValidation;