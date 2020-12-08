import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import Google from '../assets/Google.svg';
import Fb from '../assets/Fb.svg';
import Responsive from '../HOC/responsive';

const Login = () => {
  const [email, setEmail] = useState('');

  const handlerChangeInput = (event) => {
    if (event.target.value.trim()) {
      setEmail(event.target.value);
    }
  };

  return (
    <Responsive>
      <div className="flex justify-center bg-indigo-900">
        <div className="my-auto">
          <img className="mx-auto mb-10" src={logo} alt="logo" />
          <div className="container mx-auto bg-white border rounded-4xl w-96">
            <div className="text-xl text-indigo-900 font-semibold pt-10 pb-5 font-mono font-semibold">
              Login to your account
            </div>
            <form className="grid grid-cols gap-2">
              <input value={email} onChange={handlerChangeInput} type="text" placeholder="Your email" className="border rounded-3xl bg-grey-100 py-2 px-5 w-80 block mx-auto" />
              <button type="submit" className="block mx-auto bg-green-200 border w-80 rounded-2xl px-10 py-2">
                <span className="text-white font-mono font-semibold text-sm">Continue</span>
              </button>
            </form>
            <div className="uppercase text-xs text-gray-500 my-5">
              or
            </div>
            <div className="grid grid-cols mx-auto gap-2 border-b pb-3 w-80">
              <button type="submit" className="block flex justify-center flex-1 mx-auto border rounded-2xl w-80 px-10 py-2 font-semibold text-gray-500">
                <img className="mt-1 mx-3" src={Google} alt="Google" />
                <span className="font-mono font-semibold text-sm">Continue with Google</span>
              </button>
              <button type="submit" className="block flex flex-1 justify-center mx-auto border rounded-2xl w-80 px-10 py-2 font-semibold text-gray-500">
                <img className="mt-1 mx-3" src={Fb} alt="Fb" />
                <span className="font-mono font-semibold text-sm">Continue with Facebook</span>
              </button>
            </div>
            <div className="flex flex-1 text-green-200 justify-center my-5">
              <p>Can’t login?</p>
              <p className="mx-3">&bull;</p>
              <p>Sign up for new user?</p>
            </div>
          </div>
          <div className="mx-auto flex flex-1 justify-center text-white text-sm w-96 my-5">
            <p>Privacy policy</p>
            <p className="mx-3">&bull;</p>
            <p>Terms of use</p>
          </div>
        </div>
      </div>
    </Responsive>
  );
};

export default React.memo(Login);
