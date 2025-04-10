
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { FileText, LineChart, Brain, Mail, ClipboardList, GraduationCap } from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col futuristic-bg">
      <Navbar />
      <div className="futuristic-grid"></div>
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Cutting-edge Features</h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            Leverage AI-powered tools designed to optimize your job search and accelerate your career growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="futuristic-card hover-lift glow-effect">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold">Resume Optimization</h3>
              </div>
              <p className="text-gray-600 mb-4">Our AI analyzes your resume and provides personalized suggestions to make it stand out to recruiters and pass through ATS systems.</p>
              <div className="tech-border mt-4 pt-4">
                <Link to="/resume-optimization">
                  <Button className="futuristic-button w-full">
                    <span>Optimize Your Resume</span>
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="futuristic-card hover-lift glow-effect">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <LineChart className="h-6 w-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold">Job Trend Analysis</h3>
              </div>
              <p className="text-gray-600 mb-4">Stay ahead of the curve with real-time insights into job market trends and in-demand skills based on millions of job postings.</p>
              <div className="tech-border mt-4 pt-4">
                <Link to="/job-trend-analysis">
                  <Button className="futuristic-button w-full">
                    <span>Explore Job Trends</span>
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="futuristic-card hover-lift glow-effect">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <Brain className="h-6 w-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold">AI Career Coaching</h3>
              </div>
              <p className="text-gray-600 mb-4">Get personalized career advice and interview preparation with our AI coach. Practice common questions and receive real-time feedback.</p>
              <div className="tech-border mt-4 pt-4">
                <Link to="/ai-career-coaching">
                  <Button className="futuristic-button w-full">
                    <span>Start AI Coaching</span>
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="futuristic-card hover-lift glow-effect">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold">Email Outreach</h3>
              </div>
              <p className="text-gray-600 mb-4">Automated email campaigns to connect with recruiters and expand your professional network with AI-generated personalized templates.</p>
              <div className="tech-border mt-4 pt-4">
                <Link to="/email-outreach">
                  <Button className="futuristic-button w-full">
                    <span>Create Email Campaign</span>
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="futuristic-card hover-lift glow-effect">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <ClipboardList className="h-6 w-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold">Application Tracking</h3>
              </div>
              <p className="text-gray-600 mb-4">Keep track of all your job applications in one place with status updates, reminders, and follow-up suggestions.</p>
              <div className="tech-border mt-4 pt-4">
                <Link to="/application-tracking">
                  <Button className="futuristic-button w-full">
                    <span>Track Applications</span>
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="futuristic-card hover-lift glow-effect">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold">Skill Gap Analysis</h3>
              </div>
              <p className="text-gray-600 mb-4">Identify skills you need to develop to qualify for your dream job and get personalized learning resources to build those skills.</p>
              <div className="tech-border mt-4 pt-4">
                <Link to="/skill-gap-analysis">
                  <Button className="futuristic-button w-full">
                    <span>Analyze Skill Gaps</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 glass-panel p-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose CareerPulse AI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animated-border p-4">
                <h3 className="font-semibold mb-2">State-of-the-art AI</h3>
                <p className="text-gray-600 text-sm">Powered by the latest AI models to provide the most accurate and personalized assistance.</p>
              </div>
              <div className="animated-border p-4">
                <h3 className="font-semibold mb-2">Data-driven Insights</h3>
                <p className="text-gray-600 text-sm">Analysis based on millions of job postings and successful career transitions.</p>
              </div>
              <div className="animated-border p-4">
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-600 text-sm">Our systems continuously improve from user interactions to provide better recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
