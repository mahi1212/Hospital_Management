import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
const AddDept = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; 

  console.log(watch("example"));
  return (
        <Box sx={{ background: '#fff' }} style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}>

    <form onSubmit={handleSubmit(onSubmit)}>
    <Box className='appointment'>
             <h3>Add Department</h3>
            <Grid container spacing={2}style={{padding: "4px"}}>
                   <Grid item xs={12} md={4} style={{'margin-top': "3%",fontSize: '1.1rem',fontWeight:"bold"}}>
                      <label >Department Name</label>
                   </Grid>
                 <Grid item xs={12} md={8}  >
                    <input 
                     style={{
                        width:"80%",
                   borderRadius: '5px',
                   boxShadow:" 0px 2px 0px 2px #EFD3E5"
                 }}
                 {...register("deptName", { required: true,maxLength: 15,pattern: /^[A-Za-z]+$/i})}/>
                         {errors?.deptName?.type === "required" && <p>This field is required</p>}
                         {errors?.deptName?.type === "maxLength" && (
                           <p>Department name cannot exceed 15 characters</p>
                         )}
                         {errors?.deptName?.type === "pattern" && (
                           <p>Alphabetical characters only</p>
                         )}
                 </Grid>
            </Grid>
           <Grid container spacing={2}>
                   <Grid item xs={12} md={4}  style={{'margin-top': "3%",fontSize: '1.1rem',fontWeight:"bold"}}>
                     <label>Department Description</label>
                   </Grid>
                <Grid item xs={12} md={8}  >
                    <input 
                    style={{
                             width:"80%",
                            height:"200px",
                        borderRadius: '5px',
                        boxShadow:" 0px 2px 0px 2px #EFD3E5"

                      }}
                    {...register("deptDescription", {required: true,pattern: /^[A-Za-z]+$/i})}/>
    
                         {errors?.deptDescription?.type === "required" && <p>This field is required</p>}
                         {errors?.deptDescription?.type === "pattern" && (
                           <p>Alphabetical characters only</p>
                         )}
                </Grid>
         </Grid>
     </Box>
           <input style={{
                 background: "#CD67A8",
                 'margin-bottom': "4%",
                 'margin-top': "5%",
                 padding: '1rem 4rem',
                 fontSize: '1rem',
                 fontWeight:"bold",
                 borderRadius: '5px',
                 border:"none",
                 fontFamily:"Lucida Console"
               }}
                 type="submit" />
             </form>
  </Box>
);
}

export default AddDept;