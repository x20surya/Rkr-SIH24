import { backgroundflowers } from "@/constants/borders";

export default function BorderYellow({ bg }) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundflowers})` }}
      className={`h-8 w-full border-4 border-l-0 border-r-0 border-primary-foreground bg-${bg}`}
    ></div>
  );
}
