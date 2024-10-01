'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Page = () => {
  const router = useRouter();
  const token = Cookies.get('token'); 
const [store, setStore] = useState(false)

  const handleLogin =  (e: React.FormEvent) => {
    e.preventDefault()
    const fakeToken = 'loginToken'
    document.cookie = `token=${fakeToken}`
    setTimeout(()=> {
        setStore(true)

    },200)
    
  } 
  
  useEffect(() => {
    if (token) {
        router.push('/Dashboard/orders'); 
      }
  }, [ router ,token]);

  return (
    <div className="bg-dark min-h-screen">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-main">
            <h2 className="text-body text-center text-4xl font-bold">Log In</h2>
            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              <div>
                <label className="text-body text-sm mb-2 block text-center">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    defaultValue={"admin@admin.com"}
                    className="w-full text-lightDark text-sm border border-gray-300 px-4 py-3 rounded-pixel outline-none"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div>
                <label className="text-body text-sm mb-2 block text-center">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    defaultValue={"admin@admin.com"}
                    className="w-full text-lightDark text-sm border border-gray-300 px-4 py-3 rounded-pixel outline-none"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm text-white bg-lightDark hover:bg-dark focus:outline-none rounded-pixel"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
