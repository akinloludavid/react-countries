import { Alert, AlertTitle, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../components/CustomCard";
import { useAppContext } from "../contexts/AppContext";
import { useGetAllCountries } from "../lib/query/country";
import CustomSelect from "../components/CustomSelect";
import HomePageLoader from "../components/Loaders/HomePageLoader";
const options = [
  { label: "Africa", value: "africa" },
  { label: "America", value: "america" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];
const getFilteredCountries = (
  arr: any[],
  query: string,
  regionName: string
) => {
  return arr
    ?.filter((country) =>
      country.region.toLowerCase().includes(regionName.toLowerCase())
    )
    .filter((el: any) => el.name.toLowerCase().includes(query.toLowerCase()));
};
const Home = () => {
  const [countryNameQuery, setCountryNameQuery] = useState("");
  const [regionName, setRegionName] = useState("");
  const {
    data: allCountries,
    isLoading,
    isError,
    error,
  }: any = useGetAllCountries();
  const { themeMode }: any = useAppContext();
  const mainBgColor = themeMode === "dark" ? "primary.dark" : "primary.light";

  interface IOption {
    label: string;
    value: string;
  }
  const handleRegionNameChange = (option: IOption) => {
    if (option) {
      setRegionName(option.value);
    } else {
      setRegionName("");
    }
  };

  const filteredCountries = getFilteredCountries(
    allCountries,
    countryNameQuery,
    regionName
  );

  return (
   <Container
    maxWidth="xl"
    sx={{
     backgroundColor: mainBgColor,
     width: "100%",
     height: "100%",
     minHeight: "100vh",
     paddingTop: "20vh",
    }}
   >
    {isLoading ? (
     <HomePageLoader />
    ) : (
     <>
      <Grid container justifyContent="space-between" marginBottom={"40px"}>
       <Grid item md={3} xs={12}>
        <TextField
         id="outlined-basic"
         label="Countries"
         variant="outlined"
         value={countryNameQuery}
         onChange={(e) => {
          setCountryNameQuery(e.target.value);
         }}
         InputProps={{
          style: { color: themeMode === "dark" ? "#f3f3f3" : "#030303" },
         }}
         InputLabelProps={{
          style: { color: themeMode === "dark" ? "#f3f3f3" : "#030303" },
         }}
         sx={{ boxShadow: "0px 4px 8px rgba(0,0,0,0.2)", color: "green" }}
         fullWidth
        />
       </Grid>
       <Grid item md={3} xs={12} mt={{ xs: 4 }}>
        <CustomSelect
         placeholder="Select a region"
         options={options}
         onChange={handleRegionNameChange}
        />
       </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center" alignItems={"center"}>
       {filteredCountries?.map((country: any) => (
        <Grid item xs={12} md={3} key={country.name}>
         <Link
          to={`/country/${country.name}`}
          style={{ textDecoration: "none" }}
         >
          <CardComponent country={country} />
         </Link>
        </Grid>
       ))}
      </Grid>
     </>
    )}

    {isError && (
     <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {error?.message ||
       "Oops, something went wrong. Try refreshing your page."}
     </Alert>
    )}
   </Container>
  );
};

export default Home;
