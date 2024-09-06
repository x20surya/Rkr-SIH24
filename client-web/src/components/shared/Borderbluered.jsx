import { redflower1 } from "@/constants/borders";
import { slateflower1 } from "@/constants/borders";

export default function Borderbluered({bg}) {
  return (
    <div
      style={{
        backgroundImage: `url(${redflower1})`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "80px",
      }}
      className={`h-12 w-full z-40 bg-${bg}`}
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
