---
id: examples
title: Examples
slug: examples
sidebar_position: 0
description: Examples of the Graphql Schema
toc_min_heading_level: 2
toc_max_heading_level: 5
---
import CodeBlockv2 from '../../src/components/button.js';
import TOCInline from '@theme/TOCInline';

<TOCInline style={{}} toc={toc} />

## Base Currency

<CodeBlockv2
text= "We can fetch the base currency."
subtitle="Query for the base currency"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++priceOracles+%7B%0A++++usdPriceEth%0A++%7D%0A%7D`}
code=
{`{
  priceOracles {
    usdPriceEth
  }
}`}
 />

## Historical Data

<CodeBlockv2
text= "We can fetch historical data by specifying a block number."
subtitle="Query for liquidityRate by block number"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++reserves%28block%3A+%7Bnumber%3A+14568297%7D%29+%7B%0A++++symbol%0A++++liquidityRate%0A++%7D%0A%7D`}
code=
{`{
  // highlight-next-line
  reserves(block: {number: 14568297}) { # provide block number here
    symbol
    liquidityRate
  }
}`}
 />



## Data of All Reserves

<CodeBlockv2
text= "We can get a list of all the reserves that are able to be used as collateral, along with each reserve's interest rate details."
subtitle="Query for all reserves"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++reserves%28where%3A+%7BusageAsCollateralEnabled%3A+true%7D%29+%7B%0A++++id%0A++++name%0A++++price+%7B%0A++++++id%0A++++%7D%0A++++liquidityRate%0A++++variableBorrowRate%0A++++stableBorrowRate%0A++%7D%0A%7D`}
code=
{`{
  reserves(where: {usageAsCollateralEnabled: true}) {
    id
    name
    price {
      id
    }
    liquidityRate
    variableBorrowRate
    stableBorrowRate
  }
}`}
 />

## Data of Specific Reserve

<CodeBlockv2
title="Data of Specific Reserve"
text= "We can fetch data for a specific reserve using reserve's ERC20 token address. E.g. for the Chainlink reserve."
subtitle="Query for a specific reserve"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++reserve%28%0A++++id%3A+%220x514910771af9ca656af840dff83e8264ecf986ca0xb53c1a33016b2dc2ff3653530bff1848a515c8c5%22%0A++%29+%7B%0A++++symbol%0A++++price+%7B%0A++++++id%0A++++%7D%0A++++aToken+%7B%0A++++++id%0A++++%7D%0A++%7D%0A%7D`}
code=
{`{
  reserve(
    // highlight-next-line
    id: "0x514910771af9ca656af840dff83e8264ecf986ca0xb53c1a33016b2dc2ff3653530bff1848a515c8c5" # provide reserve address here
  ) {
    symbol
    price {
      id
    }
    aToken {
      id
    }
  }
}`}
 />

## Detailed Data of a Specific Reserve

<CodeBlockv2
title="Detailed Data of a Specific Reserve"
text= "We can fetch detailed data for a specific reserve by `lendingPoolAddressProvider` address for the market you are querying data for using the query below."
subtitle="Query for detailed data of a specific reserve by pool address"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++reserves%28where%3A+%7Bpool%3A+%220xacc030ef66f9dfeae9cbb0cd1b25654b82cfa8d5%22%7D%29+%7B%0A++++id%0A++++symbol%0A++++name%0A++++decimals%0A++++underlyingAsset%0A++++usageAsCollateralEnabled%0A++++reserveFactor%0A++++baseLTVasCollateral%0A++++averageStableRate%0A++++stableDebtLastUpdateTimestamp%0A++++liquidityIndex%0A++++reserveLiquidationThreshold%0A++++reserveLiquidationBonus%0A++++variableBorrowIndex%0A++++variableBorrowRate%0A++++liquidityRate%0A++++totalPrincipalStableDebt%0A++++totalScaledVariableDebt%0A++++lastUpdateTimestamp%0A++++availableLiquidity%0A++++stableBorrowRate%0A++++totalLiquidity%0A++++price+%7B%0A++++++priceInEth%0A++++%7D%0A++%7D%0A%7D`}
code=
{`{
  // highlight-next-line
  reserves(where: {pool: "0xacc030ef66f9dfeae9cbb0cd1b25654b82cfa8d5"}) { # provide pool address here
    id
    symbol
    name
    decimals
    underlyingAsset
    usageAsCollateralEnabled
    reserveFactor
    baseLTVasCollateral
    averageStableRate
    stableDebtLastUpdateTimestamp
    liquidityIndex
    reserveLiquidationThreshold
    reserveLiquidationBonus
    variableBorrowIndex
    variableBorrowRate
    liquidityRate
    totalPrincipalStableDebt
    totalScaledVariableDebt
    lastUpdateTimestamp
    availableLiquidity
    stableBorrowRate
    totalLiquidity
    price {
      priceInEth
    }
  }
}`}
 />

## Historic Interest Rate for a Specific Reserve

<CodeBlockv2
title="Historic Interest Rate for a Specific Reserve"
text= "We can fetch historic interest rate data for a particular reserve and paginate through the records using the queery below."
subtitle="Query of historic interest rate for a specific reserve"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++reserve%28%0A++++id%3A+%220x514910771af9ca656af840dff83e8264ecf986ca0xb53c1a33016b2dc2ff3653530bff1848a515c8c5%22%0A++%29+%7B%0A++++id%0A++++paramsHistory%28skip%3A+1000%2C+first%3A+1000%29+%7B%0A++++++id%0A++++++variableBorrowRate%0A++++++utilizationRate%0A++++++liquidityRate%0A++++++timestamp%0A++++%7D%0A++%7D%0A%7D`}
code=
{`{
  reserve(
    // highlight-next-line
    id: "0x514910771af9ca656af840dff83e8264ecf986ca0xb53c1a33016b2dc2ff3653530bff1848a515c8c5" # provide reserve address here
  ) {
    id
    paramsHistory(skip: 1000, first: 1000) {
      id
      variableBorrowRate
      utilizationRate
      liquidityRate
      timestamp
    }
  }
}`}
 />

## User Reserve Data

<CodeBlockv2
title="User Reserve Data"
text= "We can fetch the details of a particular user reserve. When an address interacts with the Aave Protocol, an user reserve is created with the user ID being the user's address + the reserve's ID (which is the ERC20 token address)."
subtitle="Query of the user reserve data"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++userReserve%28%0A++++id%3A+%220x00000000000000000000000000000000000000010x6b175474e89094c44da98b954eedeac495271d0f0xb53c1a33016b2dc2ff3653530bff1848a515c8c5%22%0A++%29+%7B%0A++++reserve+%7B%0A++++++id%0A++++++symbol%0A++++%7D%0A++++user+%7B%0A++++++id%0A++++%7D%0A++%7D%0A%7D`}
code=
{`{
  userReserve(
    // highlight-next-line
    id: "0x00000000000000000000000000000000000000010x6b175474e89094c44da98b954eedeac495271d0f0xb53c1a33016b2dc2ff3653530bff1848a515c8c5" # provide user's address + the reserve's ID
  ) {
    reserve {
      id
      symbol
    }
    user {
      id
    }
  }
}`}
 />

## All Reserves of an User

<CodeBlockv2
title="All Reserves of an User"
text= "We can fetch all the reserves (i.e. positions) that a specific user has using the query below."
subtitle="Query of the user's reserves"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++userReserves%28where%3A+%7Buser%3A+%220x0000000000007f150bd6f54c40a34d7c3d5e9f56%22%7D%29+%7B%0A++++id%0A++++reserve+%7B%0A++++++id%0A++++++symbol%0A++++%7D%0A++++user+%7B%0A++++++id%0A++++%7D%0A++%7D%0A%7D`}
code=
{`{
  // highlight-next-line
  userReserves(where: {user: "0x0000000000007f150bd6f54c40a34d7c3d5e9f56"}) { # provide user's address here
    reserve {
      id
      symbol
      underlyingAsset
    }
    scaledATokenBalance
    usageAsCollateralEnabledOnUser
    stableBorrowRate
    scaledVariableDebt
    principalStableDebt
    stableBorrowLastUpdateTimestamp
    user {
      id
    }
  }
}`}
 />

## Recent Deposits for a Particular Asset

<CodeBlockv2
title="Recent Deposits for a Particular Asset"
text= "We can fetch recent deposits for a particular asset using the query below."
subtitle="Query of the recent deposits for a particular asset"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++deposits%28%0A++++orderBy%3A+timestamp%0A++++orderDirection%3A+desc%0A++++where%3A+%7Breserve%3A+%220x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae90xb53c1a33016b2dc2ff3653530bff1848a515c8c5%22%7D%0A++%29+%7B%0A++++id%0A++++amount%0A++++timestamp%0A++%7D%0A%7D`}
code=
{`{
  deposits(
    orderBy: timestamp
    orderDirection: desc
    // highlight-next-line
    where: {reserve: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae90xb53c1a33016b2dc2ff3653530bff1848a515c8c5"} # provide reserve address here
  ) {
    id
    amount
    timestamp
  }
}`}
 />

## Recent Borrows for a Particular Asset

 <CodeBlockv2
title="Recent Borrows for a Particular Asset"
text= "We can fetch recent borrows for a particular asset using the query below."
subtitle="Query of the recent borrows for a particular asset"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++borrows%28%0A++++orderBy%3A+timestamp%0A++++orderDirection%3A+desc%0A++++where%3A+%7Breserve%3A+%220x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae90xb53c1a33016b2dc2ff3653530bff1848a515c8c5%22%7D%0A++%29+%7B%0A++++id%0A++++amount%0A++++timestamp%0A++%7D%0A%7D`}
code=
{`{
  borrows(
    orderBy: timestamp
    orderDirection: desc
    // highlight-next-line
    where: {reserve: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae90xb53c1a33016b2dc2ff3653530bff1848a515c8c5"} # provide reserve address here
  ) {
    id
    amount
    timestamp
  }
}`}
 />

## Recent Flash Loans

 <CodeBlockv2
title="Recent Flash Loans"
text= "We can fetch the 5 most recent Flash Loans using the query below."
subtitle="Query of the recent flash loans for a particular asset"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++flashLoans%28first%3A+5%2C+orderBy%3A+timestamp%2C+orderDirection%3A+desc%29+%7B%0A++++id%0A++++reserve+%7B%0A++++++id%0A++++++name%0A++++++symbol%0A++++%7D%0A++++amount%0A++++totalFee%0A++++timestamp%0A++%7D%0A%7D`}
code=
{`{
  flashLoans(first: 5, orderBy: timestamp, orderDirection: desc) {
    id
    reserve {
      id
      name
      symbol
    }
    amount
    totalFee
    timestamp
  }
}`}
 />

## User Transaction History

<CodeBlockv2
title="User Transaction History"
text= "We can use the query below to get transaction history of a Aave user."
subtitle="User Transaction History Query"
link={`https://eth-v2.aaveql.org/graphql?query=%7B%0A++userTransactions%28%0A++++where%3A+%7B+user%3A+%220xc4a936b003bc223df757b35ee52f6da66b062935%22+%7D%0A++++orderBy%3A+timestamp%0A++++orderDirection%3A+desc%0A++%29+%7B%0A++++id%0A++++timestamp%0A++++txHash%0A++++action%0A++++...+on+Deposit+%7B%0A++++++amount%0A++++++reserve+%7B%0A++++++++symbol%0A++++++++decimals%0A++++++%7D%0A++++++assetPriceUSD%0A++++%7D%0A++++...+on+RedeemUnderlying+%7B%0A++++++amount%0A++++++reserve+%7B%0A++++++++symbol%0A++++++++decimals%0A++++++%7D%0A++++++assetPriceUSD%0A++++%7D%0A++++...+on+Borrow+%7B%0A++++++amount%0A++++++borrowRateMode%0A++++++borrowRate%0A++++++stableTokenDebt%0A++++++variableTokenDebt%0A++++++reserve+%7B%0A++++++++symbol%0A++++++++decimals%0A++++++%7D%0A++++++assetPriceUSD%0A++++%7D%0A++++...+on+UsageAsCollateral+%7B%0A++++++fromState%0A++++++toState%0A++++++reserve+%7B%0A++++++++symbol%0A++++++%7D%0A++++%7D%0A++++...+on+Repay+%7B%0A++++++amount%0A++++++reserve+%7B%0A++++++++symbol%0A++++++++decimals%0A++++++%7D%0A++++++assetPriceUSD%0A++++%7D%0A++++...+on+Swap+%7B%0A++++++borrowRateModeFrom%0A++++++borrowRateModeTo%0A++++++variableBorrowRate%0A++++++stableBorrowRate%0A++++++reserve+%7B%0A++++++++symbol%0A++++++++decimals%0A++++++%7D%0A++++%7D%0A++++...+on+LiquidationCall+%7B%0A++++++collateralAmount%0A++++++collateralReserve+%7B%0A++++++++symbol%0A++++++++decimals%0A++++++%7D%0A++++++principalAmount%0A++++++principalReserve+%7B%0A++++++++symbol%0A++++++++decimals%0A++++++%7D%0A++++++collateralAssetPriceUSD%0A++++++borrowAssetPriceUSD%0A++++%7D%0A++%7D%0A%7D`}
code=
{`{
  userTransactions(
    // highlight-next-line
    where: {user: "0xc4a936b003bc223df757b35ee52f6da66b062935"} # provide user address here
    orderBy: timestamp
    orderDirection: desc
  ) {
    id
    timestamp
    txHash
    action
    ... on Deposit {
      amount
      reserve {
        symbol
        decimals
      }
      assetPriceUSD
    }
    ... on RedeemUnderlying {
      amount
      reserve {
        symbol
        decimals
      }
      assetPriceUSD
    }
    ... on Borrow {
      amount
      borrowRateMode
      borrowRate
      stableTokenDebt
      variableTokenDebt
      reserve {
        symbol
        decimals
      }
      assetPriceUSD
    }
    ... on UsageAsCollateral {
      fromState
      toState
      reserve {
        symbol
      }
    }
    ... on Repay {
      amount
      reserve {
        symbol
        decimals
      }
      assetPriceUSD
    }
    ... on Swap {
      borrowRateModeFrom
      borrowRateModeTo
      variableBorrowRate
      stableBorrowRate
      reserve {
        symbol
        decimals
      }
    }
    ... on LiquidationCall {
      collateralAmount
      collateralReserve {
        symbol
        decimals
      }
      principalAmount
      principalReserve {
        symbol
        decimals
      }
      collateralAssetPriceUSD
      borrowAssetPriceUSD
    }
  }
}`}
 />
