
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Features</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Resume Optimization</h3>
              <p className="text-gray-600 mb-4">Our AI analyzes your resume and provides personalized suggestions to make it stand out to recruiters.</p>
              <Link to="/dashboard/resume">
                <Button>Try Now</Button>
              </Link>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Job Trend Analysis</h3>
              <p className="text-gray-600 mb-4">Stay ahead of the curve with real-time insights into job market trends and in-demand skills.</p>
              <Button>Explore Trends</Button>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">AI Career Coaching</h3>
              <p className="text-gray-600 mb-4">Get personalized career advice and interview preparation with our AI coach.</p>
              <Button>Start Coaching</Button>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Email Outreach</h3>
              <p className="text-gray-600 mb-4">Automated email campaigns to connect with recruiters and expand your professional network.</p>
              <Button>Set Up Campaign</Button>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Application Tracking</h3>
              <p className="text-gray-600 mb-4">Keep track of all your job applications in one place with status updates and reminders.</p>
              <Button>View Demo</Button>
            </div>
            
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-3">Skill Gap Analysis</h3>
              <p className="text-gray-600 mb-4">Identify skills you need to develop to qualify for your dream job.</p>
              <Button>Analyze Skills</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
