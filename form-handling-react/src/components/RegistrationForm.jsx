import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const username = formData.username;
  const email = formData.email;
  const password = formData.password;

  const [errors, setErrors] = useState();
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if ((!username) || (!email) || (!password)) {
      setErrors("All fields are required!");
      return;
    }
    setErrors("");

    try {
      // Mock API call
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("User registered successfully!");
        setFormData({ username: "", email: "", password: "" });
      } else {
        setErrors("Failed to register user.");
      }
    } catch (err) {
      setErrors("Something went wrong.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Controlled Registration Form</h2>

      {errors && <p className="text-red-500">{errors}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
