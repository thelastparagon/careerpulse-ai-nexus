
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Resume optimization with AI feedback",
    "Job trends and market insights",
    "Personalized career coaching",
    "Application tracking dashboard",
    "Free basic account available"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-careerpulse-blue to-careerpulse-purple rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start optimizing your career journey today
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Join thousands of professionals who have accelerated their careers with CareerPulse AI. Get started with a free account in less than 2 minutes.
              </p>
              
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-white mr-3" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-careerpulse-blue hover:bg-white/90">
                    Sign up free
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    View pricing
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/95 shadow-lg rounded-lg p-6 w-full max-w-md">
                  <div className="text-center mb-6">
                    <span className="inline-block p-3 rounded-full bg-careerpulse-blue/10 text-careerpulse-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <h3 className="mt-4 text-xl font-bold">Get a free resume analysis</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      See how your resume scores against industry standards
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-careerpulse-blue/50" 
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-careerpulse-blue/50" 
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
                      <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mt-2 text-sm text-gray-500">
                          Drag and drop your resume or <span className="text-careerpulse-blue">browse</span>
                        </p>
                      </div>
                    </div>
                    <Button className="w-full bg-careerpulse-blue hover:bg-careerpulse-blue/90">
                      Get Free Analysis
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
