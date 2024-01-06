import React, { useRef, useEffect } from "react";

function App() {
  useEffect(() => {
    import("./componente1");
    import("./componente2");
  }, []);

  return (
    <div>
      <mensaje-componente></mensaje-componente>
      <boton-componente></boton-componente>
    </div>
  );
}

export default App;
