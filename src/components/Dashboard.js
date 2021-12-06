import React from "react"
import DataTable from "./Table/Table"
import { Box,Text } from "@chakra-ui/react";


export default function Dashboard() {
  
    return (
        <>
        <Box p='3em' textAlign='center'>
          <Text p='1em' fontSize='2xl' textAlign='center' >React Table with Chakra UI</Text>
          <DataTable/>
        </Box>
        </>
    )
  }
  