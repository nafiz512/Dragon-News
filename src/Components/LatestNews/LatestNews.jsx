import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Latest News</button>
            <Marquee pauseOnHover={true} speed={120}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    odio tempora voluptas eveniet voluptates, quis doloribus
                    odit repudiandae placeat vero, consectetur debitis
                    aspernatur fugiat laudantium reprehenderit excepturi aliquid
                    reiciendis facere laboriosam ea impedit itaque. Sit eveniet
                    odio quaerat maxime magni corporis voluptates ut fuga
                    veritatis iusto nisi quos perferendis vero, numquam quisquam
                    odit molestiae hic consequuntur illo vitae repudiandae atque
                    error eius rem! Cum consectetur asperiores veniam ab
                    nesciunt repellendus officia ipsum dignissimos, dolores
                    similique et ipsam quos reprehenderit eveniet eum a unde
                    cupiditate fugiat sapiente voluptas. Sequi ipsam impedit
                    explicabo tempora, molestias porro neque ea mollitia dolor
                    debitis voluptate.
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
