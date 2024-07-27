function displayDate() {
  const dateTimeDiv = document.getElementById("dateTimeDiv");
  const now = new Date();
  const formattedDate = now.toLocaleString();
  dateTimeDiv.textContent = `Date and time: ${formattedDate}`;
}
