"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { Country } from "@/types/country"
import Link from "next/link"

interface ContinentAccordionProps {
  continentName: string
  countries: Country[]
}

export default function ContinentAccordion({ continentName, countries }: ContinentAccordionProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="border border-gray-200 rounded-xl mb-4 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-200 flex items-center justify-between rounded-xl border-b border-orange-200"
      >
        <span className="font-semibold text-xl text-gray-800">{continentName}</span>
        <div className="flex items-center gap-3">
          <span className="text-sm text-orange-600 font-medium bg-orange-100 px-3 py-1 rounded-full">
            {countries.length} countries
          </span>
          {isOpen ? (
            <ChevronDown className="h-5 w-5 text-orange-600" />
          ) : (
            <ChevronUp className="h-5 w-5 text-orange-600" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Country
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Code
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Capital
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Flag
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {countries.map((country) => (
                <tr key={country.code} className="hover:bg-orange-50 transition-colors duration-200 group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/country/${country.code}`}
                      className="block w-full h-full font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-200"
                    >
                      {country.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/country/${country.code}`}
                      className="block w-full h-full text-sm text-gray-700 font-mono group-hover:text-orange-600 transition-colors duration-200"
                    >
                      {country.code}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/country/${country.code}`}
                      className="block w-full h-full text-sm text-gray-700 group-hover:text-orange-600 transition-colors duration-200"
                    >
                      {country.capital || "N/A"}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/country/${country.code}`}
                      className="block w-full h-full text-2xl transition-transform duration-200 group-hover:scale-110"
                    >
                      {country.emoji}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
