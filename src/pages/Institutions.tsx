import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Building, Search, Star } from "lucide-react"
import { supabase } from "@/integrations/supabase/client"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useToast } from "@/hooks/use-toast"

const ITEMS_PER_PAGE = 9

export default function Institutions() {
  const { toast } = useToast()
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState<string>("")
  const [ranking, setRanking] = useState<string>("")
  const [page, setPage] = useState(1)

  const { data: institutions, isLoading } = useQuery({
    queryKey: ["institutions", search, location, ranking, page],
    queryFn: async () => {
      let query = supabase
        .from("institutions")
        .select("*", { count: "exact" })
        .range((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE - 1)

      if (search) {
        query = query.ilike("name", `%${search}%`)
      }
      if (location) {
        query = query.eq("location", location)
      }
      if (ranking) {
        query = query.lte("ranking", parseInt(ranking))
      }

      const { data, error, count } = await query

      if (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch institutions",
        })
        throw error
      }

      return { data, count }
    },
  })

  const totalPages = institutions?.count
    ? Math.ceil(institutions.count / ITEMS_PER_PAGE)
    : 0

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Explore Institutions</h1>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <div className="col-span-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search institutions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All locations</SelectItem>
            <SelectItem value="New York">New York</SelectItem>
            <SelectItem value="London">London</SelectItem>
            <SelectItem value="Paris">Paris</SelectItem>
            <SelectItem value="Tokyo">Tokyo</SelectItem>
          </SelectContent>
        </Select>

        <Select value={ranking} onValueChange={setRanking}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by ranking" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All rankings</SelectItem>
            <SelectItem value="10">Top 10</SelectItem>
            <SelectItem value="50">Top 50</SelectItem>
            <SelectItem value="100">Top 100</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="grid gap-6 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="h-48 bg-muted" />
              <CardContent className="space-y-2">
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-3">
            {institutions?.data.map((institution) => (
              <Card key={institution.id} className="overflow-hidden">
                <CardHeader
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      institution.banner_url ||
                      "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                    })`,
                  }}
                />
                <CardContent className="p-6">
                  <CardTitle className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5" />
                    {institution.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Star className="h-4 w-4" />
                    Ranking: #{institution.ranking || "N/A"}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {institution.location}, {institution.country}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (page > 1) setPage(page - 1)
                    }}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      href="#"
                      isActive={page === i + 1}
                      onClick={(e) => {
                        e.preventDefault()
                        setPage(i + 1)
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (page < totalPages) setPage(page + 1)
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  )
}