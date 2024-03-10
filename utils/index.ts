import { CarProps, FillterProps } from "@/types";

// Fetch cars from the API
export async function fetchCars(fillter:FillterProps){
  const { manufacturer, year, fuel, limit, model } = fillter;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?manufacturer=${manufacturer}&year=${year}&fuel=${fuel}&limit=${limit}&model=${model}`;
  
  const headers = {
    headers:{
      'X-RapidAPI-Key': '8f96f2c190msh60843ec7ebdc393p13f41cjsn4844a32f003b',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };

  const response = await fetch(url, headers); // fetch the data
  
  const result = await response.json(); // convert the response to json

  return result;
}

// Calculate the rating of a car based on its city MPG and year
export const calculateCarRating = (city_mpg: number, year: number, basePricePerDay: number = 30): number => {
  // Assuming higher MPG and newer year contribute positively to the rating
  let rating = 0;

  // Adjust rating based on city MPG
  if (city_mpg >= 30) {
      rating += 3;
  } else if (city_mpg >= 20) {
      rating += 2;
  } else if (city_mpg >= 10) {
      rating += 1;
  }

  // Adjust rating based on the year of the car
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age <= 2) {
      rating += 3;
  } else if (age <= 5) {
      rating += 2;
  } else if (age <= 10) {
      rating += 1;
  }

  // Calculate final rental price per day
  const rentalPricePerDay = rating * basePricePerDay;

  return rentalPricePerDay;
};

// generate a car image URL
export const generateCarImageURL = (car: CarProps , angle:string = "1" ) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);
  // url.searchParams.append('zoomLevel', zoomLevel);

  return `${url}`;

};

export const updateSearchParam = (type: string, value:string) => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set(type, value)

  const newPath = `${window.location.pathname}?${searchParams.toString()}`
  return newPath;
}
