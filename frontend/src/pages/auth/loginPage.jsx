import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react'; // Removed ShieldAlert
import { supabase } from '../../lib/supabase';

// Imported Assets
import loginIllustration from '../../assets/images/rafiki.svg';
import handybookLogo from '../../assets/images/Handybook-Logo1.svg';
import tupLogo from '../../assets/images/tupLogo.svg';
import handybookLogoExtd from '../../assets/images/Group_44.svg';

const LoginPage = () => {
  const navigate = useNavigate();
  
  // UI States
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form Data States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // REAL SUPABASE HANDLER WITH ROLE-BASED ROUTING
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      if (isLogin) {
        // --- SIGN IN LOGIC ---
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });

        if (authError) throw authError;

        // Fetch the user's profile to check their role
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', authData.user.id)
          .single();

        if (profileError) throw profileError;

        // Route them based on their secure database role
        if (profileData.role === 'admin') {
          navigate('/admin/analytics');
        } else {
          navigate('/home'); 
        }

      } else {
        // --- SIGN UP LOGIC ---
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              first_name: firstName,
              last_name: lastName,
              role: 'user' // Default role for new signups
            }
          }
        });

        if (error) throw error;

        if (!data.session) {
          alert("Account created! Please check your email to verify your account before logging in.");
          setIsLogin(true);
          setPassword(""); 
        } else {
          // New signups are always normal users, route to home
          navigate('/home');
        }
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex font-sans bg-handy-dark-red overflow-hidden">
      
      {/* BEGIN: Left Side - White Panel */}
      <div className="hidden lg:flex w-1/2 h-full bg-white p-8 xl:p-12 flex-col justify-center items-center relative rounded-r-[2.5rem] shadow-[10px_0_30px_rgba(0,0,0,0.1)] z-10">
        <div className="absolute top-8 left-8 xl:top-10 xl:left-10">
          <img src={handybookLogoExtd} alt="Handybook Logo" className="h-10 xl:h-12 object-contain" />
        </div>
        <img 
          src={loginIllustration} 
          alt="Students exploring campus" 
          className="w-full max-w-[380px] xl:max-w-[420px] max-h-[45vh] mb-8 xl:mb-10 object-contain"
        />
        <h2 className="text-xl xl:text-2xl font-extrabold text-slate-900 max-w-md text-center leading-snug">
          The TUP-Manila centralized digital guide to <span className="text-handy-dark-red">university policies, campus facilities, and student services.</span>
        </h2>
      </div>
      {/* END: Left Side */}

      {/* BEGIN: Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-6 sm:p-8 relative">
        <div className="w-full max-w-md max-h-full overflow-y-auto custom-scrollbar bg-white p-8 sm:p-10 rounded-[2rem] shadow-2xl relative z-10 transition-all duration-300">
          
          {/* Card Header & TUP Logo */}
          <div className="mb-8 text-center flex flex-col items-center">
            <img src={tupLogo} alt="TUP Logo" className="h-[64px] w-[64px] mb-5 object-contain" />
            <h2 className="text-2xl font-extrabold text-slate-900 mb-1.5 tracking-tight">
              {isLogin ? "Welcome Back!" : "Create an Account"}
            </h2>
            <p className="text-slate-500 font-medium text-[13px]">
              {isLogin ? "Please enter your credentials to continue" : "Enter your details to get started"}
            </p>
          </div>

          {/* Error Message Display */}
          {errorMessage && (
            <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 text-[12px] font-bold rounded-lg text-center">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Conditional Fields: Only show Names if Signing Up */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-extrabold text-slate-900 ml-1">First Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-handy-dark-red transition-colors" size={16} />
                    <input 
                      type="text" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Juan" 
                      required={!isLogin}
                      className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-10 pr-4 text-slate-700 outline-none focus:ring-2 focus:ring-handy-dark-red/30 focus:border-handy-dark-red transition-all text-sm font-medium placeholder:font-normal placeholder:text-slate-400" 
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-extrabold text-slate-900 ml-1">Last Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-handy-dark-red transition-colors" size={16} />
                    <input 
                      type="text" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Dela Cruz" 
                      required={!isLogin}
                      className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-10 pr-4 text-slate-700 outline-none focus:ring-2 focus:ring-handy-dark-red/30 focus:border-handy-dark-red transition-all text-sm font-medium placeholder:font-normal placeholder:text-slate-400" 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-extrabold text-slate-900 ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-handy-dark-red transition-colors" size={16} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g sample@email.com" 
                  required
                  className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-10 pr-4 text-slate-700 outline-none focus:ring-2 focus:ring-handy-dark-red/30 focus:border-handy-dark-red transition-all text-sm font-medium placeholder:font-normal placeholder:text-slate-400" 
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-extrabold text-slate-900 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-handy-dark-red transition-colors" size={16} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required
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
              
              {/* Only show "Forgot password?" on Login screen */}
              {isLogin && (
                <div className="flex justify-start mt-1.5">
                  <span className="text-[10px] font-extrabold text-handy-dark-red hover:text-red-900 cursor-pointer transition-colors ml-1">
                    Forgot password?
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-handy-dark-red text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-red-900 active:scale-[0.98] transition-all disabled:opacity-70"
              >
                {isLoading ? "Processing..." : (isLogin ? "Sign In" : "Create Account")}
              </button>
            </div>
          </form>

          {/* Toggle Text at the bottom */}
          <div className="mt-8 text-center">
            <p className="text-[12px] font-medium text-slate-500">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrorMessage(""); // Clear errors when toggling
                }}
                className="font-extrabold text-handy-dark-red hover:text-red-900 transition-colors"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

        </div>
      </div>
      {/* END: Right Side */}

    </div>
  );
};

export default LoginPage;