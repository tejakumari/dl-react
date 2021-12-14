import React from 'react'

const Contact = () => {
    return (
        <div>
            <div >
                <img style={{height:400}} className="w-screen" src="assests/gren.png" alt="logo"/>
                <div>
                <p className="text-white text-4xl font-bold -mt-96 flex ml-24">Have a Question?</p>
                <p className="text-white test-lg font-lg flex ml-24">we help you go further then you ever dreamed,24/7</p>
                </div>
                <div className="flex flex-row justify-center gap-48 mt-32">
                    <img className="h-16" src="assests/char.png" alt="logo"/>
                    <img className="h-16" src="assests/usss1.png" alt="logo"/>
                    <img className="h-16" src="assests/msg.png" alt="logo"/>
                    <img className="h-16" src="assests/chat.png" alt="logo"/>
                </div>
                <div className="flex flex-row gap-36 justify-center text-white">
                    <p>+91 9440462222<br/><span className="ml-12">India</span></p>
                    <p>+1 (469) 876-5365<br/><span className="ml-12">Usa</span></p>
                    <p>hello@digital-lync.com<br/><span className="ml-12">Email</span></p>
                    <p>live chat</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
