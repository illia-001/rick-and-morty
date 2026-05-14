export const UI = {
  BG: {
    ACCENT: "bg-blue-500",
    HEADER: "bg-[#f8f9fa]",
    HOVER: "hover:bg-blue-500",
  },
  TEXT: {
    PRIMARY: "text-black",
    ACCENT: "text-blue-500",
    SECONDARY: "text-[#0000008c]",
    WHITE: "text-white",
    HOVER: {
      PRIMARY: "hover:text-black",
      ACCENT: "hover:text-blue-500",
      WHITE: "hover:text-white",
    },
  },
  BORDER: {
    ACCENT: "border-blue-500",
    GRAY: "border-gray-300",
    HOVER: "hover:border-blue-500",
  },
  STATUS: {
    GRAY: "bg-gray-400",
    GREEN: "bg-green-700",
    RED: "bg-red-700",
  },
} as const;
