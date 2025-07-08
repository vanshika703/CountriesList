import { render, screen, fireEvent } from "@testing-library/react";
import ContinentAccordion from "@/components/continent-accordion";
import type { Country } from "@/types/country";

describe("ContinentAccordion", () => {
    const mockCountries: Country[] = [
        {
            name: "France",
            code: "FR",
            capital: "Paris",
            continent: { name: "Europe" },
            currency: "EUR",
            languages: [{ name: "French" }],
            states: [],
            emoji: "🇫🇷",
        },
        {
            name: "Germany",
            code: "DE",
            capital: "Berlin",
            continent: { name: "Europe" },
            currency: "EUR",
            languages: [{ name: "German" }],
            states: [],
            emoji: "🇩🇪",
        },
    ];

    it("renders continent name and country rows", () => {
        render(
            <ContinentAccordion
                continentName="Europe"
                countries={mockCountries}
            />
        );
        //@ts-ignore
        expect(screen.getByText("Europe")).toBeInTheDocument();
        //@ts-ignore
        expect(screen.getByText("France")).toBeInTheDocument();
        //@ts-ignore
        expect(screen.getByText("Germany")).toBeInTheDocument();
        //@ts-ignore
        expect(screen.getByText("Paris")).toBeInTheDocument();
        //@ts-ignore
        expect(screen.getByText("Berlin")).toBeInTheDocument();
        //@ts-ignore
        expect(screen.getByText("🇫🇷")).toBeInTheDocument();
        //@ts-ignore
        expect(screen.getByText("🇩🇪")).toBeInTheDocument();
    });

    it("toggles open/close when header is clicked", () => {
        render(
            <ContinentAccordion
                continentName="Europe"
                countries={mockCountries}
            />
        );
        const header = screen.getByRole("button");
        // Initially open
        //@ts-ignore
        expect(screen.getByText("France")).toBeInTheDocument();
        fireEvent.click(header);
        // After closing, country rows should not be visible
        expect(screen.queryByText("France")).toBeNull();
        fireEvent.click(header);
        // After opening again
        //@ts-ignore
        expect(screen.getByText("France")).toBeInTheDocument();
    });
});
