import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import AddIcon from '@mui/icons-material/Add';
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Drawer, Tab, Tabs, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CreateGroup from "../../components/createGroup";
const list = [
    {
        name: 'sanjay',
        month: 'jul',
        date: '20',
        for: 'break fast',
        paidAmt: '500'
    }, {
        name: 'saran',
        month: 'jul',
        date: '20',
        for: 'lunch',
        paidAmt: '1500'
    },
    {
        name: 'sanjay',
        month: 'jul',
        date: '19',
        for: 'room rent',
        paidAmt: '5500'
    }, {
        name: 'saran',
        month: 'jul',
        date: '19',
        for: 'W***y',
        paidAmt: '3500'
    },
    {
        name: 'naveen',
        month: 'jul',
        date: '18',
        for: 'chicken',
        paidAmt: '400'
    },
    {
        name: 'gowtham',
        month: 'jul',
        date: '18',
        for: 'dinner',
        paidAmt: '400'
    },
    {
        name: 'gowtham',
        month: 'jul',
        date: '17',
        for: 'snacks',
        paidAmt: '400'
    },
    {
        name: 'naveen',
        month: 'jul',
        date: '17',
        for: 'juice',
        paidAmt: '400'
    }
]
const Groups = () => {
    const groups = [{ id: '1', name: 'kodaikanal dairy' }]
    const tabs = ['Settle Up', 'Balance', 'Total', 'Convert to USD',]
    const [createGroup, setCreateGroup] = useState(false)
    const [width, setWidth] = useState(0);
    const [group, setGroup] = useState('')
    const [tab, setTab] = useState<any>('Settle Up');
    const [open, setOpen] = useState(false)
    const [name, setName] = React.useState('0');
    const [spentFor, setSpendFor] = useState('Food')
    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };
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
            return <div className="relative h-[88%] w-full">
                <div className="sticky top-0 left-0 right-0">
                    <div className="flex items-center gap-3 px-3 py-2 bg-[#f0f2f5]" onClick={() => { }}>
                        <ArrowBackIcon className="block md:hidden" onClick={() => setGroup('')} />
                        <Avatar alt="Naveen" src={''} sx={{ width: "42px", height: "42px" }} />
                        <div>
                            <div>{groups?.find((ele) => ele?.id == group)?.name}</div>
                            <div className="text-sm text-[#667781]">4 members</div>
                        </div>
                    </div>
                    <Tabs
                        className="border-b border-slate-300"
                        value={tab}
                        onChange={(event: React.SyntheticEvent, newValue: any) => setTab(newValue)}
                        aria-label="basic tabs example"
                        sx={{ minWidth: '50px' }}
                    >
                        {tabs?.map((ele, index) => (
                            <Tab key={index} label={ele} value={ele} sx={{ minWidth: '45px' }} />
                        ))}
                    </Tabs>
                </div>
                <div className="h-[91%] overflow-y-scroll">
                    {handleTabContent()}
                    <Drawer
                        anchor={width >= 768 ? "right" : "bottom"}
                        open={open}
                        onClose={() => setOpen(false)}
                        className={`${width < 768 && 'rounded-tl-lg rounded-tr-lg'}`}
                    >
                        <div className={`p-4 ${width >= 768 && 'w-[500px]'} ${width < 768 && 'rounded-tl-lg rounded-tr-lg'}`}>
                            <div>Edit Split details</div>
                            <div>
                                <div>Paid by</div>
                                <div>
                                    <FormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={name}
                                            onChange={handleChange}
                                        >
                                            {['Sanjay', 'Saran', 'Gowtham', 'Naveen']?.map((ele, index) => {
                                                return (
                                                    <MenuItem key={index} value={index}>{ele}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div>
                                <div>Title</div>
                                <div><TextField value={spentFor} onChange={(evt) => setSpendFor(evt?.target.value)} fullWidth /></div>
                            </div>
                            <div>
                                <div>Date</div>
                                <input type="date" name="" id="" className=" rounded-[4px] w-full py-4 px-2" style={{borderColor: 'rgba(0, 0, 0, 0.23)',borderWidth:'1px'}} />
                            </div>
                            <div className="flex items-center mt-4 shadow-md">
                                <div className="text-red-500 text-lg w-[50%] text-center p-2">Cancel</div>
                                <div className="bg-blue-500 text-white text-lg w-[50%] text-center p-2">Save</div>
                            </div>
                        </div>
                    </Drawer>
                </div>
            </div>

        }
        else if (width <= 768 && groups?.length >= 1 && !createGroup) {
            return <div className={``}>{groupsList()}</div>
        }
        function handleTabContent() {
            if (tab == 'Settle Up') {
                return <div className="my-4">
                    <div className="text-sm font-semibold mx-4">July 2024</div>
                    <div className="">
                        {list?.map((ele, index) => {
                            return (
                                <div key={index} className={`hover:bg-[#f0f2f5] ${index == 0 && 'mt-2'} `}>
                                    <div className="flex justify-start py-3 mx-4">
                                        <div className="w-[10%] text-slate-500">
                                            <div className="capitalize">{ele?.month}</div>
                                            <div>{ele?.date}</div>
                                        </div>
                                        <div className="flex justify-between w-[90%]">
                                            <div>
                                                <div className="text-blue-500 font-semibold text-base capitalize">{ele?.for}</div>
                                                <div className="capitalize">{ele?.name} paid {ele?.paidAmt}</div>
                                            </div>
                                            <div>
                                                <div className="text-blue-500 cursor-pointer" onClick={() => setOpen(true)}>Edit</div>
                                                <div className="text-red-500 cursor-pointer">Delete</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-[10%]"></div>
                                        <div className="w-[90%] border-b border-slate-200 ml-4"></div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="h-20"></div>
                    </div>
                </div>
            }
            else if (tab == 'Balance') {
                return <div className="m-4">Balance</div>
            }
            else if (tab == 'Total') {
                return <div className="m-4">Total</div>
            }
            else if (tab == 'Convert to USD') {
                return <div className="m-4">Convert to USD</div>
            }
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
        <div className="h-screen w-full overflow-y-hidden">
            <Navbar />
            <div className="flex relative">
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