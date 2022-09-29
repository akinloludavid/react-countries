import {
  Alert,
  AlertTitle,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../components/CustomCard";
import { useAppContext } from "../contexts/AppContext";
import { useGetAllCountries } from "../lib/query/country";
import HomePageLoader from "../components/Loaders/HomePageLoader";
const options = [
  { label: "All", value: "" },

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
    ?.filter((el: any) => el.name.toLowerCase().includes(query.toLowerCase()));
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

  const handleRegionNameChange = (e: any) => {
    setRegionName(e.target.value);
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
            <Grid item md={3} sm={3} xs={12}>
              <TextField
                id="outlined-basic"
                label="Countries"
                variant="outlined"
                value={countryNameQuery}
                onChange={(e) => {
                  setCountryNameQuery(e.target.value);
                }}
                InputProps={{
                  style: {
                    color: themeMode === "dark" ? "#f3f3f3" : "#030303",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: themeMode === "dark" ? "#f3f3f3" : "#030303",
                  },
                }}
                sx={{ boxShadow: "0px 4px 8px rgba(0,0,0,0.2)" }}
                fullWidth
              />
            </Grid>
            <Grid item md={3} sm={3} xs={12} mt={{ xs: 4, md: 0 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    color:
                      themeMode === "dark" ? "primary.light" : "primary.dark",
                  }}
                >
                  Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  placeholder="Region"
                  value={regionName}
                  label="Region"
                  onChange={handleRegionNameChange}
                  sx={{
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                    color: themeMode === "dark" ? "#f3f3f3" : "primary.dark",
                  }}
                  inputProps={{
                    style: {
                      color: themeMode === "dark" ? "#f3f3f3" : "#030303",
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem
                      sx={{
                        backgroundColor:
                          themeMode === "light" ? "#f3f3f3" : "primary.dark",
                        color: themeMode === "dark" ? "#f3f3f3" : "#030303",
                      }}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems={"center"}
          >
            {filteredCountries?.map((country: any) => (
              <Grid item xs={12} sm={4} md={3} key={country.name}>
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
