import React, { useState } from 'react';
import { Mail, Lock, ShieldCheck, Eye, EyeOff, User, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-tup-navy">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-tup-green/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tup-green/10 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-[400px] px-6 py-12 m-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-handbook shadow-2xl flex flex-col items-center">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-tup-green rounded-2xl shadow-lg shadow-tup-green/30">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Handybook</h1>
          <p className="text-white/60 text-sm font-medium mt-1 uppercase">Digital Student Handbook</p>
        </div>

        <form className="w-full space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1">Student ID / Email</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-tup-green transition-colors" size={20} />
              <input type="text" placeholder="e.g. TUPM-21-0000" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:ring-2 focus:ring-tup-green/30 transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-tup-green transition-colors" size={20} />
              <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:ring-2 focus:ring-tup-green/30 transition-all" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* DEMO BUTTONS */}
          <div className="space-y-3 pt-4">
            <button type="button" onClick={handleStudentLogin} className="w-full bg-tup-green text-white py-4 rounded-2xl font-black shadow-lg shadow-tup-green/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Sign In as Student <User size={20} />
            </button>
            <button type="button" onClick={handleAdminLogin} className="w-full bg-white/10 text-white border border-white/20 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Sign In as Admin <ShieldAlert size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;