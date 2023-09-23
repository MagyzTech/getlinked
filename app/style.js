const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[40px] sm:text-[30px] text-[24px] text-center lg:text-left",
  sectionSubText: "sm:text-[18px] text-[14px]  uppercase tracking-wider",
  contentText:
    "mt-4  text-[17px] max-w-3xl leading-[30px] text-center lg:text-left",
  buttonStyle:
    "rounded-[4px] py-[12px] px-[24px] text-[16px] text-white font-semibold bg-button-gradient hover:opacity-90 transition duration-300",
  textLogo:
    "md:text-[40px] sm:text-[30px] xs:text-[24px] text-[20px] font-bold text-white inline-flex items-center m-0",
  textLogoSmall:
    "md:text-[24px] sm:text-[20px] xs:text-[14px] text-[16px] font-bold text-white inline-flex items-center m-0",
  containerStyle:
    "sm:px-16 px-6 sm:py-16 py-10 max-w-7xl w-full mx-auto relative",
  linkStyle: " hover:text-primary transition duration-300 font-medium",
  activelinkStyle: "text-primary",
  defaultButtonStyle:
    "rounded-[4px] py-[12px] px-[24px] text-[16px] text-white font-semibold  bg-transparent hover:opacity-90 transition duration-300",
  overlayStyle:
    "w-full h-full FIXED top-0 left-0 bg-black/80 bg-opacity-80 bg-blend-overlay bg-blur-500",
  timerStyle: "text-[40px] md:text-[50px] lg:text-[60px] font-bold",
  line: "w-full h-[40px] border-t border-borderBrand/10 bg-transparent",
  glassCard:
    "rounded-[10px] border border-primary/70 bg-primary/10 backdrop-blur, bg-forgroud/95 supports-backdrop-blur:bg-forgroud/60 dark:bg-transparent w-full px-4 pb-7 lg:min-h-[160px] min-h-[100px] flex-col flex items-center justify-end",
  glassCardWinner:
    "rounded-[10px] border border-[#903AFF]/70 bg-[#903AFF]/10 backdrop-blur, bg-forgroud/95 supports-backdrop-blur:bg-forgroud/60 dark:bg-transparent w-full px-4 pb-7 lg:min-h-[160px]  min-h-[100px] flex-col flex items-center justify-end",
  partnerWrapper: "flex justify-center items-center p-5",
  partnerLogo:
    "lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] relative flex justify-center items-center",
  inputStyle:
    "block px-2.5 pb-3.5 pt-5 w-full text-white/75 bg-forgroud/95 rounded-lg border  appearance-none dark:text-white dark:border-white  focus:outline-none focus:ring-0 peer",
  selectStyle:
    "block px-2.5 pb-3.5 pt-5 w-full text-white/75 bg-forgroud/95 rounded-lg border  dark:text-white dark:border-white  focus:outline-none focus:ring-0 peer",
  textLabelStyle:
    "absolute text-sm text-white/70 dark:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-forgroud/95 px-2 peer-focus:px-2 peer-focus:text-white/75 peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
};

export { styles };
