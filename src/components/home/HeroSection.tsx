
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-careerpulse-purple/10 text-careerpulse-purple text-sm font-medium animate-pulse-slow">
                  <span className="mr-2 h-2 w-2 rounded-full bg-careerpulse-purple"></span>
                  AI-Powered Career Optimization
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Supercharge your <span className="gradient-text">career journey</span> with AI
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  Upload your resume, get AI-powered optimization, track job trends, automate applications, and land your dream job faster.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-careerpulse-blue hover:bg-careerpulse-blue/90">
                    Get started for free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline">
                    See how it works
                  </Button>
                </Link>
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-500">
                      {i}
                    </div>
                  ))}
                </div>
                <p>Join <span className="font-medium text-black">5,000+</span> job seekers already using CareerPulse</p>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-careerpulse-blue/20 to-careerpulse-purple/20 rounded-lg blur-3xl"></div>
                <div className="relative bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="ml-4 text-xs font-medium text-gray-500">Resume Analysis</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-careerpulse-blue/10 flex items-center justify-center">
                        <span className="text-careerpulse-blue text-sm font-semibold">AI</span>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm max-w-sm">
                        <p className="text-gray-700">I've analyzed your resume. Here are 3 key improvements to increase your interview chances by 60%:</p>
                      </div>
                    </div>
                    <div className="space-y-3 ml-14">
                      <div className="bg-careerpulse-green/10 text-careerpulse-green p-2 rounded-md text-xs">
                        ✓ Quantify your achievements with specific metrics
                      </div>
                      <div className="bg-careerpulse-blue/10 text-careerpulse-blue p-2 rounded-md text-xs">
                        ✓ Add these 5 keywords to match job descriptions
                      </div>
                      <div className="bg-careerpulse-purple/10 text-careerpulse-purple p-2 rounded-md text-xs">
                        ✓ Highlight your leadership experience more prominently
                      </div>
                    </div>
                    <div className="mt-5 relative">
                      <input 
                        type="text" 
                        placeholder="Ask follow-up questions..." 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-careerpulse-blue/50"
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-careerpulse-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
