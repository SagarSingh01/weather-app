// Style.js

const Style = {
    containerClass: "min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(circle_at_10%_20%,rgba(0,255,255,0.15),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(139,92,246,0.15),transparent_40%),linear-gradient(to_br,#020617,#020617,#000000)]",

    cardClass: "relative w-full max-w-md rounded-[28px] border border-cyan-500 bg-[#020617]/90 backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,255,0.15)] p-6 text-white transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(0,255,255,0.4)]",

    searchWrapperClass: "flex items-center w-full max-w-md mx-auto bg-[#020617]/80 rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-cyan-400/30 focus-within:border-cyan-300 focus-within:shadow-[0_0_15px_rgba(0,255,255,0.6)] transition-all duration-300 overflow-hidden",
    searchInputClass:  "flex-1 min-w-0 bg-transparent text-cyan-100 placeholder-gray-400 outline-none text-sm sm:text-lg px-2",
    searchIconClass: "flex-shrink-0 text-cyan-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_cyan] text-base sm:text-lg",

    loadingWrapperClass: "h-64 flex flex-col items-center justify-center gap-4",
    loadingSpinnerClass: "w-12 h-12 border-[3px] border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin shadow-[0_0_20px_cyan]",
    loadingTextClass: "text-lg tracking-widest text-cyan-400 animate-pulse",

    errorWrapperClass: "h-64 flex flex-col items-center justify-center gap-2 text-center",
    errorTextClass: "text-red-400 font-medium tracking-wide text-lg",

    locationClass: "text-3xl font-bold tracking-wide text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]",
    dateClass: "text-gray-300 text-lg mt-2 tracking-[0.2em] uppercase",

    weatherIconClass: "w-28 h-28 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-500 hover:scale-115",

    temperatureClass: "text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 drop-shadow-[0_0_25px_rgba(0,200,255,0.6)]",

    conditionClass: "mt-2 text-lg tracking-wide text-cyan-100 opacity-90",

    dividerClass: "w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent my-6",

    extraInfoClass: "flex justify-between gap-4",

    infoBoxClass: "flex flex-col items-center w-1/2 p-4 rounded-2xl bg-[#020617]/80 border border-cyan-400/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]",

    humidityHoverClass: "hover:border-cyan-300",
    windHoverClass: "hover:border-purple-400 hover:shadow-[0_0_25px_rgba(180,0,255,0.6)]",

    infoLabelClass: "text-xs tracking-widest text-gray-400 uppercase",
    infoValueClass: "text-lg font-bold text-cyan-300 mt-1 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
};

export default Style;