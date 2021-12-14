import React from 'react'

const Cards = () => {
    return (
        <>
        <div className="bg-gray-200 h-full mt-40">
            <div style={{ color: "#0D3900" }} className="flex justify-center text-2xl font-bold p-10">
                Which DevOps course is right for you?
            </div>
            <div style={{ color: "#515151" }} className="flex justify-center text-md font-lg -mt-8">
                Whether you develop or operate, we have a path for you.
            </div>
            <div className="flex flex-row">
                <div style={{height:350,width:300}} className="bg-white rounded-lg ml-64 mt-8">
                    <img className="h-1/2" src="assests/grb.png" alt="logo"/>
                    <img className="h-28 ml-24 -mt-10" src="assests/da.png" alt="logo"/>
                    <p style={{color:"#505050"}} className="text-xl font-semibold text-center">DevOps Architect</p>
                </div>
                <div style={{height:350,width:300}} className="bg-white rounded-lg ml-4 mt-10">
                    <img className="h-1/2" src="assests/grb.png" alt="logo"/>
                    <img className="h-28 ml-24 -mt-10" src="assests/dc.png" alt="logo"/>
                    <p style={{color:"#505050"}} className="text-xl font-semibold text-center">DevOps Engineer</p>
                </div>
                <div style={{height:350,width:300}} className="bg-white rounded-lg ml-4 mt-10">
                    <img className="h-1/2" src="assests/grb.png" alt="logo"/>
                    <img className="h-28 ml-24 -mt-10" src="assests/dc.png" alt="logo"/>
                    <p style={{color:"#505050"}} className="text-xl font-semibold text-center">DevOps Consultant</p>
                </div>
            </div>
            <div className="flex flex-row -mt-4 ">
            <div style={{height:350,width:300}} className="bg-white rounded-lg ml-96 mt-10">
                    <img className="h-1/2" src="assests/grb.png" alt="logo"/>
                    <img className="h-28 ml-24 -mt-10" src="assests/se.png" alt="logo"/>
                    <p style={{color:"#505050"}} className="text-xl font-semibold text-center">System Engineer</p>
                </div>
                <div style={{height:350,width:300}} className="bg-white rounded-lg ml-4 mt-10">
                    <img className="h-1/2" src="assests/grb.png" alt="logo"/>
                    <img className="h-28 ml-24 -mt-10" src="assests/sa.png" alt="logo"/>
                    <p style={{color:"#505050"}} className="text-xl font-semibold text-center ">System Administrator</p>
                </div>
            </div>
        </div>
        <div className=" bg-white">
                <img className="float-right mt-16" src="assests/steps.png" alt="logo"/>
                <div className="">
                <p style={{color:"#000000"}} className="text-4xl font-bold p-52 -ml-44">Upskill yourself with our<br/>Cloud & DevOps</p>
                <p style={{color:"#515151"}} className="text-md font-xl -mt-48 ml-8">Be one of the most-sought resource that companies <br/>with open-source oriented jobs are looking for.</p>
                </div>
        </div>
        </>
    );
};

export default Cards;
