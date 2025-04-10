
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-careerpulse-blue to-careerpulse-purple bg-clip-text text-transparent">CareerPulse</span>
              <span className="ml-1 text-xs px-1.5 py-0.5 rounded bg-careerpulse-purple/10 text-careerpulse-purple">AI</span>
            </Link>
          </div>

          <div className="mt-10">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-careerpulse-blue to-careerpulse-purple"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex flex-col justify-center items-center p-12">
          <div className="max-w-2xl text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              "CareerPulse AI helped me land interviews at 5 top tech companies in just 3 weeks!"
            </h2>
            <p className="text-white/90 mb-6">
              Our AI-powered platform analyzes your resume, optimizes your job applications, and provides personalized coaching to help you land your dream job.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" 
                alt="Testimonial" 
                className="h-12 w-12 rounded-full border-2 border-white"
              />
              <div className="ml-4 text-left">
                <p className="font-semibold">Alex Chen</p>
                <p className="text-sm text-white/80">Software Engineer at Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
