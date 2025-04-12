
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      console.log("Login submitted:", { email: formData.email, password: formData.password });
      toast({
        title: "Login Successful",
        description: "Welcome back to Buildease!",
      });
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Password Mismatch",
          description: "The passwords you entered don't match. Please try again.",
          variant: "destructive"
        });
        return;
      }
      
      console.log("Registration submitted:", { 
        name: formData.name, 
        email: formData.email, 
        password: formData.password 
      });
      
      toast({
        title: "Account Created",
        description: "Your account has been created successfully!",
      });
    }
  };

  const toggleView = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      name: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <Link to="/" className="absolute top-8 left-8 text-buildease-yellow text-2xl font-bold">
        Buildease
      </Link>
      
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">{isLogin ? "Welcome Back" : "Create Account"}</h1>
          <p className="text-gray-600 mt-2">
            {isLogin 
              ? "Sign in to access your account" 
              : "Join Buildease to connect with professionals"}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                placeholder="Your full name"
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block mb-2 font-medium">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                placeholder="Your password"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 font-medium">Confirm Password</label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          )}
          
          {isLogin && (
            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-sm text-buildease-yellow hover:underline">
                Forgot password?
              </Link>
            </div>
          )}
          
          <Button type="submit" className="btn-primary w-full py-3">
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
          
          <div className="text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                type="button" 
                onClick={toggleView} 
                className="text-buildease-yellow hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
