export interface IResponseCoins {
  code: number
  message: string
  data: ICoin[]
  next_page: number
  count: number
}

export interface ICoin {
  contract_address: `0x${string}`
  decimals: number
  name: string
  symbol: string
  total_supply: string
  logos: ILogo[]
  urls: IUrl[]
  current_usd_price: number
  balance: string
}

export interface ILogo {
  uri: string
  width: number
  height: number
}

export interface IUrl {
  name: string
  url: string
}
