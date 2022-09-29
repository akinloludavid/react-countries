import { Typography, Grid } from "@mui/material";
import React from "react";

const PagenotFound = () => {
 return (
  <Grid container width={"100vw"} height="100%">
   <Grid md={12} xs={12} item justifyContent={"center"} alignItems="center">
    <Typography textAlign={"center"} variant="h1" color={"green"}>
     Page Not found
    </Typography>
   </Grid>
  </Grid>
 );
};

export default PagenotFound;
