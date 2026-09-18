"use client";
import React, { useEffect, useState } from "react";

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

function yesWord(percentage: number) {
    const v = parseFloat(String(percentage + Math.random() * 5)).toFixed(2);
    return (
        <div className='flex-col justify-center top-15 w-95 rounded-lg mb-5'>
            <div className=' bg-red-500 align-middle text-center rounded'>
                這圖片有 <h3>{v}％</h3> 機會是皮膚癌
                <div className='font-bold align-middle '>請盡快約見醫生！</div>
            </div>
        </div>
    );
}
function likelyNoWord(percentage: number) {
    const v = parseFloat(String(percentage + Math.random() * 5)).toFixed(2);
    return (
        <div className=' flex-col justify-center top-15 w-95 rounded-lg mb-5'>
            <div className=' bg-blue-500 align-middle text-center rounded'>
                這圖片有 <h3>{v}％</h3> 機會是皮膚癌
                <div className='text-m'>請放心!</div>
            </div>
        </div>
    );
}

function noWord(percentage: number) {
    const v = parseFloat(String(percentage + Math.random() * 5)).toFixed(2);
    return (
        <div className='flex-col justify-center top-15 w-95 rounded-lg mb-5'>
            <div className=' bg-blue-500 align-middle text-center rounded'>
                這圖片只有 <h3>{v}％</h3> 機會是皮膚癌
                <div className='text-m font-bold'>請放心!</div>
            </div>
        </div>
    );
}


function YespageContent() {
    const router = useRouter();
    const para = useGetAllSearchParams();
    const submittedName = para.name;
    /* Derived from the file name instead of state: calling setState during render
       (unguarded) made React throw "Too many re-renders", which crashed this page. */
    const percentage = submittedName == "a.png" ? 90 : submittedName == "b.png" ? 20 : 0;
    /* The result depends on ?name=, which a static export cannot know when it
       prerenders this page, so render the panel only after mounting - otherwise
       hydration fails against the prerendered "0 percent" HTML. */
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    

    function handleSubmit() {
        router.push("/home");
    }

    let word: React.ReactNode = ''
    if (mounted) {
        if (percentage == 90) {
            word = yesWord(percentage)
        }else if (percentage == 20){
            word = likelyNoWord(percentage)
        }else if (percentage == 0){
            word = noWord(percentage)
        }
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

export default function Yespage() {
    return (
        <React.Suspense fallback={null}>
            <YespageContent />
        </React.Suspense>
    );
}
