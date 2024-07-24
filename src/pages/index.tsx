import Navbar from "../components/navbar";

export default function Home() {
  //width={'500px'} height={'610px'}
  return (
    <div className="noSelect">
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <img src="https://settleup.io/images/img-devices.png" alt="demo" className="m-5 md:my-20 md:ml-20 h-[300px] w-[250px] lg:w-[500px] lg:h-[610px]" />
        <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-10 m-5 md:m-0">
          <div className="text-3xl md:text-5xl mx-4 md:mx-48">Sharing expenses with friends?</div>
          <div className="text-sm md:text-xl mx-4 md:mx-40">Settle Up keeps track of your gang’s expenses – great for travellers, flatmates, couples and others.</div>
        </div>
      </div>
    </div>
  );
}
