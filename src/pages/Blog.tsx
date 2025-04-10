
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Resume Tips That Will Get You Hired",
      excerpt: "Learn the secrets to crafting a resume that stands out to recruiters and ATS systems.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      category: "Resume",
      date: "April 5, 2025",
      slug: "resume-tips"
    },
    {
      title: "How AI is Changing Job Searches in 2025",
      excerpt: "Discover how artificial intelligence is revolutionizing the way people find and apply for jobs.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Technology",
      date: "April 2, 2025",
      slug: "ai-job-search"
    },
    {
      title: "The Top In-Demand Skills for 2025",
      excerpt: "Stay ahead of the competition by mastering these highly sought-after skills in the current job market.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Skills",
      date: "March 28, 2025",
      slug: "in-demand-skills"
    },
    {
      title: "Mastering the Remote Job Interview",
      excerpt: "Tips and strategies for acing your next virtual interview and landing the remote job you want.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Interviews",
      date: "March 22, 2025",
      slug: "remote-interviews"
    },
    {
      title: "Networking Strategies for Introverts",
      excerpt: "Effective networking approaches for people who find networking events and small talk challenging.",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Networking",
      date: "March 15, 2025",
      slug: "networking-introverts"
    },
    {
      title: "Career Change at 40: Success Stories",
      excerpt: "Inspiring stories of professionals who successfully pivoted their careers in their 40s and beyond.",
      image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Career Change",
      date: "March 10, 2025",
      slug: "career-change-40"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Career Insights Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Expert advice and insights to help you navigate your career journey and land your dream job.</p>
          </div>
          
          <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">All</Badge>
              <Badge className="bg-white text-gray-800 hover:bg-gray-100">Resume</Badge>
              <Badge className="bg-white text-gray-800 hover:bg-gray-100">Interviews</Badge>
              <Badge className="bg-white text-gray-800 hover:bg-gray-100">Career Change</Badge>
              <Badge className="bg-white text-gray-800 hover:bg-gray-100">Technology</Badge>
              <Badge className="bg-white text-gray-800 hover:bg-gray-100">Skills</Badge>
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search articles..." 
                className="pl-8"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <div key={index} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-gray-100 text-gray-800">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">Read Article</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline" className="mx-1">1</Button>
            <Button variant="outline" className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">3</Button>
            <Button variant="outline" className="mx-1">Next</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
