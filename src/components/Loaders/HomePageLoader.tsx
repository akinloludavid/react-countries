import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

const Loader = () => {
  return (
    <Stack spacing={1} width={"100%"} marginBottom="20px">
      <Skeleton variant="rectangular" width={"90%"} height={118} />
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" width={200} />
    </Stack>
  );
};
export default function HomePageLoader() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
        <Grid md={3} sm={6} xs={12} key={el}>
          <Loader />
        </Grid>
      ))}
    </Grid>
  );
}
