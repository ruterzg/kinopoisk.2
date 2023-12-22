import API from "./api";

function App() {
  const handleSubmit = async () => {
    const res = await API.get("api/v2.2/films");

    console.log("res: ", res);
  };

  return (
    <div className="App">
      <button onClick={handleSubmit}>Kinopoisk</button>
    </div>
  );
}

export default App;
