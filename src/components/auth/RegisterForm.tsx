
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would handle registration here
    console.log("Registration attempt with:", { fullName, email, password, agreeToTerms });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-gray-500 mt-2">Start your career optimization journey today</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="text-xs text-gray-500">
            Must be at least 8 characters and include uppercase, lowercase, and a number
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="agree-terms" 
            checked={agreeToTerms}
            onCheckedChange={(checked) => setAgreeToTerms(checked === true)}
            required
          />
          <Label htmlFor="agree-terms" className="text-sm">
            I agree to the{" "}
            <Link to="/terms" className="text-careerpulse-blue hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-careerpulse-blue hover:underline">
              Privacy Policy
            </Link>
          </Label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-careerpulse-blue hover:bg-careerpulse-blue/90"
          disabled={!agreeToTerms}
        >
          Create account
        </Button>
      </form>
      
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.908 8.908 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                fill="#4285F4"
              />
              <path
                d="M12.956 16.26c-1.789 0-3.325-.728-4.204-1.92l-2.512 1.726C7.565 17.895 10.024 19 12.956 19c2.974 0 5.433-1.104 6.712-2.934l-2.513-1.726c-.878 1.192-2.415 1.92-4.199 1.92z"
                fill="#34A853"
              />
              <path
                d="M15.064 10.356H6.736V7.703h5.222c-.1-.485-.172-.994-.172-1.52C11.786 2.96 14.745 0 18.575 0c1.247 0 2.353.315 3.35.863l-1.696 2.95c-.368-.173-.793-.275-1.242-.275-1.862 0-3.328 1.52-3.328 3.446 0 .455.071.891.195 1.298h-.79v2.574z"
                fill="#FBBC05"
              />
              <path
                d="M6.736 10.356V7.703h5.222c-.1-.485-.172-.994-.172-1.52C11.786 2.96 14.745 0 18.575 0c1.247 0 2.353.315 3.35.863l-1.696 2.95c-.368-.173-.793-.275-1.242-.275-1.862 0-3.328 1.52-3.328 3.446 0 .455.071.891.195 1.298h-.79v3.874H6.736z"
                fill="#EA4335"
              />
            </svg>
            Google
          </Button>
          <Button variant="outline" className="w-full">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_13183_10121)"><path d="M10.1543 0C4.6293 0 0.154297 4.475 0.154297 10C0.153164 12.0993 0.813112 14.1456 2.04051 15.8487C3.26792 17.5517 5.00044 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0522 17.541 18.2742 15.8392C19.4962 14.1373 20.1537 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z" fill="#333333"></path></g><defs><clipPath id="clip0_13183_10121"><rect width="20" height="20" fill="white" transform="translate(0.154297)"></rect></clipPath></defs>
            </svg>
            GitHub
          </Button>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-500">Already have an account?</span>{" "}
        <Link to="/login" className="font-medium text-careerpulse-blue hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
