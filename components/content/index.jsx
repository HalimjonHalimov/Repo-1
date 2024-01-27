import { books } from "@/utils/data";
import { Button } from "..";
import Card from "../card";

export default function Content() {
  return (
    <div>
      <div className="flex justify-between items-start my-2">
        <div>
          <div className="text-2xl font-semibold ">
            You’ve got <span className="text-[#6200EE]">7 book</span>
          </div>
          <div className="text-[20px] text-slate-200 mt-4">
            Your books today
          </div>
        </div>
        <button
          type={"button"}
          className="h-auto py-2 px-4 rounded text-sm font-semibold text-white mt-[1.5rem] border border-[#6200EE] bg-[#6200EE]  hover:bg-white hover:text-[#6200EE] transition"
        >
          + Create a book{" "}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-12">
        {books.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
