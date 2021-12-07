import { gql } from '@apollo/client'

export const GET_STATIONS_QUERY = gql`
  query Bikes($latitude: Float, $longitude: Float) {
    station: bikeStation(
      findBy: { closest: { latitude: $latitude, longitude: $longitude } }
    ) {
      ...on BikeStation {
        name
        coordinates {
          longitude
          latitude
        }
        available {
          bikes {
            electrical
            mechanical
          }
        }
      }
    }
    stations: metroStations(
      filterBy: { lineId: 4 }
      first: 3
    ) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
