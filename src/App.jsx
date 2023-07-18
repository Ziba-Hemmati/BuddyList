import { useState } from "react";
import Form from "./components/Form";
import Title from "./components/Title";
import "./styles/app.scss";
import Contacts from "./components/Contacts";

function App() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <>
      <Title />
      <div className="card">
        <Form
          list={list}
          setList={setList}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <Contacts
        list={list}
        setList={setList}
        search={search}
        setSearch={setSearch}
      />
    </>
  );
}

export default App;
