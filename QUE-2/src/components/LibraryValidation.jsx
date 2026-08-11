import { useFormik } from 'formik';
import * as Yup from 'yup';

function LibraryValidation() {

    const formik = useFormik({

        initialValues: {

            name: "",
            email: "",
            password: ""

        },

        validationSchema: Yup.object({

            name: Yup.string()
                .required("Name is required"),

            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),

            password: Yup.string()
                .min(6, "Minimum 6 characters")
                .required("Password is required")

        }),

        onSubmit: (values) => {

            alert(
                "Form submitted: " +
                JSON.stringify(values)
            );

        }

    });


    return (

        <div>

            <h2>Formik + Yup Validation</h2>

            <form onSubmit={formik.handleSubmit}>

                <div className="mb-3">

                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {formik.touched.name &&
                        formik.errors.name && (

                            <small className="text-danger">
                                {formik.errors.name}
                            </small>

                        )}

                </div>


                <div className="mb-3">

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {formik.touched.email &&
                        formik.errors.email && (

                            <small className="text-danger">
                                {formik.errors.email}
                            </small>

                        )}

                </div>


                <div className="mb-3">

                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {formik.touched.password &&
                        formik.errors.password && (

                            <small className="text-danger">
                                {formik.errors.password}
                            </small>

                        )}

                </div>


                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Submit
                </button>

            </form>

        </div>

    );

}

export default LibraryValidation;