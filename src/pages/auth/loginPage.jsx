import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, we just navigate to home
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-tup-navy">
      
      {/* 1. CINEMATIC BACKGROUND ELEMENTS */}
      {/* These circles create the "blobs" that look great through glass */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-tup-green/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tup-green/10 rounded-full blur-[100px]" />

      {/* 2. THE GLASS CARD */}
      <div className="relative z-10 w-full max-w-[400px] px-6 py-12 m-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-handbook shadow-2xl flex flex-col items-center">
        
        {/* Logo & Branding */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-tup-green rounded-2xl shadow-lg shadow-tup-green/30">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Handybook</h1>
          <p className="text-white/60 text-sm font-medium mt-1">Digital Student Handbook</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full space-y-5">
          
          {/* Email/ID Input */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1">Student ID / Email</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-tup-green transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="e.g. TUPM-21-0000"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-tup-green/30 focus:border-tup-green/50 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-tup-green transition-colors" size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 outline-none focus:ring-2 focus:ring-tup-green/30 focus:border-tup-green/50 transition-all"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-transparent accent-tup-green" />
              <span className="text-xs text-white/60 font-medium">Remember me</span>
            </label>
            <button type="button" className="text-xs text-tup-green font-bold hover:underline">Forgot Password?</button>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-tup-green text-white py-4 rounded-2xl font-black shadow-lg shadow-tup-green/20 flex items-center justify-center gap-2 mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Sign In <ArrowRight size={20} />
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-xs text-white/40">
          Don't have an account? <button className="text-white font-bold hover:text-tup-green transition-colors">Contact Registrar</button>
        </p>
      </div>

      {/* 3. SUBTLE TUP MOTTO (Optional Visual) */}
      <div className="absolute bottom-8 text-center opacity-20 pointer-events-none">
        <p className="text-[10px] text-white font-black tracking-[0.3em] uppercase">Technological University of the Philippines</p>
      </div>
    </div>
  );
};

export default LoginPage;