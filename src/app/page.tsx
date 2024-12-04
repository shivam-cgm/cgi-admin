'use client'

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return(
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh',
      textAlign:'center'
    }}>
    <Container>
      <Typography color="success" fontWeight={"bolder"} onClick={()=>{router.push("/users")}} sx={{
        fontSize : {
          xs : 24,
          sm : 30,
          md : 40,
          lg : 50
        }
      }}>CGI Controls</Typography>
    </Container>
    </Box>
  )
}
