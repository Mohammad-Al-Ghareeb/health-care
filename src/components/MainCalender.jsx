import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";

export default function MainCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "100%", // Set width as needed
          maxWidth: "600px", // Max width for the calendar
          _margin: "auto", // Center the calendar
          get margin() {
            return this._margin;
          },
          set margin(value) {
            this._margin = value;
          },
          // bgcolor: "background.paper", // Background color
          borderRadius: "8px", // Rounded corners
          // boxShadow: 3, // Shadow effect
          // p: 2, // Padding around the calendar
        }}
      >
        <DateCalendar
          sx={{
            "& .MuiPickersDay-root": {
              // bgcolor: "primary.main", // Background color for days
              // color: "white", // Text color for days
              "&:hover": {
                bgcolor: "primary.dark", // Darker background on hover
              },
              fontSize: 17,
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
