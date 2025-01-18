import { ReactFlow,Background,Controls, useNodesState,useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';
import { addEdge } from 'reactflow';
import { initialNodes,initialEdges } from './Workflow.constants';
import PaymentInit from './PaymentInit';
import PaymentCountry from './PaymentCountry';
import PaymentProvider from './PaymentProvider';
import PaymentProviderSelect from './PaymentProviderSelect';
import CustomEdge from './CustomEdge';

const nodeTypes = {
  paymentInit : PaymentInit,
  paymentCountry: PaymentCountry,
  paymentProvider : PaymentProvider,
  paymentProviderSelect : PaymentProviderSelect
}

const edgeTypes ={
  customEdge:CustomEdge,
}


export const Workflow = () => {
  const [nodes,setNodes,onNodesChange] = useNodesState(initialNodes);
  const [edges,setEdges,onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection) => {
    const edge = {...connection,animated:true,id:`${edges.length+1}`,type:'customEdge'};
    setEdges((prevEdges)=> addEdge(edge,prevEdges));
  },[edges])

  return (
    <div style={{ height: '500px', width: '500px', border: '1px solid black'}}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        fitView
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onConnect={onConnect}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
