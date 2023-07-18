import { useState } from "react";
import "../styles/form.scss";

const Form = ({ list, setList, search, setSearch }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim() && phone.trim() && email.includes(".")) {
      setList([
        ...list,
        {
          id: list.length + 1,
          name,
          phone,
          email,
        },
      ]);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("Fill the fields correctly!");
    }
  };
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <div className="inputs-container">
          <input
            type="text"
            placeholder="Name"
            onChange={nameHandler}
            value={name}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            onChange={phoneHandler}
            value={phone}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={emailHandler}
            value={email}
            required
          />
          <button type="submit">➕ Add</button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          onChange={searchHandler}
          value={search}
          className="search-input"
        />
      </form>
    </>
  );
};

export default Form;
