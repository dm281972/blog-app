

const Topbar = () => {
  return (
   <section className="sticky  top-0 z-50  w-full bg-gray-400">
    <div className="flex justify-center">
    <div className="flex-between w-[1440px] py-2 px-5">
      
      <img
           src="/assets/images/logo.svg"
           alt="logo"
           width={130}
           height={325}
           className=""
         />
         <button
         className="text-white bg-green-600 p-2 mx-2  rounded-md sm:text-[16px] text-[8px]">Subscribe</button>
    </div>
    </div>

   
   </section>
  )
}

export default Topbar
