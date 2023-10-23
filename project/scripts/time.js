// Function to take the number of seconds and convert it into a rounded number of Day, Hours, or Minutes

function humanReadable(seconds) {
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;

  if (days < 1) {
    if (hours < 1) {
      if (minutes < 1) {
        return `${seconds} seconds`;
      } else {
        return `${parseFloat(minutes).toFixed(2)} minutes`;
      }
    } else {
      return `${parseFloat(hours).toFixed(2)} hours`;
    }
  } else {
    return `${parseFloat(days).toFixed(2)} days`;
  }
}

export default humanReadable;
