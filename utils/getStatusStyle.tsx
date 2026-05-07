export function getStatusStyle(status: string) {
  let color = "bg-gray-400";

  switch (status) {
    case "Alive":
      color = "bg-green-700";
      break;

    case "Dead":
      color = "bg-red-700";
      break;

    default:
      break;
  }
  return `${color}`;
}