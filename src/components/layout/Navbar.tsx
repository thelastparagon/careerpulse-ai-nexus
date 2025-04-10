
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-40 w-full border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-careerpulse-blue to-careerpulse-purple bg-clip-text text-transparent">CareerPulse</span>
              <span className="ml-1 text-xs px-1.5 py-0.5 rounded bg-careerpulse-purple/10 text-careerpulse-purple">AI</span>
            </Link>
            <div className="hidden md:ml-10 md:flex items-center space-x-4">
              <Link to="/features" className="nav-link">Features</Link>
              <Link to="/pricing" className="nav-link">Pricing</Link>
              <div className="relative group">
                <button className="nav-link flex items-center">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
                  <Link to="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Guides</Link>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-careerpulse-blue">
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-careerpulse-blue hover:bg-careerpulse-blue/90">
                Sign up free
              </Button>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/features" className="block nav-link">Features</Link>
            <Link to="/pricing" className="block nav-link">Pricing</Link>
            <Link to="/blog" className="block nav-link">Blog</Link>
            <Link to="/guides" className="block nav-link">Guides</Link>
            <Link to="/faq" className="block nav-link">FAQ</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-3">
              <Link to="/login" className="block w-full">
                <Button variant="outline" className="w-full">Log in</Button>
              </Link>
              <Link to="/register" className="block w-full">
                <Button className="w-full bg-careerpulse-blue">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
