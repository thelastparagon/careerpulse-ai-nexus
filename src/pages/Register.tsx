
import { Link } from "react-router-dom";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
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
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-careerpulse-blue to-careerpulse-purple"></div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex flex-col justify-center items-center p-12">
          <div className="max-w-2xl text-white">
            <h2 className="text-3xl font-bold mb-6">Join thousands of professionals advancing their careers</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>AI-powered resume optimization that increases interview callbacks by 76%</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-time job market trends and skills gap analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Personalized career coaching and interview preparation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Automated email outreach that gets responses from hiring managers</span>
              </li>
            </ul>
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-xs font-medium text-careerpulse-blue">
                    {i}
                  </div>
                ))}
              </div>
              <p>Join <span className="font-medium">5,000+</span> job seekers today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
