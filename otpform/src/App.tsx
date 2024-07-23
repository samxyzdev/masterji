import { OtpInputField } from "./components/OtpInputField";

function App() {
  const onOtpSubmit = (otp) => {
    console.log("Login Successfull", otp);
  };
  return (
    <div className="bg-customBlue ">
      <div className="flex justify-center">
        <div className="w-[553px] h-[97px] top-[38px] left-[480px] font-inter font-[700] text-[80px] leading-[96.82px] text-white drop-shadow pt-[38px]">
          Chai aur Code
        </div>
      </div>
      <div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
          <div className="bg-white w-[756px] h-[514px] top-[218px] left-[378px] rounded-[18px] drop-shadow">
            <div className="font-dmsans font-[700] text-[40px] leading-[52.08px] tracking-customTighter text-center text-black pt-[30px]">
              Mobile Phone Verification
            </div>

            <div className="font-dmsans font-[400px] text-[25px]  text-center leading-8 text-customGray pt-[14px]">
              Enter the 4-digit verification code that was sent to <br />
              your phone number.
            </div>
            <div className="flex justify-center">
              <OtpInputField length={4} onOtpSubmit={onOtpSubmit} />
            </div>
            <div className="flex justify-center">
              <button className="w-[417px] h-[64px] top-[540px] left-[548px] rounded-[8px] bg-customDarkBlue mt-[24px]">
                <div className="font-dmsans font-[400] text-[25px] leading-8 tracking-customTighter text-center text-white">
                  Verify Account
                </div>
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-[585px] h-[33px] top-[628px] left-[472px] font-dmsans font-[400] text-[25px]  leading-8 tracking-customTighter text-center text-customGray pt-[24px]">
                Didn’t receive code?{" "}
                <span className="font-dmsans font-[400] text-[25px]leading-8 tracking-customTighter text-center text-customDarkBlue">
                  Resend
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-col">
        <div className="flex justify-end ">
          <a href="https://chaicode.com/">
            <img
              className="w-[143.62px] h-[150px] top-[795px] left-[1324px] rounded-[18px] mb-[37px]  mr-[44.38px]"
              src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Et6vIZoTixOW93hRDSTMTP5zHiXBScPptDa7wio9Q19Fb3RVeyKyGSdMZNMc8b03m8cZ0ujW0IgAcOHc5a5pATb6wYlKbIcOCU3CVwOpaS5a40VH89QQ~eBtGj5qfiC9d6yfNL4gcOFGfWUKDtlz4flPXQaJAMOUP~rft27nkvk7Cbinif4IiEllm4khAfpzXqTNh48H8JOUsSgdQXBHIkL12OEZd~XdmNdfnl6lLF4M-69ZTRv7nip6jGr6zKiQ6qpV5P~BzFPPLDw0PZWjV~zQmnt8eRGvdRSuyjK9KlUjSNaNyVi8P2eeXixyUAJDCmEVW6CB6SozO0auNevxjQ__"
              alt="Chair aur Code Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
