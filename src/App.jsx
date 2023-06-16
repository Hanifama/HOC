//!  1. buat komponen memiliki hasil penambahan masing-masing.
//!  2. buat & gunakan Higher Order Component (HOC).
import { useState } from "react";
import "./App.css";

function App() {
  const [nomor, setNomor] = useState(0);

  const handlerNomor = () => {
    setNomor(nomor + 1);
  };

  return (
    <>
      <div>
        <h3>x + 1</h3>
        <p>{nomor}</p>
        <button onClick={handlerNomor}>tambah</button>
      </div>
      <div>
        <h3>x + 1</h3>
        <p>{nomor}</p>
        <button onClick={handlerNomor}>tambah</button>
      </div>
    </>
  );
}

export default App;
