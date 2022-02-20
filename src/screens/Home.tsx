import { Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../components/CustomCard";
import { useAppContext } from "../contexts/AppContext";
import { useGetAllCountries } from "../lib/query/country";
import CustomSelect from "../components/CustomSelect";
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
  return arr?.filter((country) =>
    country.name.toLowerCase().includes(
      query.toLowerCase()
      // country.region.toLowerCase() === regionName.toLowerCase()
    )
  );

  // .filter((el: any) => el.region.toLowerCase() === regionName.toLowerCase());
};
const Home = () => {
  const [countryNameQuery, setCountryNameQuery] = useState("");
  const [regionName, setRegionName] = useState("");
  const { data: allCountries } = useGetAllCountries();
  const { themeMode }: any = useAppContext();
  const mainBgColor = themeMode === "dark" ? "primary.dark" : "primary.light";
  console.log(allCountries);
  console.log(countryNameQuery);

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

  console.log(filteredCountries);
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
      <Grid container justifyContent="space-between" marginBottom={"40px"}>
        <Grid item md={3} xs={12}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={countryNameQuery}
            onChange={(e) => {
              setCountryNameQuery(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item md={3} xs={12}>
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
    </Container>
  );
};

export default Home;
