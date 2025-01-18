import { Box } from '@mui/material'
import { Handle, Position } from '@xyflow/react'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import CustomHandle from './CustomHandle'

const PaymentCountry = ({data:{currency,country,countryCode}}) => {
  return (
    <Box 
    sx={{ display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            bgcolor:"#e2e8f0",
            border: "2px solid #aa1fff",
            p:2,
            gap:2,
            width:"155px"}}>
                <Box>
                <ReactCountryFlag countryCode={countryCode} svg aria-label={countryCode} className="text-[2em] leading-[2em]" />
                </Box> 
                <Box sx={{ flexGrow: 1 }}>
                    <Box>
                        <div>{country}</div>
                        <div className='text-xs'>{currency}</div>
                    </Box>
            </Box>
            <CustomHandle type="source" position={Position.Right}/>
            <CustomHandle type="target" position={Position.Left}/>
    </Box>
  )
}

export default PaymentCountry