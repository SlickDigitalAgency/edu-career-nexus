export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      applications: {
        Row: {
          created_at: string
          documents_url: string[] | null
          id: string
          notes: string | null
          program_id: string | null
          status: string | null
          submission_date: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          documents_url?: string[] | null
          id?: string
          notes?: string | null
          program_id?: string | null
          status?: string | null
          submission_date?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          documents_url?: string[] | null
          id?: string
          notes?: string | null
          program_id?: string | null
          status?: string | null
          submission_date?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          id: string
          institution_id: string | null
          program_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          institution_id?: string | null
          program_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          institution_id?: string | null
          program_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institutions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      institutions: {
        Row: {
          accreditation: string[] | null
          banner_url: string | null
          country: string
          created_at: string
          description: string | null
          facilities: string[] | null
          id: string
          location: string
          name: string
          ranking: number | null
          updated_at: string
          website_url: string | null
        }
        Insert: {
          accreditation?: string[] | null
          banner_url?: string | null
          country: string
          created_at?: string
          description?: string | null
          facilities?: string[] | null
          id?: string
          location: string
          name: string
          ranking?: number | null
          updated_at?: string
          website_url?: string | null
        }
        Update: {
          accreditation?: string[] | null
          banner_url?: string | null
          country?: string
          created_at?: string
          description?: string | null
          facilities?: string[] | null
          id?: string
          location?: string
          name?: string
          ranking?: number | null
          updated_at?: string
          website_url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          career_interests: string[] | null
          created_at: string
          fields_of_interest: string[] | null
          full_name: string | null
          id: string
          preferred_countries: string[] | null
          updated_at: string
          user_type: string | null
        }
        Insert: {
          avatar_url?: string | null
          career_interests?: string[] | null
          created_at?: string
          fields_of_interest?: string[] | null
          full_name?: string | null
          id: string
          preferred_countries?: string[] | null
          updated_at?: string
          user_type?: string | null
        }
        Update: {
          avatar_url?: string | null
          career_interests?: string[] | null
          created_at?: string
          fields_of_interest?: string[] | null
          full_name?: string | null
          id?: string
          preferred_countries?: string[] | null
          updated_at?: string
          user_type?: string | null
        }
        Relationships: []
      }
      programs: {
        Row: {
          admission_requirements: string[] | null
          created_at: string
          currency: string | null
          degree_level: string
          description: string | null
          duration: number
          field_of_study: string
          id: string
          institution_id: string | null
          name: string
          ranking: number | null
          tuition_fee: number | null
          updated_at: string
        }
        Insert: {
          admission_requirements?: string[] | null
          created_at?: string
          currency?: string | null
          degree_level: string
          description?: string | null
          duration: number
          field_of_study: string
          id?: string
          institution_id?: string | null
          name: string
          ranking?: number | null
          tuition_fee?: number | null
          updated_at?: string
        }
        Update: {
          admission_requirements?: string[] | null
          created_at?: string
          currency?: string | null
          degree_level?: string
          description?: string | null
          duration?: number
          field_of_study?: string
          id?: string
          institution_id?: string | null
          name?: string
          ranking?: number | null
          tuition_fee?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "programs_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institutions"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          content: string | null
          created_at: string
          id: string
          institution_id: string | null
          program_id: string | null
          rating: number | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          institution_id?: string | null
          program_id?: string | null
          rating?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          institution_id?: string | null
          program_id?: string | null
          rating?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institutions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never