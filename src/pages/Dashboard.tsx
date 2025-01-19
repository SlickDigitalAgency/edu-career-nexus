import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
      } else {
        setProfile(profileData);
      }

      setLoading(false);
    };

    checkUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Profile Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={profile?.avatar_url || "/placeholder.svg"}
                alt="Profile"
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{profile?.full_name || "Update your profile"}</h3>
                <p className="text-sm text-gray-500">{profile?.user_type || "Student/Professional"}</p>
              </div>
            </div>
            <Button className="w-full" onClick={() => navigate("/profile")}>
              Edit Profile
            </Button>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <p className="text-gray-500">No recent activity</p>
          </div>
        </Card>

        {/* Application Tracker */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Application Tracker</h2>
          <div className="space-y-4">
            <p className="text-gray-500">No applications yet</p>
            <Button className="w-full" onClick={() => navigate("/institutions")}>
              Browse Institutions
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}