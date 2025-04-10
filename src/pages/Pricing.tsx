
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your needs. All plans include access to our core features.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-medium mb-2">Free</h3>
              <div className="text-3xl font-bold mb-4">₹0<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <p className="text-gray-600 mb-6">Great for getting started with your job search.</p>
              
              <hr className="my-6" />
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mr-2 shrink-0 mt-0.5" />
                  <span>Basic resume analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mr-2 shrink-0 mt-0.5" />
                  <span>Job trend insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mr-2 shrink-0 mt-0.5" />
                  <span>Application tracking (up to 5)</span>
                </li>
              </ul>
              
              <Button className="w-full">Get Started</Button>
            </div>
            
            {/* Pro Plan */}
            <div className="border border-black rounded-xl p-8 shadow-md bg-gray-50 relative hover:shadow-lg transition-all">
              <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 text-center">
                <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-4">₹299<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <p className="text-gray-600 mb-6">Perfect for active job seekers.</p>
              
              <hr className="my-6" />
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-black mr-2 shrink-0 mt-0.5" />
                  <span>Advanced resume optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-black mr-2 shrink-0 mt-0.5" />
                  <span>AI career coaching</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-black mr-2 shrink-0 mt-0.5" />
                  <span>Unlimited application tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-black mr-2 shrink-0 mt-0.5" />
                  <span>Email templates & outreach</span>
                </li>
              </ul>
              
              <Button className="w-full bg-black text-white hover:bg-gray-800">Start Free Trial</Button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-medium mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">₹999<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <p className="text-gray-600 mb-6">For organizations and career centers.</p>
              
              <hr className="my-6" />
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mr-2 shrink-0 mt-0.5" />
                  <span>All Pro features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mr-2 shrink-0 mt-0.5" />
                  <span>Bulk resume processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mr-2 shrink-0 mt-0.5" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-600 mr-2 shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
