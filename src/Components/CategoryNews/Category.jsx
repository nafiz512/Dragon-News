import React, { useState } from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const Category = ({ news }) => {
    const [detailsShow, setDetails] = useState(false);
    const {
        title,
        author,
        published_date,
        thumbnail_url,
        details,
        rating,
        total_view,
        tags,
    } = news;
    // Format date nicely
    const formattedDate = new Date(author.published_date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-md border border-gray-200">
                {/* Author Header */}
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={author.img} alt={author.name} />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold text-sm">
                                {author.name}
                            </h2>
                            <p className="text-xs text-gray-500">
                                {formattedDate}
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-ghost btn-sm">
                            <FaRegBookmark
                                className="text-gray-500"
                                size={18}
                            />
                        </button>
                        <button className="btn btn-ghost btn-sm">
                            <FaShareAlt className="text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Title */}
                <div className="px-4">
                    <h2 className="font-bold text-lg leading-snug mb-3">
                        {title}
                    </h2>
                </div>

                {/* Image */}
                <figure className="px-4">
                    <img
                        onClick={() => setDetails(false)}
                        src={thumbnail_url}
                        alt={title}
                        className="rounded-md w-full object-cover"
                    />
                </figure>

                {/* Details */}
                <div className="p-4">
                    {detailsShow ? (
                        <p>{details}</p>
                    ) : (
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {details.slice(0, 200)}...
                            <span
                                onClick={() => setDetails(true)}
                                className="text-primary font-medium cursor-pointer hover:underline ml-1"
                            >
                                Read More
                            </span>
                        </p>
                    )}
                    {/* Tags */}
                    <div className="text-xs text-gray-500 mb-3">
                        <strong>Tags:</strong> {tags.join(", ")}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center border-t pt-3">
                        <div className="flex items-center gap-1 text-warning">
                            <FaStar />
                            <span className="font-medium text-gray-700">
                                {rating.number.toFixed(1)}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <FaEye />
                            <span>{total_view}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
