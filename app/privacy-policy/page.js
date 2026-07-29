"use client";

import React, { useCallback, useMemo, useState } from 'react';

// const faqData = [
//     {
//         question: "What information do we collect?",
//         answer: "We may collect personal information such as your name and email address when you contact us. We also collect non-personal information such as browser type and website usage.",
//     },
//     {
//         question: "How do we use your information?",
//         answer: "Your information is used to improve our website, respond to inquiries, and comply with legal requirements. We never sell or share your personal information with third parties without consent.",
//     },
//     {
//         question: "Do we use cookies?",
//         answer: "We use cookies to improve user experience. You can disable cookies in your browser settings, but some parts of the website may not function properly.",
//     },

// ]

const PrivacyPolicy = () => {
    const [filter, setFilter] = useState("All");

    // const [opneIndex, setOpneIndex] = useState([]);

    // const handleToggle = useCallback((index) => {
    //     setOpneIndex(prev =>
    //         prev.includes(index) ?
    //             prev.filter(i => i !== index) :
    //             [...prev, index]
    //     )
    // }, []);

    // const allOpne = useMemo(() => opneIndex.length === faqData.length, [opneIndex]);
    return (
        <>
            <Filters
                filters={["All", "Open", "Closed"]}
                activeFilter={filter}
                onChange={setFilter}
            />
            <Results
                activeFilter={filter}
            />
        </>
        // <div>
        //     <h2>FAQ</h2>
        //     <button onClick={() => setOpneIndex(opneIndex.length === faqData.length ? [] : faqData.map((_, i) => i))}>{allOpne ? "Close All" : "Open All"}</button>

        //     <ul>
        //         {faqData.map((item, index) => (
        //             <li key={index}>
        //                 <strong onClick={() => handleToggle(index)}>{item.question}</strong>
        //                 {opneIndex.includes(index) && <p>{item.answer}</p>}
        //             </li>
        //         ))}
        //     </ul>
        //     <p>{allOpne ? "All FAQ's are open" : "Not all open"}</p>
        // </div>
        // <div className="max-w-4xl mx-auto p-6 my-12">
        //     <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        //     <p className="mb-4">
        //         Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
        //     </p>
        //     <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        //     <p className="mb-4">
        //         We may collect personal information such as your name and email address when you contact us. We also collect non-personal information such as browser type and website usage.
        //     </p>
        //     <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        //     <p className="mb-4">
        //         Your information is used to improve our website, respond to inquiries, and comply with legal requirements. We never sell or share your personal information with third parties without consent.
        //     </p>
        //     <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
        //     <p className="mb-4">
        //         We use cookies to improve user experience. You can disable cookies in your browser settings, but some parts of the website may not function properly.
        //     </p>
        //     <p className="mt-6">
        //         Last updated: 17 September 2025
        //     </p>
        // </div>
    );
};

export default PrivacyPolicy;

const FilterTab = ({ lable, onSelect, active }) => {



    return (
        <button style={{
            fontWeight: active ? 'bold' : 'normal'
            ,
            color: lable === "All" ? (active ? "blue" : "gray") : lable === "Open" ? (active ? "green" : "gray") : (active ? "red" : "gray")
        }}
            onClick={() => onSelect(lable)} >
            {lable}
        </button >
    );
}

const Filters = ({ filters, activeFilter, onChange }) => {

    return (
        <div className='flex justify-evenly mb-5'>
            {
                filters.map((f => (
                    <FilterTab
                        key={f}
                        lable={f}
                        active={f === activeFilter}
                        onSelect={onChange}
                    />
                )))
            }
        </div>
    )
}

const Results = ({ activeFilter }) => {
    return <div>Shwoing resluts for: <span style={activeFilter === "All" ? { color: "blue" } : activeFilter === "Open" ? { color: "green" } : { color: "red" }}>{activeFilter}</span></div>;
}



