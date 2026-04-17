import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ShieldCheck, Eye, EyeOff, User, ShieldAlert } from 'lucide-react';

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
    <div className="min-h-screen flex font-sans bg-white">
      
      {/* BEGIN: Left Side - Branding */}
      <div className="hidden lg:flex w-1/2 bg-handy-dark-red p-12 flex-col justify-between relative overflow-hidden">
        
        {/* Abstract Background Design Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-white text-handy-dark-red rounded-2xl flex items-center justify-center font-extrabold text-xl mb-8 shadow-xl">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            TUP Manila <br/> Handybook.
          </h1>
          <p className="text-red-100 text-lg max-w-md leading-relaxed font-medium">
            Your centralized digital guide to university policies, campus facilities, and student services.
          </p>
        </div>

        <div className="relative z-10">
          <p className="text-red-200 text-sm font-bold tracking-wider uppercase">
            © 2026 Technological University of the Philippines.
          </p>
        </div>
      </div>
      {/* END: Left Side */}

      {/* BEGIN: Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 bg-slate-50 relative">
        
        <div className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 relative z-10">
          
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Welcome back</h2>
            <p className="text-slate-500 font-medium">Please enter your credentials to continue.</p>
          </div>

          <div className="space-y-5">
            
            {/* Student ID / Email Input */}
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                Student ID / Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-handy-dark-red transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="e.g. TUPM-21-0000" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-700 outline-none focus:ring-2 focus:ring-handy-dark-red/30 focus:border-handy-dark-red transition-all font-medium placeholder:font-normal" 
                />
              </div>
            </div>

            {/* Password Input with Toggle */}
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-handy-dark-red transition-colors" size={20} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-12 text-slate-700 outline-none focus:ring-2 focus:ring-handy-dark-red/30 focus:border-handy-dark-red transition-all font-medium placeholder:font-normal" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-handy-dark-red transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-[11px] font-bold text-handy-dark-red hover:text-red-900 cursor-pointer transition-colors">
                  Forgot password?
                </span>
              </div>
            </div>

            {/* DEMO BUTTONS */}
            <div className="space-y-3 pt-4">
              <button 
                type="button" 
                onClick={handleStudentLogin} 
                className="w-full bg-handy-dark-red text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 hover:bg-red-900 active:scale-[0.98] transition-all"
              >
                Sign In as Student <User size={18} />
              </button>
              
              <button 
                type="button" 
                onClick={handleAdminLogin} 
                className="w-full bg-white text-slate-600 border-2 border-slate-200 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:border-handy-dark-red hover:text-handy-dark-red active:scale-[0.98] transition-all"
              >
                Sign In as Admin <ShieldAlert size={18} />
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