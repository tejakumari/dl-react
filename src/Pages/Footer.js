import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-gray-50">
            <footer class="possition-bottom top-24  relative bg-white">
                <div class="flex flex-row justify-around">
                    <div>
                        <ul>
                            <li> <img class="w-32 h-16 mb-4" src="assests/dl.png" alt="logo" /></li>
                            <li class="mb-4">Follow us on</li>
                            <li>
                                <ul >
                                    <li class="inline-block -ml-1 pr-3 text-3xl text-gray-900"><FiFacebook /></li>
                                    <li class="inline-block pr-3  text-3xl text-gray-900"><AiOutlineInstagram /></li>
                                    <li class="inline-block pr-3 text-3xl text-gray-900"><AiOutlineTwitter /></li>
                                    <li class="inline-block pr-3 text-3xl text-gray-900 "><RiLinkedinBoxFill /></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="-ml-32">
                            <li><h1 class="font-black text-lg">Digital Lync</h1></li>
                            <li class="">Signin/Signup</li>
                            <li>Course Support</li>
                            <li><button class="border-2 bg-white rounded-md text-center px-2">OnlinePay</button></li>

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h1 class="font-black text-lg">Courses</h1></li>
                            <li>FullStackDevelopement</li>
                            <li>Aws</li>
                            <li>Phyton</li>
                            <li>Devops</li>
                            <li>Angular</li>
                            <li>ReactJs</li>

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h1 class="font-black text-lg">Programs</h1></li>
                            <li>MeanStack</li>
                            <li>MernStack</li>
                            <li>Aws Cloud </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 ">
                <h1 class="text-center text-white border bg-black ">© Copyright Lync Digital School Pvt. Ltd | 2019 | Privacy Policy</h1>
                </div> 
            </footer>
        </div>
    );
};

export default Footer;
