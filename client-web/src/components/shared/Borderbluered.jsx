import { redflower1 } from "@/constants/borders";
import { slateflower1 } from "@/constants/borders";

export default function Borderbluered() {
  return (
    <div
      style={{
        backgroundImage: `url(${redflower1})`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "80px",
      }}
      className="h-12 w-full"
    >
      <div
        style={{
          backgroundImage: `url(${slateflower1})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          backgroundSize: "80px",
        }}
        className="w-full h-[50%] bg-primary"
      ></div>
    </div>
  );
}
