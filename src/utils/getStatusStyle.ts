import { COLORS } from "../constatnts/colors";

export function getStatusStyle(status: string) {
  switch (status) {
    case "Alive":
      return COLORS.STATUS.GREEN;

    case "Dead":
      return COLORS.STATUS.RED;

    default:
      return COLORS.STATUS.GRAY;
  }

}
