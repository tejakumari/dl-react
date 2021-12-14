import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="flex bg-white h-18 mt-5">
                <div>
                    <img className="mx-28 h-16" src="assests/dl.png" alt="logo" />
                </div>
                <div className="flex  gap-14 items-center mx-44">
                    <div className="flex">
                        Courses
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
                        stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        Programs
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
                        stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                    <div>
                        Projects
                    </div>
                    <div className="flex">
                        careerSupport
                    </div>
                    <div>
                        signin
                    </div>
                    <div>
                        <button className=" bg-green-500 w-40 rounded-full py-3 px-6 text-white float-left">GetSkilled</button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src="assests/main.png" alt="logo" />
                <div className=" absolute -mt-96  text-center ml-96">
                    <p style={{ color: "#0D3900" }} className="md:text-4xl sm:text-xl font-bold ">Better, Faster and Stronger with the<br /> Futuristic DevOps Careers</p>
                    <div style={{ color: "#0D3900" }} className="md:text-2xl sm:text-xs font-normal p-2 mt-4">
                        Get hold of the modern software development and operations approach which<br /> allows faster build of products and smarter maintenance of deployments.
                    </div>
                    <div >
                        <button className="bg-green-500 w-1/4 h-12 rounded-full text-white mt-4 " >Which career is right for me?</button>
                    </div>
                </div>
            </div>
            <div>
                <img  className="w-screen" style={{height:500}}   src="assests/map.png" alt="logo"/>
            </div>
            <div className="bg-white mt-24">
            <div><img className="ml-12 w-1/2" src="assests/dall.png" alt="logo" /></div>
            <div className="flex justify-center gap-5 float-right mr-96 -mt-80">
                <div class="border-r-4 h-16 border-green-600  "></div>
                <div className="font-bold text-2xl">
                    DevOps skills lead to<br /> Competitive Salaries
                </div>
            </div>
            <div style={{color:"#515151"}} className="text-lg font-lg -mt-64  float-right mx-80 p-4">
            On average, jobs with Salesforce skills<br/> pay around INR 36 LPA per year
            </div>

        </div>
              
        </div>
    );
};

export default Navbar;
