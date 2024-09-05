import { Button } from "@/components/ui/button";
import { borderblue, yellowcloud1 } from "@/constants/borders";

export default function Home() {
  const borderurl = borderblue;
  return (
    <>
      <div
        style={{ borderImage: `url(.${borderurl}) 33% round` }}
        className={`w-[50%] h-[50%] border-[50px]`}
      ></div>
      <img className="h-10" src={yellowcloud1} />
    </>
  );
}
