import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">EduCareer</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Institutions</Button>
            <Button variant="ghost">Internships</Button>
            <Button variant="ghost">Community</Button>
            <Button variant="ghost">About</Button>
            <Button variant="default">Sign In</Button>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button variant="ghost" className="w-full justify-start">Institutions</Button>
            <Button variant="ghost" className="w-full justify-start">Internships</Button>
            <Button variant="ghost" className="w-full justify-start">Community</Button>
            <Button variant="ghost" className="w-full justify-start">About</Button>
            <Button variant="default" className="w-full">Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  );
}