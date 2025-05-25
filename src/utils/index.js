export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const dateString = date.toLocaleDateString(["ID-id"]);
  const timeString = date.toLocaleTimeString(["ID-id"], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${dateString} ${timeString}`;
};

export const msgIsFile = (text) => {
  const toArray = text.split(" ");
  if (toArray[0] === "[file]" && toArray[2] === "[/file]") {
    return true;
  }

  return false;
};

export const getFileUrl = (text) => {
  const toArray = text.split(" ");
  if (toArray[0] === "[file]" && toArray[2] === "[/file]") {
    return toArray[1];
  }

  return text;
};
