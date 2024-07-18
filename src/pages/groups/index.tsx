import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import AddIcon from '@mui/icons-material/Add';
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateGroup from "../../components/createGroup";
const Groups = () => {
    const groups = [{ id: '1', name: 'kodaikanal dairy' }]
    const [createGroup, setCreateGroup] = useState(false)
    const [width, setWidth] = useState(0);
    const [group, setGroup] = useState('')

    function handleList(newGroup: boolean, group: number) {
        if (newGroup) {
            return <CreateGroup handleBack={(back: boolean) => { setCreateGroup(back) }} />
        }
        return <div>
            {groupsList()}
        </div>
    }

    function groupsList() {
        return <div>
            <div className={`flex justify-between items-center mb-3 ${width < 768 ? 'mx-4 mt-4' : ''}`}>
                <div className="text-lg">Groups</div>
                <AddIcon className="mx-4" onClick={() => { setCreateGroup(!createGroup) }} />
            </div>
            {groups?.map((each, index) => {
                return (
                    <div key={index} className={`flex items-center cursor-pointer pl-4 bg-white hover:bg-[#f5f6f6] `} onMouseEnter={() => { }} onMouseLeave={() => { }} onClick={() => { setGroup(each?.id) }}>
                        <div className="">
                            <Avatar src={''} alt="Naveen" sx={{ width: 50, height: 50 }} />
                        </div>
                        <div className="flex justify-between items-center pl-2 pr-4 w-full border-b border-[#e9edef]">
                            <div className="flex flex-col justify-between">
                                <div className="flex">
                                    <div className="text-[#111b21] text-[17px]">{each?.name}</div>
                                </div>
                                <div className="text-[#667781] text-xs">{'4'} members</div>
                            </div>
                            <div className="flex flex-col justify-center items-center my-5  rounded-full">
                                <span className="text-blue-500 px-4 py-1 cursor-pointer">Total : {'15000'}</span>
                            </div>
                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-10 pt-4 border-b border-[#e9edef]"></div>
                    </div>
                )
            })}
        </div>
    }

    function handleDetailScreen() {
        if (((width >= 768) || (groups?.length == 0 && width < 768 && !createGroup)) && group == '') {
            return <div className={`flex flex-col justify-between items-center h-[300px] w-full my-20 md:my-30 `}>
                <div className="text-lg">{groups?.length == 0 ? 'No Groups available' : 'Choose Group'}</div>
                <img src="https://img.freepik.com/free-vector/smiling-person-crowd_23-2148422588.jpg" alt="" />
                <div className="block md:hidden px-7 text-lg bg-blue-500 text-white rounded-md" onClick={() => { setCreateGroup(!createGroup) }}>Create Group</div>
            </div>
        }
        else if (group != '') {
            return <div className="">
                <div className="flex items-center gap-3 px-3 py-2 bg-[#f0f2f5]" onClick={() => { }}>
                    <ArrowBackIcon className="block md:hidden" onClick={()=>{setGroup('')}}/>
                    <Avatar alt="Naveen" src={''} sx={{ width: "42px", height: "42px" }} />
                    <div>
                        <div>{groups?.find((ele) => ele?.id == group)?.name}</div>
                        <div className="text-sm text-[#667781]">4 members</div>
                    </div>
                </div>
            </div>
        }
        else if (width <= 768 && groups?.length >= 1 && !createGroup){
            return  <div className={``}>{groupsList()}</div>
        }

        // 1st if condition ${((width >= 768) || (groups?.length == 0 && width < 768 && !createGroup)) &&  group == '' ? 'block' : 'hidden'}`}
        // 3rd condition else if ${width <= 768 && groups?.length >= 1 && !createGroup ? 'block' : 'hidden'}
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const updateWidth = () => setWidth(window.innerWidth);
            updateWidth();
            window.addEventListener('resize', updateWidth);
            return () => window.removeEventListener('resize', updateWidth);
        }
    }, []);
    return (
        <div>
            <Navbar />
            <div className="flex w-full relative overflow-y-hidden">
                <div className={`${createGroup || groups?.length >= 1 ? 'w-[30%] hidden md:block mt-10 ml-8' : 'hidden'}`}>{handleList(createGroup, groups?.length)}</div>
                <div className={`${(createGroup || groups?.length >= 1) && width >= 768 ? 'w-[70%]' : 'w-[100%] block'}`}>
                    {!createGroup && groups?.length == 0 && <div className="flex justify-end"><AddIcon className="hidden md:block bg-blue-500 text-white rounded-md mt-10 mr-10" fontSize="large" onClick={() => { setCreateGroup(!createGroup) }} /></div>}
                    {createGroup && <div className="block md:hidden mr-5 mt-5 ml-5"><CreateGroup handleBack={(back: boolean) => { setCreateGroup(back) }} /></div>}
                    {handleDetailScreen()}
                </div>
            </div>
        </div>
    )
}

export default Groups;