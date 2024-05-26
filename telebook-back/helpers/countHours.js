module.exports = function countHours(entries) {
  const groupedData = {};
  entries.forEach((entry) => {
    const date = new Date(entry.date).toISOString().split("T")[0].split("-")[2];
    if (!groupedData[date]) {
      groupedData[date] = [];
    }
    groupedData[date].push(entry);
  });

  const workHours = {};

  for (const date in groupedData) {
    const entries = groupedData[date];
    const inTimes = entries
      .filter((entry) => entry.direction === "IN")
      .map((entry) => new Date(entry.date))
      .sort((a, b) => a - b);
    const outTimes = entries
      .filter((entry) => entry.direction === "OUT")
      .map((entry) => new Date(entry.date))
      .sort((a, b) => a - b);

    let totalSeconds = 0;
    while (inTimes.length && outTimes.length) {
      const inTime = inTimes.shift();
      const outTime = outTimes.shift();
      if (outTime > inTime) {
        totalSeconds += (outTime - inTime) / 1000;
      }
    }

    workHours[date] = (totalSeconds / 3600).toFixed(1);
  }
  return workHours;
};
