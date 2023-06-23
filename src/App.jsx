//!  1. buat komponen memiliki hasil penambahan masing-masing.
//!  2. buat & gunakan Higher Order Component (HOC).

import "./App.css";
import Tombol from "./compo/Tombol";
function App() {

  return (
    <>
      <Tombol nilai={1}/>
      <Tombol nilai={2}/>

    </>
  );
}

export default App;
