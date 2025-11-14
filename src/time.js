export const getDate = (function () {
  const dateTime = new Date();

  let today = dateTime.toDateString().split(" ");

  const [day, month, date, year] = today;

  /* time related stuff out of this file tomorrow */
  today = `{ ${day}, ${month} ${date}, ${year} }`;

  return today;
})();

// function to know when the file was lasted updated
export const updateTime = function () {
  const dateTime = new Date();
  let today = dateTime.toDateString().split(" ");
  let todaysTime = dateTime.toLocaleTimeString().split(" ");

  const [, month, date, year] = today;
  let [time, media] = todaysTime;

  time = time.slice(0, -3);

  return (todaysTime = `Last edited on ${month} ${date}, ${year} at ${time} ${String(
    media
  )}`);
};
