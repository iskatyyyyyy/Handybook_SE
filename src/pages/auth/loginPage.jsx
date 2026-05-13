import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ShieldAlert } from 'lucide-react';

// Imported Assets
import loginIllustration from '../../assets/images/rafiki.svg';
import handybookLogo from '../../assets/images/Handybook-Logo1.svg';
import tupLogo from '../../assets/images/tupLogo.svg';
import handybookLogoExtd from '../../assets/images/Group_44.svg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // DEMO HANDLERS 
  const handleStudentLogin = (e) => {
    e.preventDefault();
    navigate('/home'); 
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate('/admin/analytics'); 
  };

  return (
    // Main container now uses the dark red background
    <div className="min-h-screen flex font-sans bg-handy-dark-red overflow-hidden">
      
      {/* BEGIN: Left Side - White Panel */}
      <div className="hidden lg:flex w-1/2 bg-white p-12 flex-col justify-center items-center relative rounded-r-[2.5rem] shadow-[10px_0_30px_rgba(0,0,0,0.1)] z-10">
        
        {/* Top Left Logo */}
        <div className="absolute top-10 left-10">
          <img src={handybookLogoExtd} alt="Handybook Logo" className="h-14 object-contain" />
        </div>

        {/* Center Illustration */}
        <img 
          src={loginIllustration} 
          alt="Students exploring campus" 
          className="w-full max-w-[400px] mb-12 object-contain"
        />

        {/* Typography */}
        <h2 className="text-2xl xl:text-3xl font-extrabold text-slate-900 max-w-lg text-center leading-snug">
          The TUP-Manila centralized digital guide to <span className="text-handy-dark-red">university policies, campus facilities, and student services.</span>
        </h2>
      </div>
      {/* END: Left Side */}

      {/* BEGIN: Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative">
        
        {/* White Login Card */}
        <div className="w-full max-w-md bg-white p-10 sm:p-12 rounded-[2rem] shadow-2xl relative z-10">
          
          {/* Card Header & TUP Logo */}
          <div className="mb-8 text-center flex flex-col items-center">
            <img src={tupLogo} alt="TUP Logo" className="h-[72px] w-[72px] mb-6 object-contain" />
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">Welcome Back!</h2>
            <p className="text-slate-500 font-medium text-[13px]">Please enter your TUP Manila credentials to continue</p>
          </div>

          <div className="space-y-5">
            
            {/* Student ID Input */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-extrabold text-slate-900 ml-1">
                Student ID
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-handy-dark-red transition-colors" size={16} />
                <input 
                  type="text" 
                  placeholder="e.g TUP-21-0000" 
                  className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-10 pr-4 text-slate-700 outline-none focus:ring-2 focus:ring-handy-dark-red/30 focus:border-handy-dark-red transition-all text-sm font-medium placeholder:font-normal placeholder:text-slate-400" 
                />
              </div>
            </div>

            {/* Password Input with Toggle */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-extrabold text-slate-900 ml-1">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-handy-dark-red transition-colors" size={16} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-10 pr-10 text-slate-700 outline-none focus:ring-2 focus:ring-handy-dark-red/30 focus:border-handy-dark-red transition-all text-sm font-medium placeholder:font-normal placeholder:text-slate-400" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-handy-dark-red transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="flex justify-start mt-1.5">
                <span className="text-[10px] font-extrabold text-handy-dark-red hover:text-red-900 cursor-pointer transition-colors ml-1">
                  Forgot password?
                </span>
              </div>
            </div>

            {/* DEMO BUTTONS */}
            <div className="space-y-3 pt-6">
              {/* Main Sign In (Student) */}
              <button 
                type="button" 
                onClick={handleStudentLogin} 
                className="w-full bg-[#8A1515] text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:bg-[#6e1010] active:scale-[0.98] transition-all"
              >
                Sign in
              </button>
              
              {/* Secondary Admin Login */}
              <button 
                type="button" 
                onClick={handleAdminLogin} 
                className="w-full bg-white text-slate-500 border border-slate-200 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:border-handy-dark-red hover:text-handy-dark-red active:scale-[0.98] transition-all"
              >
                Sign in as Admin <ShieldAlert size={14} />
              </button>
            </div>
          </div>

        </div>
      </div>
      {/* END: Right Side */}

    </div>
  );
};

export default LoginPage;