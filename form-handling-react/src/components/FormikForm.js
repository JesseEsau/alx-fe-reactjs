import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
    const initialValues = {
        username: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                setStatus({ success: "User registered successfully!" });
                resetForm();
            } else {
                setStatus({ error: "Failed to register user." });
            }
        } catch (err) {
            setStatus({ error: "Something went wrong." });
        }
        setSubmitting(false);
    };

    return (
        <div className="max-w-sm mx-auto p-4 border rounded mt-6">
            <h2 className="text-lg font-bold mb-2">Formik Registration Form</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, status }) => (
                    <Form className="flex flex-col gap-3">
                        {status?.error && <p className="text-red-500">{status.error}</p>}
                        {status?.success && <p className="text-green-500">{status.success}</p>}

                        <div>
                            <Field
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="border p-2 rounded w-full"
                            />
                            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="border p-2 rounded w-full"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="border p-2 rounded w-full"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-green-500 text-white p-2 rounded"
                        >
                            {isSubmitting ? "Submitting..." : "Register"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
