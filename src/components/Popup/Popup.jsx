export default function Popup() {
  return (
    <div className="flex flex-col justify-start items-center gap-10 w-full h-full px-[1%] ">
      <h1 className="text-[20px]">Create Your Task!</h1>
      <input
        type="text"
        placeholder="Your tasks here!"
        a
        // value={inputValue}
        className="w-full md:text-[20px] text-[15px] h-1/8 min-h-fit max-h-20 md:w-[65%] pl-[2%] border-none rounded-[15px] outline-none cursor-text relative z-0 placeholder:text-[15px] md:placeholder:text-[18px] bg-white"
        // onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="date"
        className="w-full md:text-[20px] text-[15px] h-1/8 min-h-fit max-h-20 md:w-[65%] pl-[2%] border-none rounded-[15px] outline-none cursor-text relative z-0 placeholder:text-[15px] md:placeholder:text-[18px] bg-white"
        // value={dateValue}
        // onChange={(e) => setDateValue(e.target.value)}
      />
      <button
        className="w-[7vmin] min-w-14 h-[7vmin] min=h-14 border-0 rounded-[15px] outline-none cursor-pointer relative z-0 text-white material-symbols-outlined task-add"
        // onClick={handleSubmit}
      ></button>
    </div>
  );
}
