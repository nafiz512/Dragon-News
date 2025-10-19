import React from "react";

const FindUsOn = () => {
    return (
        <div>
            <h1>Find Us On</h1>
            <div>
                {/* Email */}
                <button className="btn bg-white text-black border-[#e5e5e5] w-full">
                    <svg
                        aria-label="Email icon"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            fill="none"
                            stroke="black"
                        >
                            <rect
                                width="20"
                                height="16"
                                x="2"
                                y="4"
                                rx="2"
                            ></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    Login with Email
                </button>
                {/* Facebook */}
                <button className="btn bg-[#1A77F2] text-white border-[#005fd8] w-full">
                    <svg
                        aria-label="Facebook logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                    >
                        <path
                            fill="white"
                            d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                        ></path>
                    </svg>
                    Login with Facebook
                </button>

                {/* X */}
                <button className="btn bg-black text-white border-black w-full">
                    <svg
                        aria-label="X logo"
                        width="16"
                        height="12"
                        viewBox="0 0 300 271"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="currentColor"
                            d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
                        />
                    </svg>
                    Login with X
                </button>
            </div>
            <div></div>
        </div>
    );
};

export default FindUsOn;
