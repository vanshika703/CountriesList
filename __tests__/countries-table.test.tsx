import { render, screen } from "@testing-library/react"
import CountriesTable from "@/components/countries-table"
import type { Country } from "@/types/country"

const mockCountries: Country[] = [
  {
    name: "United States",
    code: "US",
    capital: "Washington D.C.",
    continent: { name: "North America" },
    currency: "USD",
    languages: [{ name: "English" }],
    states: [{ name: "California" }],
    emoji: "🇺🇸",
  },
  {
    name: "Canada",
    code: "CA",
    capital: "Ottawa",
    continent: { name: "North America" },
    currency: "CAD",
    languages: [{ name: "English" }, { name: "French" }],
    states: [{ name: "Ontario" }],
    emoji: "🇨🇦",
  },
]

describe("CountriesTable", () => {
  it("renders continent accordions", () => {
    render(<CountriesTable countries={mockCountries} />)
    expect(screen.getByText("North America")).toBeInTheDocument()
    expect(screen.getByText("2 countries")).toBeInTheDocument()
  })

  it("groups countries by continent", () => {
    render(<CountriesTable countries={mockCountries} />)
    expect(screen.getByText("North America")).toBeInTheDocument()
  })
})
