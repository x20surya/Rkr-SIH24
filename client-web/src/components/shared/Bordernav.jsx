import { redleafsmall } from "@/constants/borders";


export default function Borderbluered({bg}) {
  return (
    <div
      style={{
        backgroundImage: `url(${redleafsmall})`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "80px",
      }}
      className={`h-12 w-full z-40 bg-${bg}`}
    >

    </div>
  );
}
