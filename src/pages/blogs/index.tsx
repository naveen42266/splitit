import Navbar from "../../components/navbar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Blogs() {
  const TextWithTruncation = (text: string) => {
    const truncatedText = text.length > 175 ? text.slice(0, 175) + "..." : text; // Assuming 3 lines = 75 characters
    return (
      <p>{truncatedText}</p>
    );
  };
  const blog = [1, 2, 3, 4, 5]

  //width={'500px'} height={'610px'}
  return (
    <div className="noSelect">
      <Navbar />
      <div className="text-4xl pt-3 text-center">Blogs</div>
      <div className='bg-white'>
        {blog?.map((each) => {
          return (
            <div key={each} className={`flex w-full px-[20px] md:px-[160px] ${each == blog.length ? 'py-[50px]' : 'pt-[50px]'} `}>
              <div className='w-[40%] hidden lg:block'><img className='w-full h-[360px] object-center' loading="lazy" src="https://cdn.mos.cms.futurecdn.net/Wh46bS2Gw8vUC6iQh2wEd6-1200-80.png" alt="" /></div>
              <div className='bg-[white] py-6 px-8 w-full lg:w-[60%] flex flex-col justify-between border border-gray-400'>
                <div>
                  <div className='flex justify-start items-center gap-2'>
                    <AccountCircleIcon className='text-slate-500' fontSize='large' />
                    <div className='font-light text-sm'>
                      <div>Admin</div>
                      <div className='flex items-center'>May 16, 2024  <div className="w-0.5 h-0.5 mx-2 bg-black rounded-full"></div> 2 min </div>
                    </div>
                  </div>
                  <img className='w-full h-[300px] object-center block lg:hidden py-4' loading="lazy" src="https://cdn.mos.cms.futurecdn.net/Wh46bS2Gw8vUC6iQh2wEd6-1200-80.png" alt="" />
                  <div className='px-1 text-2xl font-bold text-[#107070] hover:text-black'>Error</div>
                  <div className='px-2 text-base font-light text-gray-600'>{TextWithTruncation(`These errors can be caused by both hardware and software issues. If you added new hardware to your PC before the Blue Screen error, shut down your PC, remove the hardware, and try restarting. If you're having trouble restarting, you can start your PC in safe mode. For more info, see Start your PC in safe mode in Windows.`)}</div>
                </div>
                <div className='h-24'></div>
                <div className='flex flex-col justify-between px-2'>
                  <div className='border-b border-black'></div>
                  <div className='flex justify-between items-center p-2 font-light text-sm'>
                    <div className='flex items-center gap-2'>
                      <div>0 views</div>
                      <div>0 comments</div>
                    </div>
                    <div className='flex items-center'>0 <FavoriteBorderIcon className='pl-2 text-[#e84a43]' /></div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
