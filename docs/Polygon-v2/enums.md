---
id: enums
title: Enums
slug: enums
sidebar_position: 6
---

## _SubgraphErrorPolicy_



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>allow</td>
<td>
<p>Data will be returned even if the subgraph has indexing errors</p>
</td>
</tr>
<tr>
<td>deny</td>
<td>
<p>If the subgraph has indexing errors, data will be omitted. The default.</p>
</td>
</tr>
</tbody>
</table>

## Action



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>Deposit</td>
<td>

</td>
</tr>
<tr>
<td>RedeemUnderlying</td>
<td>

</td>
</tr>
<tr>
<td>Repay</td>
<td>

</td>
</tr>
<tr>
<td>Borrow</td>
<td>

</td>
</tr>
<tr>
<td>Swap</td>
<td>

</td>
</tr>
<tr>
<td>UsageAsCollateral</td>
<td>

</td>
</tr>
<tr>
<td>RebalanceStableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>LiquidationCall</td>
<td>

</td>
</tr>
</tbody>
</table>

## AToken_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAssetAddress</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAssetDecimals</td>
<td>

</td>
</tr>
<tr>
<td>tokenContractImpl</td>
<td>

</td>
</tr>
</tbody>
</table>

## ATokenBalanceHistoryItem_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
<tr>
<td>scaledATokenBalance</td>
<td>

</td>
</tr>
<tr>
<td>currentATokenBalance</td>
<td>

</td>
</tr>
<tr>
<td>index</td>
<td>

</td>
</tr>
</tbody>
</table>

## Borrow_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>txHash</td>
<td>

</td>
</tr>
<tr>
<td>action</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>caller</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
<tr>
<td>amount</td>
<td>

</td>
</tr>
<tr>
<td>borrowRate</td>
<td>

</td>
</tr>
<tr>
<td>borrowRateMode</td>
<td>

</td>
</tr>
<tr>
<td>referrer</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
<tr>
<td>stableTokenDebt</td>
<td>

</td>
</tr>
<tr>
<td>variableTokenDebt</td>
<td>

</td>
</tr>
<tr>
<td>assetPriceUSD</td>
<td>

</td>
</tr>
</tbody>
</table>

## BorrowRateMode



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>None</td>
<td>

</td>
</tr>
<tr>
<td>Stable</td>
<td>

</td>
</tr>
<tr>
<td>Variable</td>
<td>

</td>
</tr>
</tbody>
</table>

## ChainlinkAggregator_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>oracleAsset</td>
<td>

</td>
</tr>
</tbody>
</table>

## ChainlinkENS_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>aggregatorAddress</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAddress</td>
<td>

</td>
</tr>
<tr>
<td>symbol</td>
<td>

</td>
</tr>
</tbody>
</table>

## ClaimIncentiveCall_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>incentivesController</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>amount</td>
<td>

</td>
</tr>
</tbody>
</table>

## ContractToPoolMapping_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
</tbody>
</table>

## Deposit_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>txHash</td>
<td>

</td>
</tr>
<tr>
<td>action</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>caller</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
<tr>
<td>amount</td>
<td>

</td>
</tr>
<tr>
<td>referrer</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
<tr>
<td>assetPriceUSD</td>
<td>

</td>
</tr>
</tbody>
</table>

## FlashLoan_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>target</td>
<td>

</td>
</tr>
<tr>
<td>amount</td>
<td>

</td>
</tr>
<tr>
<td>totalFee</td>
<td>

</td>
</tr>
<tr>
<td>initiator</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
<tr>
<td>assetPriceUSD</td>
<td>

</td>
</tr>
</tbody>
</table>

## IncentivesController_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>rewardToken</td>
<td>

</td>
</tr>
<tr>
<td>rewardTokenDecimals</td>
<td>

</td>
</tr>
<tr>
<td>rewardTokenSymbol</td>
<td>

</td>
</tr>
<tr>
<td>precision</td>
<td>

</td>
</tr>
<tr>
<td>emissionEndTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>incentivizedActions</td>
<td>

</td>
</tr>
<tr>
<td>claimIncentives</td>
<td>

</td>
</tr>
</tbody>
</table>

## IncentivizedAction_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>incentivesController</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>amount</td>
<td>

</td>
</tr>
</tbody>
</table>

## LiquidationCall_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>txHash</td>
<td>

</td>
</tr>
<tr>
<td>action</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>collateralReserve</td>
<td>

</td>
</tr>
<tr>
<td>collateralUserReserve</td>
<td>

</td>
</tr>
<tr>
<td>collateralAmount</td>
<td>

</td>
</tr>
<tr>
<td>principalReserve</td>
<td>

</td>
</tr>
<tr>
<td>principalUserReserve</td>
<td>

</td>
</tr>
<tr>
<td>principalAmount</td>
<td>

</td>
</tr>
<tr>
<td>liquidator</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
<tr>
<td>collateralAssetPriceUSD</td>
<td>

</td>
</tr>
<tr>
<td>borrowAssetPriceUSD</td>
<td>

</td>
</tr>
</tbody>
</table>

## MapAssetPool_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAsset</td>
<td>

</td>
</tr>
</tbody>
</table>

## OrderDirection

Defines the order direction, either ascending or descending

<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>asc</td>
<td>

</td>
</tr>
<tr>
<td>desc</td>
<td>

</td>
</tr>
</tbody>
</table>

## Pool_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>protocol</td>
<td>

</td>
</tr>
<tr>
<td>lendingPool</td>
<td>

</td>
</tr>
<tr>
<td>lendingPoolCollateralManager</td>
<td>

</td>
</tr>
<tr>
<td>lendingPoolConfiguratorImpl</td>
<td>

</td>
</tr>
<tr>
<td>lendingPoolImpl</td>
<td>

</td>
</tr>
<tr>
<td>lendingPoolConfigurator</td>
<td>

</td>
</tr>
<tr>
<td>proxyPriceProvider</td>
<td>

</td>
</tr>
<tr>
<td>lendingRateOracle</td>
<td>

</td>
</tr>
<tr>
<td>configurationAdmin</td>
<td>

</td>
</tr>
<tr>
<td>ethereumAddress</td>
<td>

</td>
</tr>
<tr>
<td>emergencyAdmin</td>
<td>

</td>
</tr>
<tr>
<td>history</td>
<td>

</td>
</tr>
<tr>
<td>lastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>reserves</td>
<td>

</td>
</tr>
<tr>
<td>depositHistory</td>
<td>

</td>
</tr>
<tr>
<td>redeemUnderlyingHistory</td>
<td>

</td>
</tr>
<tr>
<td>borrowHistory</td>
<td>

</td>
</tr>
<tr>
<td>swapHistory</td>
<td>

</td>
</tr>
<tr>
<td>usageAsCollateralHistory</td>
<td>

</td>
</tr>
<tr>
<td>rebalanceStableBorrowRateHistory</td>
<td>

</td>
</tr>
<tr>
<td>repayHistory</td>
<td>

</td>
</tr>
<tr>
<td>flashLoanHistory</td>
<td>

</td>
</tr>
<tr>
<td>liquidationCallHistory</td>
<td>

</td>
</tr>
<tr>
<td>active</td>
<td>

</td>
</tr>
<tr>
<td>paused</td>
<td>

</td>
</tr>
</tbody>
</table>

## PoolConfigurationHistoryItem_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>active</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>lendingPool</td>
<td>

</td>
</tr>
<tr>
<td>lendingPoolCollateralManager</td>
<td>

</td>
</tr>
<tr>
<td>lendingPoolConfiguratorImpl</td>
<td>

</td>
</tr>
<tr>
<td>lendingPoolImpl</td>
<td>

</td>
</tr>
<tr>
<td>lendingPoolConfigurator</td>
<td>

</td>
</tr>
<tr>
<td>proxyPriceProvider</td>
<td>

</td>
</tr>
<tr>
<td>lendingRateOracle</td>
<td>

</td>
</tr>
<tr>
<td>configurationAdmin</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
</tbody>
</table>

## PriceHistoryItem_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>asset</td>
<td>

</td>
</tr>
<tr>
<td>price</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
</tbody>
</table>

## PriceOracle_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>proxyPriceProvider</td>
<td>

</td>
</tr>
<tr>
<td>usdPriceEth</td>
<td>

</td>
</tr>
<tr>
<td>usdPriceEthMainSource</td>
<td>

</td>
</tr>
<tr>
<td>usdPriceEthFallbackRequired</td>
<td>

</td>
</tr>
<tr>
<td>usdDependentAssets</td>
<td>

</td>
</tr>
<tr>
<td>fallbackPriceOracle</td>
<td>

</td>
</tr>
<tr>
<td>tokens</td>
<td>

</td>
</tr>
<tr>
<td>usdPriceEthHistory</td>
<td>

</td>
</tr>
<tr>
<td>tokensWithFallback</td>
<td>

</td>
</tr>
<tr>
<td>lastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>version</td>
<td>

</td>
</tr>
<tr>
<td>baseCurrency</td>
<td>

</td>
</tr>
<tr>
<td>baseCurrencyUnit</td>
<td>

</td>
</tr>
</tbody>
</table>

## PriceOracleAsset_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>oracle</td>
<td>

</td>
</tr>
<tr>
<td>priceInEth</td>
<td>

</td>
</tr>
<tr>
<td>priceSource</td>
<td>

</td>
</tr>
<tr>
<td>isFallbackRequired</td>
<td>

</td>
</tr>
<tr>
<td>type</td>
<td>

</td>
</tr>
<tr>
<td>platform</td>
<td>

</td>
</tr>
<tr>
<td>dependentAssets</td>
<td>

</td>
</tr>
<tr>
<td>lastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>priceHistory</td>
<td>

</td>
</tr>
<tr>
<td>fromChainlinkSourcesRegistry</td>
<td>

</td>
</tr>
</tbody>
</table>

## PriceOracleAssetPlatform



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>Simple</td>
<td>

</td>
</tr>
<tr>
<td>Uniswap</td>
<td>

</td>
</tr>
</tbody>
</table>

## PriceOracleAssetType



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>Simple</td>
<td>

</td>
</tr>
<tr>
<td>Composite</td>
<td>

</td>
</tr>
</tbody>
</table>

## Protocol_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>pools</td>
<td>

</td>
</tr>
</tbody>
</table>

## RebalanceStableBorrowRate_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>txHash</td>
<td>

</td>
</tr>
<tr>
<td>action</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
<tr>
<td>borrowRateFrom</td>
<td>

</td>
</tr>
<tr>
<td>borrowRateTo</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
</tbody>
</table>

## RedeemUnderlying_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>txHash</td>
<td>

</td>
</tr>
<tr>
<td>action</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>to</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
<tr>
<td>amount</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
<tr>
<td>assetPriceUSD</td>
<td>

</td>
</tr>
</tbody>
</table>

## Referrer_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>deposits</td>
<td>

</td>
</tr>
<tr>
<td>borrows</td>
<td>

</td>
</tr>
</tbody>
</table>

## Repay_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>txHash</td>
<td>

</td>
</tr>
<tr>
<td>action</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>repayer</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
<tr>
<td>amount</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
<tr>
<td>assetPriceUSD</td>
<td>

</td>
</tr>
</tbody>
</table>

## Reserve_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAsset</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>symbol</td>
<td>

</td>
</tr>
<tr>
<td>name</td>
<td>

</td>
</tr>
<tr>
<td>decimals</td>
<td>

</td>
</tr>
<tr>
<td>usageAsCollateralEnabled</td>
<td>

</td>
</tr>
<tr>
<td>borrowingEnabled</td>
<td>

</td>
</tr>
<tr>
<td>stableBorrowRateEnabled</td>
<td>

</td>
</tr>
<tr>
<td>isActive</td>
<td>

</td>
</tr>
<tr>
<td>isFrozen</td>
<td>

</td>
</tr>
<tr>
<td>price</td>
<td>

</td>
</tr>
<tr>
<td>reserveInterestRateStrategy</td>
<td>

</td>
</tr>
<tr>
<td>optimalUtilisationRate</td>
<td>

</td>
</tr>
<tr>
<td>variableRateSlope1</td>
<td>

</td>
</tr>
<tr>
<td>variableRateSlope2</td>
<td>

</td>
</tr>
<tr>
<td>stableRateSlope1</td>
<td>

</td>
</tr>
<tr>
<td>stableRateSlope2</td>
<td>

</td>
</tr>
<tr>
<td>baseVariableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>baseLTVasCollateral</td>
<td>

</td>
</tr>
<tr>
<td>reserveLiquidationThreshold</td>
<td>

</td>
</tr>
<tr>
<td>reserveLiquidationBonus</td>
<td>

</td>
</tr>
<tr>
<td>utilizationRate</td>
<td>

</td>
</tr>
<tr>
<td>totalLiquidity</td>
<td>

</td>
</tr>
<tr>
<td>totalATokenSupply</td>
<td>

</td>
</tr>
<tr>
<td>totalLiquidityAsCollateral</td>
<td>

</td>
</tr>
<tr>
<td>availableLiquidity</td>
<td>

</td>
</tr>
<tr>
<td>totalPrincipalStableDebt</td>
<td>

</td>
</tr>
<tr>
<td>totalScaledVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>totalCurrentVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>totalDeposits</td>
<td>

</td>
</tr>
<tr>
<td>liquidityRate</td>
<td>

</td>
</tr>
<tr>
<td>averageStableRate</td>
<td>

</td>
</tr>
<tr>
<td>variableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>stableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>liquidityIndex</td>
<td>

</td>
</tr>
<tr>
<td>variableBorrowIndex</td>
<td>

</td>
</tr>
<tr>
<td>aToken</td>
<td>

</td>
</tr>
<tr>
<td>vToken</td>
<td>

</td>
</tr>
<tr>
<td>sToken</td>
<td>

</td>
</tr>
<tr>
<td>reserveFactor</td>
<td>

</td>
</tr>
<tr>
<td>lastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>stableDebtLastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>aEmissionPerSecond</td>
<td>

</td>
</tr>
<tr>
<td>vEmissionPerSecond</td>
<td>

</td>
</tr>
<tr>
<td>sEmissionPerSecond</td>
<td>

</td>
</tr>
<tr>
<td>aTokenIncentivesIndex</td>
<td>

</td>
</tr>
<tr>
<td>vTokenIncentivesIndex</td>
<td>

</td>
</tr>
<tr>
<td>sTokenIncentivesIndex</td>
<td>

</td>
</tr>
<tr>
<td>aIncentivesLastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>vIncentivesLastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>sIncentivesLastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeLiquidity</td>
<td>

</td>
</tr>
<tr>
<td>lifetimePrincipalStableDebt</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeScaledVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeCurrentVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeRepayments</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeWithdrawals</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeBorrows</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeLiquidated</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeFlashLoans</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeFlashLoanPremium</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeDepositorsInterestEarned</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeReserveFactorAccrued</td>
<td>

</td>
</tr>
<tr>
<td>userReserves</td>
<td>

</td>
</tr>
<tr>
<td>depositHistory</td>
<td>

</td>
</tr>
<tr>
<td>redeemUnderlyingHistory</td>
<td>

</td>
</tr>
<tr>
<td>borrowHistory</td>
<td>

</td>
</tr>
<tr>
<td>usageAsCollateralHistory</td>
<td>

</td>
</tr>
<tr>
<td>swapHistory</td>
<td>

</td>
</tr>
<tr>
<td>rebalanceStableBorrowRateHistory</td>
<td>

</td>
</tr>
<tr>
<td>repayHistory</td>
<td>

</td>
</tr>
<tr>
<td>flashLoanHistory</td>
<td>

</td>
</tr>
<tr>
<td>liquidationCallHistory</td>
<td>

</td>
</tr>
<tr>
<td>paramsHistory</td>
<td>

</td>
</tr>
<tr>
<td>configurationHistory</td>
<td>

</td>
</tr>
<tr>
<td>deposits</td>
<td>

</td>
</tr>
</tbody>
</table>

## ReserveConfigurationHistoryItem_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>usageAsCollateralEnabled</td>
<td>

</td>
</tr>
<tr>
<td>borrowingEnabled</td>
<td>

</td>
</tr>
<tr>
<td>stableBorrowRateEnabled</td>
<td>

</td>
</tr>
<tr>
<td>isActive</td>
<td>

</td>
</tr>
<tr>
<td>isFrozen</td>
<td>

</td>
</tr>
<tr>
<td>reserveInterestRateStrategy</td>
<td>

</td>
</tr>
<tr>
<td>baseLTVasCollateral</td>
<td>

</td>
</tr>
<tr>
<td>reserveLiquidationThreshold</td>
<td>

</td>
</tr>
<tr>
<td>reserveLiquidationBonus</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
</tbody>
</table>

## ReserveParamsHistoryItem_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>variableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>variableBorrowIndex</td>
<td>

</td>
</tr>
<tr>
<td>utilizationRate</td>
<td>

</td>
</tr>
<tr>
<td>stableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>averageStableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>liquidityIndex</td>
<td>

</td>
</tr>
<tr>
<td>liquidityRate</td>
<td>

</td>
</tr>
<tr>
<td>totalLiquidity</td>
<td>

</td>
</tr>
<tr>
<td>totalATokenSupply</td>
<td>

</td>
</tr>
<tr>
<td>totalLiquidityAsCollateral</td>
<td>

</td>
</tr>
<tr>
<td>availableLiquidity</td>
<td>

</td>
</tr>
<tr>
<td>priceInEth</td>
<td>

</td>
</tr>
<tr>
<td>priceInUsd</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
<tr>
<td>totalScaledVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>totalCurrentVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>totalPrincipalStableDebt</td>
<td>

</td>
</tr>
<tr>
<td>lifetimePrincipalStableDebt</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeScaledVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeCurrentVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeLiquidity</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeRepayments</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeWithdrawals</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeBorrows</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeLiquidated</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeFlashLoans</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeFlashLoanPremium</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeReserveFactorAccrued</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeDepositorsInterestEarned</td>
<td>

</td>
</tr>
</tbody>
</table>

## StableDebtToken_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAssetAddress</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAssetDecimals</td>
<td>

</td>
</tr>
</tbody>
</table>

## StableTokenDelegatedAllowance_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>fromUser</td>
<td>

</td>
</tr>
<tr>
<td>toUser</td>
<td>

</td>
</tr>
<tr>
<td>amountAllowed</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
</tbody>
</table>

## SToken_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAssetAddress</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAssetDecimals</td>
<td>

</td>
</tr>
<tr>
<td>tokenContractImpl</td>
<td>

</td>
</tr>
</tbody>
</table>

## STokenBalanceHistoryItem_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
<tr>
<td>principalStableDebt</td>
<td>

</td>
</tr>
<tr>
<td>currentStableDebt</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
<tr>
<td>avgStableBorrowRate</td>
<td>

</td>
</tr>
</tbody>
</table>

## Swap_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>txHash</td>
<td>

</td>
</tr>
<tr>
<td>action</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
<tr>
<td>borrowRateModeFrom</td>
<td>

</td>
</tr>
<tr>
<td>borrowRateModeTo</td>
<td>

</td>
</tr>
<tr>
<td>stableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>variableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
</tbody>
</table>

## SwapHistory_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>fromAsset</td>
<td>

</td>
</tr>
<tr>
<td>toAsset</td>
<td>

</td>
</tr>
<tr>
<td>fromAmount</td>
<td>

</td>
</tr>
<tr>
<td>receivedAmount</td>
<td>

</td>
</tr>
<tr>
<td>swapType</td>
<td>

</td>
</tr>
</tbody>
</table>

## UsageAsCollateral_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>txHash</td>
<td>

</td>
</tr>
<tr>
<td>action</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
<tr>
<td>fromState</td>
<td>

</td>
</tr>
<tr>
<td>toState</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
</tbody>
</table>

## UsdEthPriceHistoryItem_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>oracle</td>
<td>

</td>
</tr>
<tr>
<td>price</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
</tbody>
</table>

## User_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>borrowedReservesCount</td>
<td>

</td>
</tr>
<tr>
<td>unclaimedRewards</td>
<td>

</td>
</tr>
<tr>
<td>lifetimeRewards</td>
<td>

</td>
</tr>
<tr>
<td>incentivesLastUpdated</td>
<td>

</td>
</tr>
<tr>
<td>reserves</td>
<td>

</td>
</tr>
<tr>
<td>depositHistory</td>
<td>

</td>
</tr>
<tr>
<td>redeemUnderlyingHistory</td>
<td>

</td>
</tr>
<tr>
<td>usageAsCollateralHistory</td>
<td>

</td>
</tr>
<tr>
<td>borrowHistory</td>
<td>

</td>
</tr>
<tr>
<td>swapHistory</td>
<td>

</td>
</tr>
<tr>
<td>rebalanceStableBorrowRateHistory</td>
<td>

</td>
</tr>
<tr>
<td>repayHistory</td>
<td>

</td>
</tr>
<tr>
<td>liquidationCallHistory</td>
<td>

</td>
</tr>
<tr>
<td>incentivizedActions</td>
<td>

</td>
</tr>
<tr>
<td>claimIncentives</td>
<td>

</td>
</tr>
</tbody>
</table>

## UserReserve_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>reserve</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>usageAsCollateralEnabledOnUser</td>
<td>

</td>
</tr>
<tr>
<td>scaledATokenBalance</td>
<td>

</td>
</tr>
<tr>
<td>currentATokenBalance</td>
<td>

</td>
</tr>
<tr>
<td>scaledVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>currentVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>principalStableDebt</td>
<td>

</td>
</tr>
<tr>
<td>currentStableDebt</td>
<td>

</td>
</tr>
<tr>
<td>currentTotalDebt</td>
<td>

</td>
</tr>
<tr>
<td>stableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>oldStableBorrowRate</td>
<td>

</td>
</tr>
<tr>
<td>liquidityRate</td>
<td>

</td>
</tr>
<tr>
<td>stableBorrowLastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>variableBorrowIndex</td>
<td>

</td>
</tr>
<tr>
<td>aTokenincentivesUserIndex</td>
<td>

</td>
</tr>
<tr>
<td>vTokenincentivesUserIndex</td>
<td>

</td>
</tr>
<tr>
<td>sTokenincentivesUserIndex</td>
<td>

</td>
</tr>
<tr>
<td>aIncentivesLastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>vIncentivesLastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>sIncentivesLastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>lastUpdateTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>stableTokenDelegatedAllowances</td>
<td>

</td>
</tr>
<tr>
<td>variableTokenDelegatedAllowances</td>
<td>

</td>
</tr>
<tr>
<td>aTokenBalanceHistory</td>
<td>

</td>
</tr>
<tr>
<td>vTokenBalanceHistory</td>
<td>

</td>
</tr>
<tr>
<td>sTokenBalanceHistory</td>
<td>

</td>
</tr>
<tr>
<td>usageAsCollateralHistory</td>
<td>

</td>
</tr>
<tr>
<td>depositHistory</td>
<td>

</td>
</tr>
<tr>
<td>redeemUnderlyingHistory</td>
<td>

</td>
</tr>
<tr>
<td>borrowHistory</td>
<td>

</td>
</tr>
<tr>
<td>swapHistory</td>
<td>

</td>
</tr>
<tr>
<td>rebalanceStableBorrowRateHistory</td>
<td>

</td>
</tr>
<tr>
<td>repayHistory</td>
<td>

</td>
</tr>
<tr>
<td>liquidationCallHistory</td>
<td>

</td>
</tr>
</tbody>
</table>

## UserTransaction_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>txHash</td>
<td>

</td>
</tr>
<tr>
<td>action</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>user</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
</tbody>
</table>

## VariableDebtToken_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAssetAddress</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAssetDecimals</td>
<td>

</td>
</tr>
</tbody>
</table>

## VariableTokenDelegatedAllowance_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>fromUser</td>
<td>

</td>
</tr>
<tr>
<td>toUser</td>
<td>

</td>
</tr>
<tr>
<td>amountAllowed</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
</tbody>
</table>

## VToken_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>pool</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAssetAddress</td>
<td>

</td>
</tr>
<tr>
<td>underlyingAssetDecimals</td>
<td>

</td>
</tr>
<tr>
<td>tokenContractImpl</td>
<td>

</td>
</tr>
</tbody>
</table>

## VTokenBalanceHistoryItem_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>userReserve</td>
<td>

</td>
</tr>
<tr>
<td>scaledVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>currentVariableDebt</td>
<td>

</td>
</tr>
<tr>
<td>timestamp</td>
<td>

</td>
</tr>
<tr>
<td>index</td>
<td>

</td>
</tr>
</tbody>
</table>

## WETHReserve_orderBy



<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>

<table>
<thead><tr><th>Value</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>id</td>
<td>

</td>
</tr>
<tr>
<td>address</td>
<td>

</td>
</tr>
<tr>
<td>symbol</td>
<td>

</td>
</tr>
<tr>
<td>name</td>
<td>

</td>
</tr>
<tr>
<td>decimals</td>
<td>

</td>
</tr>
<tr>
<td>updatedTimestamp</td>
<td>

</td>
</tr>
<tr>
<td>updatedBlockNumber</td>
<td>

</td>
</tr>
</tbody>
</table>

