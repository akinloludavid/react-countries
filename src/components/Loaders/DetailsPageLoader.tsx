import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Stack>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} marginBottom={"20px"}>
          <Skeleton variant="rectangular" width={"100%"} height={300} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton
            variant="rectangular"
            width={"30%"}
            height={30}
            sx={{ marginBottom: "30px" }}
          />

          <Skeleton
            variant="text"
            width={"90%"}
            sx={{ marginBottom: "30px" }}
          />
          <Skeleton
            variant="text"
            width={"90%"}
            sx={{ marginBottom: "30px" }}
          />
          <Skeleton
            variant="text"
            width={"90%"}
            sx={{ marginBottom: "30px" }}
          />

          <Skeleton
            variant="text"
            width={"90%"}
            sx={{ marginBottom: "30px" }}
          />
          <Skeleton
            variant="text"
            width={"90%"}
            sx={{ marginBottom: "30px" }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};
const DetailsPageLoader = () => {
  return <Loader />;
};

export default DetailsPageLoader;
