// Video_upload.js
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './video_upload.css';
import { Box, Grid } from "@mui/material";

function Video_upload(){

    let [p] = useSearchParams();
    let [nm,set_nm] = useState(p.get('full_name'));

    let [video,set_video] = useState(null);
    let [thumbnail,set_thumbnail] = useState(null);

    let [tittle,set_tittle] = useState('');

    console.log(nm);

   
    let act = "http://localhost:8000/upload/" + encodeURI(nm);

    let submit_form = async (e)=>{

        e.preventDefault();
        let f = new FormData();
        f.append("videofile",video);
        f.append("thumbnail",thumbnail);
        act = act +"/" + encodeURI(tittle);

        let response = await axios.post(act,f,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response);


    }

    

    

    


    return (
        <div className="container" style={{backgroundColor: 'rgba(0, 0, 0, 0.0470588)', padding: '40px 0'}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className="title" style={{fontSize: '48px', fontWeight: 'bold', color: '#333', marginBottom: '20px', textAlign: 'left'}}>eLearn Upload Video</div>
                </Grid>
                <Grid item xs={8}>
                    <hr style={{border: '1px solid #ccc', marginBottom: '20px'}} />
                    <Box>
                        <form onSubmit={submit_form}>
                            <div className="form-group">
                                <label for="title">Choose a title</label>
                                <input type="text" onChange={(e)=>{set_tittle(e.target.value)}} style={{width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '18px'}} />
                            </div>
                            <div className="form-group">
                                <label for="videoUpload">Choose a video file:</label>
                                <input type="file" id="file" name="videofile" onChange={(e)=>{set_video(e.target.files[0])}} style={{width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '18px'}}/>
                            </div>
                            <div className="form-group">
                                <label for="thumbnailUpload">Choose a Thumbnail file</label>
                                <input type="file" id="image_file" name="thumbnail" onChange={(e)=>{set_thumbnail(e.target.files[0])}} style={{width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '18px'}}/>
                            </div>
                            <input type="submit" value="Upload Video" style={{backgroundColor: '#4CAF50', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '18px'}} />
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Video_upload;