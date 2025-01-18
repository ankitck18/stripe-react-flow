import { Box } from '@mui/material';
import { Handle, Position } from '@xyflow/react';
import React from 'react';

const PaymentInit = ({ data }) => {
  const { amount } = data;

  return (
    <Box sx={{ bgcolor: "white", border: "1px solid #aa1fff" }}>
      <Box sx={{ bgcolor: "#410566", p: 1 }}>
        <Box sx={{ fontSize: "0.875rem", color: "white" }}>
          Payment Initialized
        </Box>
      </Box>
      <Box sx={{p:2}}>
      <Box sx={{ fontSize: "1.5rem", color: "skyblue" }}>
        ${amount}
        </Box>
      </Box>
      <Handle type="source" position={Position.Right}/>
    </Box>
  );
};

export default PaymentInit;
