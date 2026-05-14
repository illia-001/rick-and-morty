import { UI } from "../constants/colors";

export function getStatusStyle(status: string) {
  switch (status) {
    case "Alive":
      return UI.STATUS.GREEN;

    case "Dead":
      return UI.STATUS.RED;

    default:
      return UI.STATUS.GRAY;
  }
}
