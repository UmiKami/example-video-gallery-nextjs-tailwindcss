import React from "react";

const Page = () => {
    const videoList = [
        "/videos/video1.mp4",
        "/videos/video2.mp4",
        "/videos/video3.mp4",
        "/videos/video4.mp4",
        "/videos/video1.mp4",
        "/videos/video2.mp4",
        "/videos/video3.mp4",
        "/videos/video1.mp4",
        "/videos/video2.mp4",
        "/videos/video3.mp4",
        "/videos/video4.mp4",
        "/videos/video1.mp4",
        "/videos/video2.mp4"
     
    ];

    return (
        <div className="py-5 columns-1 sm:columns-2 lg-columns-3 xl:columns-4 gap-5 lg:gap-8 space-y-4 min-h-screen [&>div:not(:first-child)]:mt-5">
            {videoList.map((url, index) => (
                // Add the 'break-inside-avoid' utility to prevent breaking inside an element
                <div className="" key={index}>
                    <video controls>
                        <source src={url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
    );
};

export default Page;
