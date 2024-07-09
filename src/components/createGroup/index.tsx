import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from "@mui/material/Avatar";
import { TextField } from "@mui/material";
interface CreateGroupProps{
    handleBack: (back:boolean) => void;
}
const CreateGroup:React.FC<CreateGroupProps> = ({handleBack}) => {
    return (
        <div className="">
            <div className="flex gap-4">
                <div><ArrowBackIcon onClick={()=>{handleBack(false)}}/></div>
                <div>New Group</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Avatar alt={''} src={''} sx={{height:'200px',width:'200px',marginY:'20px'}} />
                <TextField id="standard-basic" label="Group name" variant="standard" fullWidth sx={{marginY:'20px'}}/>
                <TextField id="standard-basic" placeholder={'Describe your group. Include information to help people understand what your group is about.'} label="Group description" variant="standard" fullWidth multiline rows={4} InputLabelProps={{shrink:true ,sx: {padding: '8px 8px'}}} InputProps={{ disableUnderline: true, }} sx={{backgroundColor:'#f0f2f5' , padding:'10px' , margin:'10px',marginY:'20px'}} />
                <div className="px-7 py-2 text-base hover:bg-blue-500 bg-[#f0f2f5] hover:text-white text-blue-500 rounded-full">Create group</div>
            </div>
        </div>
    )
}

export default CreateGroup;