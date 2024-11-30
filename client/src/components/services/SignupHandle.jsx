
export const handleInput = (event, setFormInputs) => {
  const { name, value } = event.target;
  let obj = { [name]: value };
  setFormInputs((prev) => ({ ...prev, ...obj }));
};

export const handleSubmit = async (event, formInputs, setFormInputs) => {
  event.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInputs),
    });
    const data = await response.json();

    if (response.ok) {
      alert("Registration successful! Please login.");
      setFormInputs({
        username: "",
        email: "",
        password: "",
      });
    } else {
      alert("Registration failed: " + data.message);
    }
  } catch (error) {
    console.error("Error during signup:", error);
    alert("An error occurred. Please try again later.");
  }
};
