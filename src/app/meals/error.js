"use client";

const Error = ({error}) => {
    return (
        <main className="error">
            <h1>Error happened</h1>
            <p>Failed to fetch meal data. Please try again later</p>
        </main>
    );
};

export default Error;