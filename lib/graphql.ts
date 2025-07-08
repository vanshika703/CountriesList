const GRAPHQL_ENDPOINT = "https://countries.trevorblades.com"

export const GET_COUNTRIES_QUERY = `
  query GetCountries {
    countries {
      name
      code
      capital
      continent {
        name
      }
      emoji
    }
  }
`

export const GET_COUNTRY_DETAILS_QUERY = `
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      code
      capital
      currency
      emoji
      languages {
        name
      }
      states {
        name
      }
      continent {
        name
      }
    }
  }
`

export async function fetchCountries() {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_COUNTRIES_QUERY,
    }),
  })

  const data = await response.json()
  return data.data.countries
}

export async function fetchCountryDetails(code: string) {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_COUNTRY_DETAILS_QUERY,
      variables: { code },
    }),
  })

  const data = await response.json()
  return data.data.country
}
