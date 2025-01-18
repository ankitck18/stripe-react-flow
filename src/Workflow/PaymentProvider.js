import React from 'react'
import { Box, Icon, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { X } from 'react-bootstrap-icons';



const PAYMENT_PROVIDER_IMAGE_MAP = {
    St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
    Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
    Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
    Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
    Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
  };

const PaymentProvider = ({data:{name,code}}) => {
  return (
    <Box
    sx={{ display: 'flex',
        alignItems: 'center',
        borderRadius: '24px',
        bgcolor:"white",
        border: "2px solid #5e5eff",
        p:0,
        pb:1,
        pl:1,
        gap:2,
        width:"140px"}}>
            <Box height={4} width={4}>
            <div className="image-container">
                <img className="payment-provider-image" src={PAYMENT_PROVIDER_IMAGE_MAP[code]} alt="Payment Provider Logo"/>
                </div>
            </Box>
            <Box className="flex-grow" >
            <Typography variant="body2" className="text-sm mt-[-2px]">
                {name}
            </Typography>
            </Box>
            <IconButton
            color="red"
            aria-label="Delete Payment Provider"
            className="pointer-events-auto  p-1"
            size="small"
            > 
            <X/>
            </IconButton>
    </Box>
  )
}

export default PaymentProvider