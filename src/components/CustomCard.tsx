import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useAppContext } from "../contexts/AppContext";

export default function CardComponent({ country }: any) {
  const { themeMode, textColor, secondaryTextColor }: any = useAppContext();

  return (
    <Card
      sx={{
        maxWidth: "100%",
        backgroundColor:
          themeMode === "dark" ? "primary.dark" : "primary.light",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={country.flag}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ color: textColor }}
            noWrap
          >
            {country.name}
          </Typography>
          <Typography variant="body1" color={secondaryTextColor}>
            Population:{" "}
            <span style={{ fontWeight: "400" }}>{country.population}</span>
          </Typography>
          <Typography variant="body1" color={secondaryTextColor}>
            Region: <span style={{ fontWeight: "400" }}>{country.region}</span>
          </Typography>
          <Typography variant="body1" color={secondaryTextColor}>
            Capital:{" "}
            <span style={{ fontWeight: "400" }}>{country.capital}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
