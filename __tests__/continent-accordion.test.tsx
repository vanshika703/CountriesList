import { render, screen, fireEvent } from "@testing-library/react"
import ContinentAccordion from "@/components/continent-accordion"
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
]

describe("ContinentAccordion", () => {
  it("renders continent name and country count", () => {
    render(<ContinentAccordion continentName="North America" countries={mockCountries} />)
    expect(screen.getByText("North America")).toBeInTheDocument()
    expect(screen.getByText("1 countries")).toBeInTheDocument()
  })

  it("expands to show countries when clicked", () => {
    render(<ContinentAccordion continentName="North America" countries={mockCountries} />)

    const button = screen.getByRole("button")
    fireEvent.click(button)

    expect(screen.getByText("United States")).toBeInTheDocument()
    expect(screen.getByText("US")).toBeInTheDocument()
    expect(screen.getByText("Washington D.C.")).toBeInTheDocument()
  })
})
