function capitalize(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  const theRest = string.slice(1);
  return `${firstLetter}${theRest}`;
}
