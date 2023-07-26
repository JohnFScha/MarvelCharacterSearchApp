export default function parseDate(dateString) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dateObj = new Date(dateString);

  const year = dateObj.getFullYear();
  const monthIndex = dateObj.getMonth();
  const day = dateObj.getDate();
  
  const month = months[monthIndex];
  
  return `${month} ${day}, ${year}`;
}