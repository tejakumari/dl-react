import React from 'react'

const Cards2 = () => {
    return (
        <div style={{ backgroundColor: "#F6F6F6" }} className="h-screen mt-96">
            <div className="text-4xl font-bold flex justify-center p-16" style={{ color: "#434343" }}>
                Inspiring Student Stories.
            </div>
            <div className="flex flex-row">
                <div style={{ height: 300, width: 600 }} className="bg-white rounded-md ml-24">
                    <img className="h-36 ml-56 mt-2" src="assests/fem.png" alt="logo" />
                    <p className="text-green-600 text-2xl font-bold ">Kavya</p>
                    <p style={{ color: "#1D1D1D78" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
                        sed diam nonumy eirmod tempor invidunt ut labore et<br />
                        dolore magna aliquyam erat, sed diam voluptua. At<br />
                        vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
                <div style={{ height: 300, width: 600 }} className="bg-white rounded-md ">
                    <img className="h-36 ml-56 mt-2" src="assests/fem.png" alt="logo" />
                    <p className="text-green-600 text-2xl font-bold ">Kavya</p>
                    <p style={{ color: "#1D1D1D78" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
                        sed diam nonumy eirmod tempor invidunt ut labore et<br />
                        dolore magna aliquyam erat, sed diam voluptua. At<br />
                        vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>

            </div>
            <div style={{ height: 330, width: 600 }} className="bg-white rounded-md ml-96 relative bottom-80">
                <img className="h-36 ml-56 mt-2" src="assests/fem.png" alt="logo" />
                <p className="text-green-600 text-2xl font-bold ">Kavya</p>
                <p style={{ color: "#1D1D1D78" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
                    sed diam nonumy eirmod tempor invidunt ut labore et<br />
                    dolore magna aliquyam erat, sed diam voluptua. At<br />
                    vero eos et accusam et justo duo dolores et ea rebum.</p>
            </div>
            <div>
                    <img className="-mt-44 ml-96" src="assests/scrol.png" alt="logo" />
                </div>

        </div>
    );
};

export default Cards2;
