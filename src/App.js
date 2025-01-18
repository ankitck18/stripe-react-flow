import { useState } from "react";
import { Workflow } from "./Workflow/Workflow";
import { ReactFlow,Background,Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

function App() {
  const [count, setCount] = useState(0);
  return(
    <>
      <Workflow/>
    </>
  );
}

export default App;
