"use client"

import type { Country } from "@/types/country"
import ContinentAccordion from "./continent-accordion"

interface CountriesTableProps {
  countries: Country[]
}

export default function CountriesTable({ countries }: CountriesTableProps) {
  const continentNames : any[] = []

  for (const country of countries) {
    const continentName = country.continent.name
    if (!continentNames.includes(continentName)) {
      continentNames.push(continentName)
    }
  }

  continentNames.sort()

  const continentsWithCountries = []

  for (const continentName of continentNames) {
    const countriesInContinent = []

    for (const country of countries) {
      if (country.continent.name === continentName) {
        countriesInContinent.push(country)
      }
    }

    countriesInContinent.sort((a, b) => a.name.localeCompare(b.name))

    continentsWithCountries.push({
      name: continentName,
      countries: countriesInContinent,
    })
  }

  return (
    <div className="space-y-4">
      {continentsWithCountries.map((continent) => (
        <ContinentAccordion key={continent.name} continentName={continent.name} countries={continent.countries} />
      ))}
    </div>
  )
}
