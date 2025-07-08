export interface Country {
  name: string
  code: string
  capital?: string
  continent: {
    name: string
  }
  currency?: string
  languages: {
    name: string
  }[]
  states: {
    name: string
  }[]
  emoji: string
}

export interface Continent {
  name: string
  countries: Country[]
}
