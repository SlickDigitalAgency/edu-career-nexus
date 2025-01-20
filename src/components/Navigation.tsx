import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">EduCareer</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/institutions")}>Institutions</Button>
            <Button variant="ghost" onClick={() => navigate("/internships")}>Internships</Button>
            <Button variant="ghost" onClick={() => navigate("/community")}>Community</Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>About</Button>
            {user ? (
              <>
                <Button variant="ghost" onClick={() => navigate("/application")}>Apply</Button>
                <Button variant="ghost" onClick={() => navigate("/dashboard")}>Dashboard</Button>
                <Button variant="default" onClick={handleSignOut}>Sign Out</Button>
              </>
            ) : (
              <Button variant="default" onClick={() => navigate("/auth")}>Sign In</Button>
            )}
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
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/institutions")}>Institutions</Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/internships")}>Internships</Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/community")}>Community</Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/about")}>About</Button>
            {user ? (
              <>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/application")}>Apply</Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/dashboard")}>Dashboard</Button>
                <Button variant="default" className="w-full" onClick={handleSignOut}>Sign Out</Button>
              </>
            ) : (
              <Button variant="default" className="w-full" onClick={() => navigate("/auth")}>Sign In</Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}