import { useQuery } from "react-query";
import { gql, request } from "graphql-request";

export const API_URL = "https://graphql-gateway.axieinfinity.com/graphql";

export function GetAxiesInfo(info){      
  console.log("LLega aqui");      
   return useQuery(['getAxi-Info',info], async() => {
      const data = await request(API_URL, axieQuery,info)
      return data;       
     });
}


export const axieQuery = gql`
query GetAxieBriefList(
                    $auctionType: AuctionType
                    $criteria: AxieSearchCriteria
                    $from: Int
                    $sort: SortBy
                    $size: Int
                    $owner: String ) {
                    axies(
                      auctionType: $auctionType
                      criteria: $criteria
                      from: $from
                      sort: $sort
                      size: $size
                      owner: $owner
                    ) {
                      total
                      results {
                        ...AxieBrief
                        __typename
                      }
                      __typename
                    }
                  }
                  
                  fragment AxieBrief on Axie {
                    id
                    name
                    class
                    breedCount
                    image
                    genes
                    battleInfo {
                      banned
                      __typename
                    }
                    auction {
                      currentPrice
                      currentPriceUSD
                      __typename
                    }
                    stats {
                          ...AxieStats
                          __typename
                      }
                  
                    parts {
                      id
                      name
                      class
                      type
                       abilities {
                                ...AxieCardAbility
                                __typename
                      }
                      __typename
                    }
                    __typename
                  }
                  
                  fragment AxieStats on AxieStats {
                              hp
                              speed
                              skill
                              morale
                              __typename
                  }
                  
                  fragment AxieCardAbility on AxieCardAbility {
                              id
                              name
                              attack
                              defense
                              energy
                              __typename
                  } 
`