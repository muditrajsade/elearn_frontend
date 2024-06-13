

import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import { useEffect } from "react";
import { useState } from "react";
import myImage from './images/img_one.jpg';

import r_image from './images/img_two.jpg';

import z_image from './images/img_three.jpg';
function Home(){

    let [imgn,set_img_n] = useState(1);


    useEffect(function(){
        let img_interval;

        let f = "Hello Welcome To Elearn\nA Website For Wholesome Learning";
            let h = f.length;
            let v = 0;
            let e='';

            let k = setInterval(function(){

                if(v == f.length){
                
                    clearInterval(k);
                }
                else{
                

                    e+=f.charAt(v);
                    document.querySelector("#t").innerHTML = e;

                
                    v++;

                }

            },100);

        let target_element_one = document.querySelector("#starting_page");
        console.log(target_element_one);
        let g = new IntersectionObserver(function(entries){
            

            if(entries[0].isIntersecting){
                entries[0].target.querySelector("#text_card").classList.add("card_n");
            
                entries[0].target.querySelector("#pic_card").classList.add("blue-section_n");
                let ind=1;

                img_interval = setInterval(function(){
            
                    if(ind == 3){
                        ind=1;
                
                        set_img_n(1);
                    }
                    else{
                
                        set_img_n(ind+1);
                        ind++;
                    }
                },2000);
            }
            else{
                entries[0].target.querySelector("#text_card").classList.remove("card_n");
            
                entries[0].target.querySelector("#pic_card").classList.remove("blue-section_n");
                clearInterval(img_interval);

            }



        },{threshold:0.5});

        g.observe(target_element_one);

        

        return ()=>{
            clearInterval(img_interval);
        }

        
        
        

        




    },[])
    

        return (
            <div>
                <p id="t" className="text_color"></p>
                <div className="body" id="starting_page">
                

                    <div className="card" id="text_card">

                     <canvas id="canvas" />
 
                </div>
                <div className="blue-section" id="pic_card">

                {
                    imgn === 1 && (
                     <img src = {myImage} className="my-image"/>
                    )
                }
                {
                    imgn === 2 && (
                    <img src={r_image} className="my-image" />
                    )
                }

                {
                    imgn === 3 && (
                    <img src={z_image} className="my-image" />
                    )
                }
    
    
            </div>
        </div>

        <div className="body" >

            

        </div>
    </div>
        );

    
    
}

export default Home;