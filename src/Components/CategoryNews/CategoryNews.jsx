import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Category from "./Category";

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        if (id == 0) setNewsData(data);
        else if (id == 1) {
            const filterNews = data.filter(
                (news) => news.others.is_today_pick == true
            );
            setNewsData(filterNews);
        } else {
            const filterNews = data.filter((news) => news.category_id == id);
            setNewsData(filterNews);
        }
    }, [data, id]);

    return (
        <div>
            {newsData.map((news) => (
                <Category news={news}></Category>
            ))}
        </div>
    );
};

export default CategoryNews;
