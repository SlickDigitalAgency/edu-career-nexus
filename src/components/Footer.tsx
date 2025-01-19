import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">EduCareer</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering students and professionals to achieve their educational and career goals globally.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Institutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Internships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@educareer.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Education St, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 EduCareer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}