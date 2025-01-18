import { Menu, MenuItem, MenuList, Stack } from '@mui/material';
import { useReactFlow } from '@xyflow/react';
import React, { useState } from 'react';
import Button from '@mui/material/Button'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PAYMENT_PROVIDERS = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
  { code: "Ap", name: "Apple Pay" },
  { code: "Pp", name: "Paypal" },
  { code: "Am", name: "Amazon Pay" },
];

export default function PaymentProviderSelect() {
  const { setNodes } = useReactFlow();
  const [anchorEl, setAnchorEl] = useState(null); // For controlling the Menu open/close state

  const onProviderClick = ({ name, code }) => {
    const location = Math.random()*500;
  
    setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: `${prevNodes.length + 1}`,
          data: { name, code },
          type: "paymentProvider",
          position: { x: location, y: location },
        },
      ]);
    };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
     <Button variant="outlined" onClick={handleClick} endIcon={<ExpandMoreIcon />}>Add Payment Provider</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuList>
          {PAYMENT_PROVIDERS.map((provider) => (
            <MenuItem key={provider.code} onClick={() => onProviderClick(provider)}>
              {provider.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
