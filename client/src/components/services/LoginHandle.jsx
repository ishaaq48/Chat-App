
export const handleInput = (event, setFormInputs) => {
  const { name, value } = event.target;
  let obj = { [name]: value };
  setFormInputs((prev) => ({ ...prev, ...obj }));
};

export const handleSubmit = async (event, formInputs, setFormInputs, navigate) => {
  event.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInputs),
    });

    setFormInputs({
      username: "",
      password: "",
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();

    localStorage.setItem("token", data.token);
    navigate("/protected");
  } catch (err) {
    console.log(err);
  }
};
