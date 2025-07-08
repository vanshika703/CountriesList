import { render, screen } from "@testing-library/react";
import CountriesTable from "@/components/countries-table";
import type { Country } from "@/types/country";

describe("CountriesTable", () => {
    const mockCountries: Country[] = [
        {
            name: "Brazil",
            code: "BR",
            capital: "Brasília",
            continent: { name: "South America" },
            currency: "BRL",
            languages: [{ name: "Portuguese" }],
            states: [],
            emoji: "🇧🇷",
        },
        {
            name: "Argentina",
            code: "AR",
            capital: "Buenos Aires",
            continent: { name: "South America" },
            currency: "ARS",
            languages: [{ name: "Spanish" }],
            states: [],
            emoji: "🇦🇷",
        },
        {
            name: "Nigeria",
            code: "NG",
            capital: "Abuja",
            continent: { name: "Africa" },
            currency: "NGN",
            languages: [{ name: "English" }],
            states: [],
            emoji: "🇳🇬",
        },
    ];

    it("renders continent accordions and country names", () => {
        render(<CountriesTable countries={mockCountries} />);
        //@ts-ignore
        expect(screen.getByText("South America")).toBeInTheDocument();
        //@ts-ignore
        expect(screen.getByText("Africa")).toBeInTheDocument();
        //@ts-ignore
        expect(screen.getByText("Brazil")).toBeInTheDocument();
        //@ts-ignore
        expect(screen.getByText("Argentina")).toBeInTheDocument();
        //@ts-ignore
        expect(screen.getByText("Nigeria")).toBeInTheDocument();
    });
});
