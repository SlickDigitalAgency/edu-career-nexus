import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Explore Your Global</span>
            <span className="block text-primary">Educational & Career Opportunities</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover top institutions and internships worldwide. Start your journey towards a successful career today.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-8">
              Explore Institutions
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Find Internships
            </Button>
          </div>

          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex gap-2">
              <Input 
                placeholder="Search institutions or internships..." 
                className="h-12 text-lg"
              />
              <Button size="lg" className="px-8">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}