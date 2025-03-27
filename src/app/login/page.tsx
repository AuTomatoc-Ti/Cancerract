"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import icon from "./cancerract.png";

export default function Login() {
    const router = useRouter();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {
        console.log("a:\t", account);
        console.log("p:\t", password);
        if (account == "cancerract" && password == "1234") {
            console.log("correct combination");
            router.push("/home");
        }
    }

    return (
        <div className='flex justify-center '>
            <div className='absolute flex-col justify-center top-15 w-95 rounded-lg bg-green-word'>
                <Image className='rounded p-3 'alt="icon" src={icon} height={384} width={512} />
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8 center'>
                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl dark:text-white'>
                        Cancerract
                    </h1>
                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                        登入
                    </h1>
                    <div>
                        <label
                            htmlFor='ageInputId'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            您的電郵 或 帳號
                        </label>
                        <input
                            name='account'
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='name@abc.com'
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='password'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            密碼
                        </label>
                        <input
                            type='password'
                            placeholder='••••••••'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        />
                    </div>

                    <button
                        type='submit'
                        onClick={handleSubmit}
                        className='w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                        登入
                    </button>
                </div>
            </div>
        </div>
    );
}
