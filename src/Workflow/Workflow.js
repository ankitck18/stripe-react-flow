import { ReactFlow,Background,Controls, useNodesState,useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';
import { addEdge } from 'reactflow';
import { initialNodes,initialEdges } from './Workflow.constants';
import PaymentInit from './PaymentInit';

const nodeTypes = {
  'paymentInit' : PaymentInit
}


export const Workflow = () => {
  const [nodes,setNodes,onNodesChange] = useNodesState(initialNodes);
  const [edges,setEdges,onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection) => {
    const edge = {...connection,animated:true,id:`${edges.length+1}`};
    setEdges((prevEdges)=> addEdge(edge,prevEdges));
  },[])

  return (
    <div style={{ height: '500px', width: '500px', border: '1px solid black'}}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        fitView
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onConnect={onConnect}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
