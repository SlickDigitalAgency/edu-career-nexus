import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturedListings() {
  const institutions = [
    {
      name: "Harvard University",
      location: "Cambridge, MA",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300",
    },
    {
      name: "Stanford University",
      location: "Stanford, CA",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300",
    },
    {
      name: "MIT",
      location: "Cambridge, MA",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Institutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((institution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={institution.image}
                  alt={institution.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{institution.name}</CardTitle>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{institution.location}</span>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{institution.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}