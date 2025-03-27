"use client";
import React, { useState } from "react";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function useGetAllSearchParams() {
    const searchParams = useSearchParams();
    const params: { [anyProp: string]: string } = {};

    searchParams.forEach((value, key) => {
        params[key] = value;
    });

    return params;
}

function yesWord(percentage) {
    const v = parseFloat(percentage + Math.random() * 5).toFixed(2);
    return (
        <div className='flex-col justify-center top-15 w-95 rounded-lg mb-5'>
            <div className=' bg-red-500 align-middle text-center rounded'>
                這圖片有 <h3>{v}％</h3> 機會是皮膚癌
                <div className='font-bold align-middle '>請盡快約見醫生！</div>
            </div>
        </div>
    );
}
function likelyNoWord(percentage) {
    const v = parseFloat(percentage + Math.random() * 5).toFixed(2);
    return (
        <div className=' flex-col justify-center top-15 w-95 rounded-lg mb-5'>
            <div className=' bg-green-500 align-middle text-center rounded'>
                這圖片有 <h3>{v}％</h3> 機會是皮膚癌
                <div className='text-m'>請放心!</div>
            </div>
        </div>
    );
}

function noWord(percentage) {
    const v = parseFloat(percentage + Math.random() * 5).toFixed(2);
    return (
        <div className='flex-col justify-center top-15 w-95 rounded-lg mb-5'>
            <div className=' bg-cyan-500 align-middle text-center rounded'>
                這圖片只有 <h3>{v}％</h3> 機會是皮膚癌
                <div className='text-m font-bold'>請放心!</div>
            </div>
        </div>
    );
}


export default function Yespage() {
    const [percentage, setPercentage] = useState(0);
    const router = useRouter();
    const para = useGetAllSearchParams();
    const submittedName = para.name;
    const submittedImg = para.image;
    if (submittedName == "a.png") setPercentage(90);
    if (submittedName == "b.png") setPercentage(20);
    if (submittedName == "c.png") setPercentage(0);

    

    function handleSubmit() {
        router.push("/home");
    }

    let word = ''
    if (percentage == 90) {
        word = yesWord(percentage)
    }else if (percentage == 20){
        word = likelyNoWord(percentage)
    }else if (percentage == 0){
        word = noWord(percentage)
    }

    return (
        <div className='app flex flex-col md:mt-0'>
            {word}
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-50 rounded'
                onClick={handleSubmit}
            >
                確定
            </button>
        </div>
    );
}
