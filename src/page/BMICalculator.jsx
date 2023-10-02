import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";
import StandardBMI from "../component/StandardBMI";
import MetricBMI from "../component/MetricBMI";

const BMICalculator = () => {
  const [backgroundclr, setbackclr] = useState("rgba(250,250,250,1)");
  const [caltype, setcaltype] = useState("std");

  const handleChangebackground = () => {
    let val = `rgba(${parseInt(Math.random() * 256)},${parseInt(
      Math.random() * 256
    )},${parseInt(Math.random() * 256)},1)`;
    console.log(val);
    setbackclr(val);
  };

  return (
    <Box sx={{ backgroundColor: backgroundclr }}>
      <Box
        sx={{ display: "flex", justifyContent: "end", padding: "10px 20px" }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={handleChangebackground}
        >
          Change Background Color
        </Button>
      </Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button
            variant="contained"
            sx={{ width: "120px" }}
            onClick={() => setcaltype("std")}
          >
            Standard
          </Button>
          <Button
            variant="contained"
            sx={{ width: "120px" }}
            onClick={() => setcaltype("mtr")}
          >
            Metric
          </Button>
        </Box>
        <Box
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {caltype === "std" ? <StandardBMI /> : <MetricBMI />}
        </Box>
      </Box>
    </Box>
  );
};

export default BMICalculator;
