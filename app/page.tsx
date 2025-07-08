import { fetchCountries } from "@/lib/graphql"
import CountriesTable from "@/components/countries-table"

export default async function HomePage() {
  const countries = await fetchCountries()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">
              One Advanced X Countries List
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore comprehensive information about countries worldwide, organized by continent
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <CountriesTable countries={countries} />
          </div>
        </div>
      </div>
    </div>
  )
}
