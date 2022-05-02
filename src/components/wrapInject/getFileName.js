export const getFileName = (path) => {
  const fullFileName = path.split("/").pop();
  const fileNameParts = fullFileName.split(".");
  return fileNameParts.length === 1 ? fileNameParts[0] : fileNameParts.slice(0, -1).join(".");
};
