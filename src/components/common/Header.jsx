import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { useScreenContext } from "../../context/ScreenContext";

const Header = () => {
  const { setHtmlOn, setCssOn, setJsOn, setConsoleOn, setOututOn } = useScreenContext();


  const handleClick = (i) => {
    if (i === 0) {
      setHtmlOn((prev) => !prev)
    } else if (i === 1) {
      setCssOn((prev) => !prev)
    } else if (i === 2) {
      setJsOn((prev) => !prev)
    } else if (i === 3) {
      setConsoleOn((prev) => !prev)
    } else if (i === 4) {
      setOututOn((prev) => !prev)
    }
  }
  const [open, setOpen] = useState();
  const clicked = () => setOpen(!open)

  // const MenuInfo = [
  //   {
  //     title: "File",
  //     content: "coming soon"
  //   },
  //   {
  //     title: "Add Library",
  //     link: "#"
  //   }

  // ]

  const buttons = [
    'HTML', 'CSS', 'Js', 'Console', 'Output'
  ]

  return (
    <header className="bg-black  border-b-[1px] border-[#bfbfbf] border-collapse md:px-3 pl-[2px] sm:pl-3 flex items-center justify-between ">

      {/* Menu info section */}
      <section className="flex ">
        <FaLaptopCode className="text-4xl px-1" />

        <div className=" h-full hidden md:block  text-[13px] ">
          <div className="flex">
          </div>
        </div>
      </section>

      {/* Buttons section */}
      <section className="flex">
        {buttons.map((but, i) => (
          <div key={i}>
            <button className={`h-full px-2 md:px-3 py-[6px] md:py-[2px] bg-black border-[1px] border-[#ffffff] text-white hover:bg-[#EBF3FF] ${i === 0 ? "md:rounded-l-[5px]" : ""} ${i === buttons.length - 1 ? "md:rounded-r-[5px]" : ""}`} onClick={() => handleClick(i)}>{but}</button>
          </div>
        ))}

      </section>

      {/* help secton */}
      <section className="hidden lg:block   ">
        <div className="flex">

        </div>
      </section>

    </header >
  )
}

export default Header