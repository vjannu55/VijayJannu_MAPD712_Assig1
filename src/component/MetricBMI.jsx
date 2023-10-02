import {
  Box,
  Button,
  FormControl,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";

const useStyle = makeStyles(() => {
  return {
    container: {
      width: "100%",
      maxWidth: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
      boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  };
});

const MetricBMI = () => {
  const { container } = useStyle();
  const [values, setvalues] = useState({ height: "", weight: "" });
  const [result, setresult] = useState("");
  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  const handleCalculate = () => {
    if (values.height.length < 1 || values.weight.length < 1) {
      return alert("Please Enter values");
    }
    let met = parseFloat(values?.height) * 0.0254;
    let kg = parseFloat(values?.weight) * 0.453592;
    let bmi = (kg / (met * met)).toFixed(2);
    console.log(bmi);
    setresult(bmi);
  };
  return (
    <Box className={container}>
      <Box sx={{ width: "100%" }}>
        <FormControl fullWidth>
          <Typography variant="h5" sx={{ py: "10px", fontWeight: "bold" }}>
            Your Height (Inches)
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter Your Height In Inches"
            name={"height"}
            value={values?.height}
            onChange={handleChange}
          />
        </FormControl>
      </Box>
      <Box sx={{ width: "100%" }}>
        <FormControl fullWidth>
          <Typography variant="h5" sx={{ py: "10px", fontWeight: "bold" }}>
            Your Weight (Lbs)
          </Typography>
          <TextField
            fullWidth
            value={values?.weight}
            placeholder="Enter Your Weight (Lbs)"
            name={"weight"}
            onChange={handleChange}
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Button variant="contained" fullWidth onClick={handleCalculate}>
          Compute BMI
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            setresult("");
            setvalues({ height: "", weight: "" });
          }}
        >
          Cancel
        </Button>
      </Box>
      {result?.length > 0 ? (
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3">Your Calculated BMI : {result}</Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default MetricBMI;
