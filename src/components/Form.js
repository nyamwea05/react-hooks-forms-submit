import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName === "" || lastName === "") {
      setErrors(["Please enter both first and last name."]);
    } else {
      const formData = {
        firstName: firstName,
        lastName: lastName,
      };
      console.log(formData);
      setFirstName("");
      setLastName("");
      setErrors([]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default Form;