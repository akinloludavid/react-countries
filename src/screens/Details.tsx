import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { useGetCountryByName } from "../lib/query/country";
import { useParams, useNavigate } from "react-router-dom";
const Details = () => {
  const { countryName = "" } = useParams();
  const navigate = useNavigate();
  const backIcon = <ArrowBackIcon />;
  const { themeMode, textColor, secondaryColor }: any = useAppContext();
  const { data } = useGetCountryByName(countryName);
  const country = data && data[0];
  console.log(country);
  const mainBgColor = themeMode === "dark" ? "primary.dark" : "primary.light";

  const details = [
    { label: "Native Name", content: country?.nativeName },
    { label: "Top Level Domain", content: country?.topLevelDomain[0] },

    { label: "Population", content: country?.population },

    { label: "Currencies", content: country?.currencies[0]?.code },
    { label: "Region", content: country?.region },

    { label: "Languages", content: country?.languages[0]?.name },
    { label: "Subregion", content: country?.subregion },
    { label: "Capital", content: country?.capital },
  ];
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: mainBgColor,
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        paddingTop: "10vh",
      }}
    >
      <Button
        sx={{ color: textColor }}
        startIcon={backIcon}
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>

      <Grid container spacing={4} marginTop={4}>
        <Grid item xs={12} md={6}>
          <img
            src={country?.flag}
            alt={country?.name}
            width="100%"
            height={"100%"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography color={textColor} variant="h2" marginBottom={5}>
            {country?.name}
          </Typography>
          <Grid container alignItems="flex-end" justifyContent={"center"}>
            {details?.map((el) => (
              <Grid item xs={12} md={6} key={el.label}>
                <Typography
                  color={textColor}
                  variant="h5"
                  marginBottom={"20px"}
                >
                  {el.label}:{" "}
                  <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                    {el.content}
                  </span>
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Grid container sx={{ display: "flex" }} alignItems="center">
            <Typography color={textColor}>Border Countries: </Typography>
            {country?.borders?.map((el: any) => (
              <Button sx={{ color: textColor }} key={el}>
                {el}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
