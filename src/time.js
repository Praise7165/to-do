const dateTime = new Date();

let todaysDate = dateTime.toDateString().split(" ");

const [day, month, date, year] = todaysDate;

export const getDate = (function () {
  /* time related stuff out of this file tomorrow */
  return (todaysDate = `{ ${day}, ${month} ${date}, ${year} }`);
})();

/* function to know when the file was lasted updated */
export const updateTime = (function () {
  let todaysTime = dateTime.toLocaleTimeString().split(" ");

  let [time, media] = todaysTime;
  time = time.slice(0, -3);

  return (todaysTime = `${month} ${date}, ${year} at ${time} ${media}`);
})();
