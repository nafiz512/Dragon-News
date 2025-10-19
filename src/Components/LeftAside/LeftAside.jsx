import React, { Suspense } from "react";

import Categories from "../Categories/Categories";

const LeftAside = () => {
    return (
        <div className=" w-full">
            <Suspense fallback={"loading"}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;
