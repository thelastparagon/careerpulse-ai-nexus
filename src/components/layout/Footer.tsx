
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text">CareerPulse</span>
              <span className="ml-1 text-xs px-1.5 py-0.5 rounded bg-careerpulse-purple/10 text-careerpulse-purple">AI</span>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Your AI career companion that helps optimize resumes, track job trends, and land your dream job
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-careerpulse-blue">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-careerpulse-blue">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-careerpulse-blue">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/features" className="text-sm text-gray-500 hover:text-careerpulse-blue">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-500 hover:text-careerpulse-blue">Pricing</Link></li>
              <li><Link to="/testimonials" className="text-sm text-gray-500 hover:text-careerpulse-blue">Testimonials</Link></li>
              <li><Link to="/updates" className="text-sm text-gray-500 hover:text-careerpulse-blue">What's New</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/blog" className="text-sm text-gray-500 hover:text-careerpulse-blue">Blog</Link></li>
              <li><Link to="/guides" className="text-sm text-gray-500 hover:text-careerpulse-blue">Career Guides</Link></li>
              <li><Link to="/templates" className="text-sm text-gray-500 hover:text-careerpulse-blue">Resume Templates</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-500 hover:text-careerpulse-blue">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-careerpulse-blue">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-500 hover:text-careerpulse-blue">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-careerpulse-blue">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-500 hover:text-careerpulse-blue">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} CareerPulse AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
