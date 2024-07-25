import Navbar from "../../components/navbar";

export default function Support() {
  //width={'500px'} height={'610px'}
  return (
    <div className="relative noSelect">
      <div className="sticky top-0 left-0 right-0">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <div className="text-4xl pt-3">Support</div>
        <div className="text-2xl pt-3 text-[#888888] text-center">If you have any feedback about our web app, please send us an e-mail based on the issue you faced:</div>
        <a href="mailto:vnaveenlgp2001@gmail.com" className="underline text-blue-500 text-2xl py-4" target="_blank" rel="noopener noreferrer">vnaveenlgp2001@gmail.com</a>
      </div>
    </div>
  );
}
