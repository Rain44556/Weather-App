import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { CLEAR_HISTORY } from "./weatherTypes";
export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city, { rejectWithValue }) => {
      try {
        const apiKey = process.env.WEATHER_APP_API_KEY;
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              q: city,
              units: 'metric',
              appid: apiKey,
            },
          }
        );
        return response.data;
      } catch (err) {
        let message = 'Failed to fetch weather';
        if (err.response && err.response.data && err.response.data.message) {
          message = err.response.data.message;
        }
        return rejectWithValue(message);
      }
    }
  );

  export const clearHistory = () => ({
    type:CLEAR_HISTORY
  });