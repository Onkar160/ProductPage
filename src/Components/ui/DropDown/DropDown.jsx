/*
this component accept 4 props in which 2 are optional
use case:- 

<DropDown 
title = "your title in string format",
description = [Accepts array],
bg = either can be false or true, if true it will set gray background, if false(default) sets nothing means white background
border = either can be false or true, true sets top and bottom thin border with color dark-gray, if false(default) sets nothing
/>
*/

import { SquareCheckBig, ChevronUp, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import helper from "../../../utils/helper";

export default function DropDown({
  title,
  description = [],
  bg = false,
  border = false,
}) {
  const [isOpen, setOpen] = useState(false);
  const borderTopBottom = {
    borderTop: "0.1px solid rgba(61, 61, 61, 0.1)",
    borderBottom: "0.1px solid rgba(61, 61, 61, 0.1)",
  };

  return (
    <div
      className="rounded-sm"
      className={bg ? "bg-gray-200" : ""}
      style={border ? borderTopBottom : {}}
    >
      <div
        className="px-2 py-3 flex justify-between items-center rounded-sm hover:bg-gray-300 cursor-pointer group"
        onClick={() => setOpen(!isOpen)}
      >
        <div className="flex gap-3">
          <SquareCheckBig size="30px" strokeWidth="1px" />
          <p className="text-lg tracking-widest font-semibold group-hover:underline">
            {title}
          </p>
        </div>
        {isOpen ? (
          <ChevronUp size="20px" strokeWidth="1px" />
        ) : (
          <ChevronDown size="20px" strokeWidth="1px" />
        )}
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <article className="px-5 py-3 tracking-wider leading-8 font-[400]">
            {description.map((item) => helper(item.type, item.text))}
          </article>
        </div>
      </div>
    </div>
  );
}
