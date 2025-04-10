
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Resources</h1>
          
          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="blog" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                       alt="Blog post" 
                       className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">10 Resume Tips That Will Get You Hired</h3>
                    <p className="text-gray-600 mb-4">Learn the secrets to crafting a resume that stands out to recruiters and ATS systems.</p>
                    <Link to="/blog/resume-tips">
                      <Button variant="outline">Read Article</Button>
                    </Link>
                  </div>
                </div>
                
                <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                       alt="Blog post" 
                       className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">How AI is Changing Job Searches in 2025</h3>
                    <p className="text-gray-600 mb-4">Discover how artificial intelligence is revolutionizing the way people find and apply for jobs.</p>
                    <Link to="/blog/ai-job-search">
                      <Button variant="outline">Read Article</Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/blog">
                  <Button variant="outline">View All Posts</Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="guides" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-2">Complete Guide to Resume Writing</h3>
                  <p className="text-gray-600 mb-4">A comprehensive step-by-step guide to creating an effective resume.</p>
                  <Link to="/guides/resume-writing">
                    <Button variant="outline">Download Guide</Button>
                  </Link>
                </div>
                
                <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-2">Interview Preparation Checklist</h3>
                  <p className="text-gray-600 mb-4">Everything you need to prepare for your next job interview.</p>
                  <Link to="/guides/interview-prep">
                    <Button variant="outline">Download Guide</Button>
                  </Link>
                </div>
                
                <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-2">Salary Negotiation Tactics</h3>
                  <p className="text-gray-600 mb-4">Learn how to effectively negotiate your salary and benefits package.</p>
                  <Link to="/guides/salary-negotiation">
                    <Button variant="outline">Download Guide</Button>
                  </Link>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/guides">
                  <Button variant="outline">Browse All Guides</Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="faq" className="space-y-8">
              <div className="border rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">How does the AI resume optimization work?</h4>
                    <p className="text-gray-600">Our AI analyzes your resume against thousands of successful examples and job descriptions to provide personalized recommendations for improvement, including content, formatting, and keyword suggestions.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Can I cancel my subscription at any time?</h4>
                    <p className="text-gray-600">Yes, you can cancel your subscription at any time with no questions asked. You'll continue to have access to your plan benefits until the end of your billing period.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">How accurate are the job trend predictions?</h4>
                    <p className="text-gray-600">Our job trend predictions are based on analysis of millions of job postings across various industries and regions, with an average accuracy rate of 85% for 6-month projections.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Is my resume data secure?</h4>
                    <p className="text-gray-600">Yes, we take data security very seriously. All resume data is encrypted and stored securely, and we never share your information with third parties without your explicit permission.</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/faq">
                    <Button variant="outline">View All FAQs</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
