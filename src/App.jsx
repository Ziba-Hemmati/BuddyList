import Form from "./components/Form";
import Title from "./components/Title";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Title />
      <div className="card">
        <Form />
      </div>
    </>
  );
}

export default App;
