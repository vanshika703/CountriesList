import { fetchCountryDetails } from "@/lib/graphql"
import Link from "next/link"
import { ArrowLeft, Globe, MapPin, DollarSign, Users } from "lucide-react"

interface CountryPageProps {
  params: {
    code: string
  }
}

export default async function CountryPage({ params }: CountryPageProps) {
  const country = await fetchCountryDetails(params.code)

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Country Not Found</h1>
          <Link href="/" className="text-orange-600 hover:text-orange-700 font-medium underline">
            Back to Countries List
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Countries List
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-16 text-white">
              <div className="flex items-center gap-8">
                <div className="text-9xl drop-shadow-lg">{country.emoji}</div>
                <div>
                  <h1 className="text-5xl font-bold mb-3">{country.name}</h1>
                  <p className="text-2xl opacity-90 mb-2">{country.continent.name}</p>
                  <p className="text-xl opacity-75 font-mono bg-white/20 px-3 py-1 rounded-lg inline-block">
                    {country.code}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl border border-orange-100">
                    <MapPin className="h-7 w-7 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Capital City</h3>
                      <p className="text-gray-700 text-lg">{country.capital || "Not specified"}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl border border-orange-100">
                    <DollarSign className="h-7 w-7 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Currency</h3>
                      <p className="text-gray-700 text-lg">{country.currency || "Not specified"}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl border border-orange-100">
                    <Users className="h-7 w-7 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Languages</h3>
                      {country.languages && country.languages.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {country.languages.map((language, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                            >
                              {language.name}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-700 text-lg">Not specified</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl border border-orange-100">
                    <Globe className="h-7 w-7 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">States/Provinces</h3>
                      {country.states && country.states.length > 0 ? (
                        <div className="max-h-48 overflow-y-auto">
                          <div className="grid gap-2">
                            {country.states.map((state, index) => (
                              <span
                                key={index}
                                className="text-gray-700 bg-white px-3 py-1 rounded-lg text-sm border border-gray-200"
                              >
                                {state.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-700 text-lg">No states/provinces data available</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
