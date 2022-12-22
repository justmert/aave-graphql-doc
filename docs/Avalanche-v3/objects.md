---
id: objects
title: Objects
slug: objects
sidebar_position: 4
description: Objects of the Graphql Schema
---

## _Block_



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
hash<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes</code></a>
</td>
<td>
<p>The hash of the block</p>
</td>
</tr>
<tr>
<td>
number<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>
<p>The block number</p>
</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Integer representation of the timestamp stored in blocks for the chain</p>
</td>
</tr>
</tbody>
</table>

## _Meta_

The type for the top-level _meta field

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
block<br />
<a href="/docs/Avalanche-v3/objects#_block_"><code>_Block_!</code></a>
</td>
<td>
<p>Information about a specific subgraph block. The hash of the block
will be null if the _meta field has a block constraint that asks for
a block number. It will be filled if the _meta field has no block constraint
and therefore asks for the latest  block</p>
</td>
</tr>
<tr>
<td>
deployment<br />
<a href="/docs/Avalanche-v3/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The deployment ID</p>
</td>
</tr>
<tr>
<td>
hasIndexingErrors<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>If <code>true</code>, the subgraph encountered indexing errors at some past block</p>
</td>
</tr>
</tbody>
</table>

## ATokenBalanceHistoryItem



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>userReserve + txHash</p>
</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scaledATokenBalance<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentATokenBalance<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
index<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## BackUnbacked



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
backer<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
fee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lpFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
protocolFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Borrow



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Avalanche-v3/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Avalanche-v3/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
caller<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRateMode<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
referrer<br />
<a href="/docs/Avalanche-v3/objects#referrer"><code>Referrer</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableTokenDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableTokenDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetPriceUSD<br />
<a href="/docs/Avalanche-v3/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## ChainlinkAggregator



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
oracleAsset<br />
<a href="/docs/Avalanche-v3/objects#priceoracleasset"><code>PriceOracleAsset!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## ClaimRewardsCall



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>txHash</p>
</td>
</tr>
<tr>
<td>
rewardsController<br />
<a href="/docs/Avalanche-v3/objects#rewardscontroller"><code>RewardsController!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
to<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
caller<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## ContractToPoolMapping



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## EModeCategory



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>id: categoryId</p>
</td>
</tr>
<tr>
<td>
ltv<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidationThreshold<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidationBonus<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
oracle<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
label<br />
<a href="/docs/Avalanche-v3/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## FlashLoan



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
target<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lpFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
protocolFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
initiator<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## IsolationModeTotalDebtUpdated



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isolatedDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## LiquidationCall



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Avalanche-v3/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Avalanche-v3/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
collateralReserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
collateralUserReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
collateralAmount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
principalReserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
principalUserReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
principalAmount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidator<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
collateralAssetPriceUSD<br />
<a href="/docs/Avalanche-v3/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowAssetPriceUSD<br />
<a href="/docs/Avalanche-v3/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## MapAssetPool



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>address of a /s /v token</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAsset<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## MintedToTreasury



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## MintUnbacked



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
caller<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
referral<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Pool



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
addressProviderId<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
protocol<br />
<a href="/docs/Avalanche-v3/objects#protocol"><code>Protocol!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
poolCollateralManager<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
poolConfiguratorImpl<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
poolImpl<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
poolConfigurator<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
proxyPriceProvider<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lastUpdateTimestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
bridgeProtocolFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
flashloanPremiumTotal<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
flashloanPremiumToProtocol<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserves<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>[Reserve!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#reserve_orderby"><code>Reserve_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#reserve_filter"><code>Reserve_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
supplyHistory<br />
<a href="/docs/Avalanche-v3/objects#supply"><code>[Supply!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#supply_orderby"><code>Supply_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#supply_filter"><code>Supply_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
mintUnbackedHistory<br />
<a href="/docs/Avalanche-v3/objects#mintunbacked"><code>[MintUnbacked!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#mintunbacked_orderby"><code>MintUnbacked_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#mintunbacked_filter"><code>MintUnbacked_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
backUnbackedHistory<br />
<a href="/docs/Avalanche-v3/objects#backunbacked"><code>[BackUnbacked!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#backunbacked_orderby"><code>BackUnbacked_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#backunbacked_filter"><code>BackUnbacked_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
mintedToTreasuryHistory<br />
<a href="/docs/Avalanche-v3/objects#mintedtotreasury"><code>[MintedToTreasury!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#mintedtotreasury_orderby"><code>MintedToTreasury_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#mintedtotreasury_filter"><code>MintedToTreasury_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
isolationModeTotalDebtUpdatedHistory<br />
<a href="/docs/Avalanche-v3/objects#isolationmodetotaldebtupdated"><code>[IsolationModeTotalDebtUpdated!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#isolationmodetotaldebtupdated_orderby"><code>IsolationModeTotalDebtUpdated_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#isolationmodetotaldebtupdated_filter"><code>IsolationModeTotalDebtUpdated_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
redeemUnderlyingHistory<br />
<a href="/docs/Avalanche-v3/objects#redeemunderlying"><code>[RedeemUnderlying!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#redeemunderlying_orderby"><code>RedeemUnderlying_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#redeemunderlying_filter"><code>RedeemUnderlying_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
borrowHistory<br />
<a href="/docs/Avalanche-v3/objects#borrow"><code>[Borrow!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
swapHistory<br />
<a href="/docs/Avalanche-v3/objects#swapborrowrate"><code>[SwapBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#swapborrowrate_orderby"><code>SwapBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#swapborrowrate_filter"><code>SwapBorrowRate_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
usageAsCollateralHistory<br />
<a href="/docs/Avalanche-v3/objects#usageascollateral"><code>[UsageAsCollateral!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#usageascollateral_orderby"><code>UsageAsCollateral_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#usageascollateral_filter"><code>UsageAsCollateral_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
rebalanceStableBorrowRateHistory<br />
<a href="/docs/Avalanche-v3/objects#rebalancestableborrowrate"><code>[RebalanceStableBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#rebalancestableborrowrate_orderby"><code>RebalanceStableBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#rebalancestableborrowrate_filter"><code>RebalanceStableBorrowRate_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
repayHistory<br />
<a href="/docs/Avalanche-v3/objects#repay"><code>[Repay!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#repay_orderby"><code>Repay_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#repay_filter"><code>Repay_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
flashLoanHistory<br />
<a href="/docs/Avalanche-v3/objects#flashloan"><code>[FlashLoan!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#flashloan_orderby"><code>FlashLoan_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#flashloan_filter"><code>FlashLoan_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
liquidationCallHistory<br />
<a href="/docs/Avalanche-v3/objects#liquidationcall"><code>[LiquidationCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#liquidationcall_orderby"><code>LiquidationCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#liquidationcall_filter"><code>LiquidationCall_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
active<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paused<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PriceHistoryItem



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
asset<br />
<a href="/docs/Avalanche-v3/objects#priceoracleasset"><code>PriceOracleAsset!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
price<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PriceOracle



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
proxyPriceProvider<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usdPriceEth<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usdPriceEthMainSource<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usdPriceEthFallbackRequired<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usdDependentAssets<br />
<a href="/docs/Avalanche-v3/objects#priceoracleasset"><code>[PriceOracleAsset!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#priceoracleasset_orderby"><code>PriceOracleAsset_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#priceoracleasset_filter"><code>PriceOracleAsset_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
fallbackPriceOracle<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
tokens<br />
<a href="/docs/Avalanche-v3/objects#priceoracleasset"><code>[PriceOracleAsset!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#priceoracleasset_orderby"><code>PriceOracleAsset_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#priceoracleasset_filter"><code>PriceOracleAsset_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
usdPriceEthHistory<br />
<a href="/docs/Avalanche-v3/objects#usdethpricehistoryitem"><code>[UsdEthPriceHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#usdethpricehistoryitem_orderby"><code>UsdEthPriceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#usdethpricehistoryitem_filter"><code>UsdEthPriceHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
tokensWithFallback<br />
<a href="/docs/Avalanche-v3/objects#priceoracleasset"><code>[PriceOracleAsset!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#priceoracleasset_orderby"><code>PriceOracleAsset_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#priceoracleasset_filter"><code>PriceOracleAsset_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
lastUpdateTimestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
version<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
baseCurrency<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
baseCurrencyUnit<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PriceOracleAsset



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
oracle<br />
<a href="/docs/Avalanche-v3/objects#priceoracle"><code>PriceOracle!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
priceInEth<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
priceSource<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isFallbackRequired<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
type<br />
<a href="/docs/Avalanche-v3/enums#priceoracleassettype"><code>PriceOracleAssetType!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
platform<br />
<a href="/docs/Avalanche-v3/enums#priceoracleassetplatform"><code>PriceOracleAssetPlatform!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
dependentAssets<br />
<a href="/docs/Avalanche-v3/objects#priceoracleasset"><code>[PriceOracleAsset!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#priceoracleasset_orderby"><code>PriceOracleAsset_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#priceoracleasset_filter"><code>PriceOracleAsset_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
lastUpdateTimestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
priceHistory<br />
<a href="/docs/Avalanche-v3/objects#pricehistoryitem"><code>[PriceHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#pricehistoryitem_orderby"><code>PriceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#pricehistoryitem_filter"><code>PriceHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
fromChainlinkSourcesRegistry<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Protocol



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pools<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>[Pool!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#pool_orderby"><code>Pool_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#pool_filter"><code>Pool_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## RebalanceStableBorrowRate



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Avalanche-v3/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Avalanche-v3/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRateFrom<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRateTo<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## RedeemUnderlying



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Avalanche-v3/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Avalanche-v3/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
to<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetPriceUSD<br />
<a href="/docs/Avalanche-v3/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Referrer



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
supplies<br />
<a href="/docs/Avalanche-v3/objects#supply"><code>[Supply!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#supply_orderby"><code>Supply_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#supply_filter"><code>Supply_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
borrows<br />
<a href="/docs/Avalanche-v3/objects#borrow"><code>[Borrow!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## Repay



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Avalanche-v3/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Avalanche-v3/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
repayer<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
useATokens<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetPriceUSD<br />
<a href="/docs/Avalanche-v3/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Reserve



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Reserve address</p>
</td>
</tr>
<tr>
<td>
underlyingAsset<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
symbol<br />
<a href="/docs/Avalanche-v3/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
name<br />
<a href="/docs/Avalanche-v3/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
decimals<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usageAsCollateralEnabled<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowingEnabled<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRateEnabled<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isActive<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isFrozen<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
price<br />
<a href="/docs/Avalanche-v3/objects#priceoracleasset"><code>PriceOracleAsset!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveInterestRateStrategy<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
optimalUtilisationRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableRateSlope1<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableRateSlope2<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableRateSlope1<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableRateSlope2<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
baseVariableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
baseLTVasCollateral<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveLiquidationThreshold<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveLiquidationBonus<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
utilizationRate<br />
<a href="/docs/Avalanche-v3/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalLiquidity<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalATokenSupply<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalLiquidityAsCollateral<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
availableLiquidity<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalPrincipalStableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalScaledVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalCurrentVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalSupplies<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidityRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
accruedToTreasury<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
averageStableRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidityIndex<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowIndex<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
aToken<br />
<a href="/docs/Avalanche-v3/objects#subtoken"><code>SubToken!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
vToken<br />
<a href="/docs/Avalanche-v3/objects#subtoken"><code>SubToken!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sToken<br />
<a href="/docs/Avalanche-v3/objects#subtoken"><code>SubToken!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveFactor<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lastUpdateTimestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableDebtLastUpdateTimestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isPaused<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isDropped<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowCap<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
supplyCap<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
debtCeiling<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
unbackedMintCap<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidationProtocolFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowableInIsolation<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
eMode<br />
<a href="/docs/Avalanche-v3/objects#emodecategory"><code>EModeCategory</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
siloedBorrowing<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeLiquidity<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimePrincipalStableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeScaledVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeCurrentVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeRepayments<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeWithdrawals<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeBorrows<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeLiquidated<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoans<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoanPremium<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoanLPPremium<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoanProtocolPremium<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimePortalLPFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimePortalProtocolFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeSuppliersInterestEarned<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeReserveFactorAccrued<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserves<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>[UserReserve!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#userreserve_orderby"><code>UserReserve_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#userreserve_filter"><code>UserReserve_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
supplyHistory<br />
<a href="/docs/Avalanche-v3/objects#supply"><code>[Supply!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#supply_orderby"><code>Supply_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#supply_filter"><code>Supply_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
mintUnbackedHistory<br />
<a href="/docs/Avalanche-v3/objects#mintunbacked"><code>[MintUnbacked!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#mintunbacked_orderby"><code>MintUnbacked_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#mintunbacked_filter"><code>MintUnbacked_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
backUnbackedHistory<br />
<a href="/docs/Avalanche-v3/objects#backunbacked"><code>[BackUnbacked!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#backunbacked_orderby"><code>BackUnbacked_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#backunbacked_filter"><code>BackUnbacked_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
mintedToTreasuryHistory<br />
<a href="/docs/Avalanche-v3/objects#mintedtotreasury"><code>[MintedToTreasury!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#mintedtotreasury_orderby"><code>MintedToTreasury_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#mintedtotreasury_filter"><code>MintedToTreasury_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
isolationModeTotalDebtUpdatedHistory<br />
<a href="/docs/Avalanche-v3/objects#isolationmodetotaldebtupdated"><code>[IsolationModeTotalDebtUpdated!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#isolationmodetotaldebtupdated_orderby"><code>IsolationModeTotalDebtUpdated_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#isolationmodetotaldebtupdated_filter"><code>IsolationModeTotalDebtUpdated_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
redeemUnderlyingHistory<br />
<a href="/docs/Avalanche-v3/objects#redeemunderlying"><code>[RedeemUnderlying!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#redeemunderlying_orderby"><code>RedeemUnderlying_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#redeemunderlying_filter"><code>RedeemUnderlying_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
borrowHistory<br />
<a href="/docs/Avalanche-v3/objects#borrow"><code>[Borrow!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
usageAsCollateralHistory<br />
<a href="/docs/Avalanche-v3/objects#usageascollateral"><code>[UsageAsCollateral!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#usageascollateral_orderby"><code>UsageAsCollateral_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#usageascollateral_filter"><code>UsageAsCollateral_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
swapHistory<br />
<a href="/docs/Avalanche-v3/objects#swapborrowrate"><code>[SwapBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#swapborrowrate_orderby"><code>SwapBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#swapborrowrate_filter"><code>SwapBorrowRate_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
rebalanceStableBorrowRateHistory<br />
<a href="/docs/Avalanche-v3/objects#rebalancestableborrowrate"><code>[RebalanceStableBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#rebalancestableborrowrate_orderby"><code>RebalanceStableBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#rebalancestableborrowrate_filter"><code>RebalanceStableBorrowRate_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
repayHistory<br />
<a href="/docs/Avalanche-v3/objects#repay"><code>[Repay!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#repay_orderby"><code>Repay_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#repay_filter"><code>Repay_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
flashLoanHistory<br />
<a href="/docs/Avalanche-v3/objects#flashloan"><code>[FlashLoan!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#flashloan_orderby"><code>FlashLoan_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#flashloan_filter"><code>FlashLoan_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
liquidationCallHistory<br />
<a href="/docs/Avalanche-v3/objects#liquidationcall"><code>[LiquidationCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#liquidationcall_orderby"><code>LiquidationCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#liquidationcall_filter"><code>LiquidationCall_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
paramsHistory<br />
<a href="/docs/Avalanche-v3/objects#reserveparamshistoryitem"><code>[ReserveParamsHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#reserveparamshistoryitem_orderby"><code>ReserveParamsHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#reserveparamshistoryitem_filter"><code>ReserveParamsHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
configurationHistory<br />
<a href="/docs/Avalanche-v3/objects#reserveconfigurationhistoryitem"><code>[ReserveConfigurationHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#reserveconfigurationhistoryitem_orderby"><code>ReserveConfigurationHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#reserveconfigurationhistoryitem_filter"><code>ReserveConfigurationHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
supplies<br />
<a href="/docs/Avalanche-v3/objects#supply"><code>[Supply!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#supply_orderby"><code>Supply_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#supply_filter"><code>Supply_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## ReserveConfigurationHistoryItem



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usageAsCollateralEnabled<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowingEnabled<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRateEnabled<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isActive<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isFrozen<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveInterestRateStrategy<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
baseLTVasCollateral<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveLiquidationThreshold<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveLiquidationBonus<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## ReserveParamsHistoryItem



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowIndex<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
utilizationRate<br />
<a href="/docs/Avalanche-v3/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
averageStableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidityIndex<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidityRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalLiquidity<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalATokenSupply<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalLiquidityAsCollateral<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
availableLiquidity<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
priceInEth<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
priceInUsd<br />
<a href="/docs/Avalanche-v3/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
accruedToTreasury<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalScaledVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalCurrentVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalPrincipalStableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimePrincipalStableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeScaledVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeCurrentVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeLiquidity<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeRepayments<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeWithdrawals<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeBorrows<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeLiquidated<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoans<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoanPremium<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoanLPPremium<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoanProtocolPremium<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeReserveFactorAccrued<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimePortalLPFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimePortalProtocolFee<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeSuppliersInterestEarned<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Reward



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>address of ic:asset:reward</p>
</td>
</tr>
<tr>
<td>
rewardToken<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
asset<br />
<a href="/docs/Avalanche-v3/objects#subtoken"><code>SubToken!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
rewardTokenDecimals<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
rewardFeedOracle<br />
<a href="/docs/Avalanche-v3/objects#rewardfeedoracle"><code>RewardFeedOracle!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
rewardTokenSymbol<br />
<a href="/docs/Avalanche-v3/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
index<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
precision<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
distributionEnd<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
emissionsPerSecond<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
rewardsController<br />
<a href="/docs/Avalanche-v3/objects#rewardscontroller"><code>RewardsController!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
updatedAt<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## RewardedAction



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>txHash</p>
</td>
</tr>
<tr>
<td>
rewardsController<br />
<a href="/docs/Avalanche-v3/objects#rewardscontroller"><code>RewardsController!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## RewardFeedOracle



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>address of reward</p>
</td>
</tr>
<tr>
<td>
rewardFeedAddress<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
updatedAt<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## RewardsController



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>address of the incentives controller</p>
</td>
</tr>
<tr>
<td>
rewards<br />
<a href="/docs/Avalanche-v3/objects#reward"><code>[Reward!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#reward_orderby"><code>Reward_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#reward_filter"><code>Reward_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
rewardedActions<br />
<a href="/docs/Avalanche-v3/objects#rewardedaction"><code>[RewardedAction!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#rewardedaction_orderby"><code>RewardedAction_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#rewardedaction_filter"><code>RewardedAction_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
claimIncentives<br />
<a href="/docs/Avalanche-v3/objects#claimrewardscall"><code>[ClaimRewardsCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#claimrewardscall_orderby"><code>ClaimRewardsCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#claimrewardscall_filter"><code>ClaimRewardsCall_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## StableTokenDelegatedAllowance



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>stable + fromuser address + touser address+ reserve address</p>
</td>
</tr>
<tr>
<td>
fromUser<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
toUser<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amountAllowed<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## STokenBalanceHistoryItem



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>userReserve + txHash</p>
</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
principalStableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentStableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
avgStableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## SubToken



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>SubToken address</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
tokenContractImpl<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetAddress<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetDecimals<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
rewards<br />
<a href="/docs/Avalanche-v3/objects#reward"><code>[Reward!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#reward_orderby"><code>Reward_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#reward_filter"><code>Reward_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## Supply



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Avalanche-v3/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Avalanche-v3/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
caller<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
referrer<br />
<a href="/docs/Avalanche-v3/objects#referrer"><code>Referrer</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetPriceUSD<br />
<a href="/docs/Avalanche-v3/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## SwapBorrowRate



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Avalanche-v3/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Avalanche-v3/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRateModeFrom<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRateModeTo<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## SwapHistory



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
fromAsset<br />
<a href="/docs/Avalanche-v3/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
toAsset<br />
<a href="/docs/Avalanche-v3/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
fromAmount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
receivedAmount<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
swapType<br />
<a href="/docs/Avalanche-v3/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## UsageAsCollateral



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Avalanche-v3/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Avalanche-v3/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Avalanche-v3/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
fromState<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
toState<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## UsdEthPriceHistoryItem



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
oracle<br />
<a href="/docs/Avalanche-v3/objects#priceoracle"><code>PriceOracle!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
price<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## User



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>user address</p>
</td>
</tr>
<tr>
<td>
borrowedReservesCount<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
unclaimedRewards<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeRewards<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
rewardsLastUpdated<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
rewards<br />
<a href="/docs/Avalanche-v3/objects#userreward"><code>[UserReward!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#userreward_orderby"><code>UserReward_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#userreward_filter"><code>UserReward_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
eModeCategoryId<br />
<a href="/docs/Avalanche-v3/objects#emodecategory"><code>EModeCategory</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserves<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>[UserReserve!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#userreserve_orderby"><code>UserReserve_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#userreserve_filter"><code>UserReserve_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
supplyHistory<br />
<a href="/docs/Avalanche-v3/objects#supply"><code>[Supply!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#supply_orderby"><code>Supply_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#supply_filter"><code>Supply_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
mintUnbackedHistory<br />
<a href="/docs/Avalanche-v3/objects#mintunbacked"><code>[MintUnbacked!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#mintunbacked_orderby"><code>MintUnbacked_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#mintunbacked_filter"><code>MintUnbacked_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
backUnbackedHistory<br />
<a href="/docs/Avalanche-v3/objects#backunbacked"><code>[BackUnbacked!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#backunbacked_orderby"><code>BackUnbacked_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#backunbacked_filter"><code>BackUnbacked_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
userEmodeSetHistory<br />
<a href="/docs/Avalanche-v3/objects#useremodeset"><code>[UserEModeSet!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#useremodeset_orderby"><code>UserEModeSet_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#useremodeset_filter"><code>UserEModeSet_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
redeemUnderlyingHistory<br />
<a href="/docs/Avalanche-v3/objects#redeemunderlying"><code>[RedeemUnderlying!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#redeemunderlying_orderby"><code>RedeemUnderlying_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#redeemunderlying_filter"><code>RedeemUnderlying_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
usageAsCollateralHistory<br />
<a href="/docs/Avalanche-v3/objects#usageascollateral"><code>[UsageAsCollateral!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#usageascollateral_orderby"><code>UsageAsCollateral_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#usageascollateral_filter"><code>UsageAsCollateral_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
borrowHistory<br />
<a href="/docs/Avalanche-v3/objects#borrow"><code>[Borrow!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
swapHistory<br />
<a href="/docs/Avalanche-v3/objects#swapborrowrate"><code>[SwapBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#swapborrowrate_orderby"><code>SwapBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#swapborrowrate_filter"><code>SwapBorrowRate_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
rebalanceStableBorrowRateHistory<br />
<a href="/docs/Avalanche-v3/objects#rebalancestableborrowrate"><code>[RebalanceStableBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#rebalancestableborrowrate_orderby"><code>RebalanceStableBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#rebalancestableborrowrate_filter"><code>RebalanceStableBorrowRate_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
repayHistory<br />
<a href="/docs/Avalanche-v3/objects#repay"><code>[Repay!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#repay_orderby"><code>Repay_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#repay_filter"><code>Repay_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
liquidationCallHistory<br />
<a href="/docs/Avalanche-v3/objects#liquidationcall"><code>[LiquidationCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#liquidationcall_orderby"><code>LiquidationCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#liquidationcall_filter"><code>LiquidationCall_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
rewardedActions<br />
<a href="/docs/Avalanche-v3/objects#rewardedaction"><code>[RewardedAction!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#rewardedaction_orderby"><code>RewardedAction_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#rewardedaction_filter"><code>RewardedAction_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
claimRewards<br />
<a href="/docs/Avalanche-v3/objects#claimrewardscall"><code>[ClaimRewardsCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#claimrewardscall_orderby"><code>ClaimRewardsCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#claimrewardscall_filter"><code>ClaimRewardsCall_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## UserEModeSet



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
categoryId<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## UserReserve



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>user address + reserve address</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Avalanche-v3/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Avalanche-v3/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usageAsCollateralEnabledOnUser<br />
<a href="/docs/Avalanche-v3/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scaledATokenBalance<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentATokenBalance<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scaledVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
principalStableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentStableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentTotalDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
oldStableBorrowRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidityRate<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowLastUpdateTimestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowIndex<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lastUpdateTimestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>
<p>Amount in currency units included as fee</p>
</td>
</tr>
<tr>
<td>
stableTokenDelegatedAllowances<br />
<a href="/docs/Avalanche-v3/objects#stabletokendelegatedallowance"><code>[StableTokenDelegatedAllowance!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#stabletokendelegatedallowance_orderby"><code>StableTokenDelegatedAllowance_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#stabletokendelegatedallowance_filter"><code>StableTokenDelegatedAllowance_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
variableTokenDelegatedAllowances<br />
<a href="/docs/Avalanche-v3/objects#variabletokendelegatedallowance"><code>[VariableTokenDelegatedAllowance!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#variabletokendelegatedallowance_orderby"><code>VariableTokenDelegatedAllowance_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#variabletokendelegatedallowance_filter"><code>VariableTokenDelegatedAllowance_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
aTokenBalanceHistory<br />
<a href="/docs/Avalanche-v3/objects#atokenbalancehistoryitem"><code>[ATokenBalanceHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#atokenbalancehistoryitem_orderby"><code>ATokenBalanceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#atokenbalancehistoryitem_filter"><code>ATokenBalanceHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
vTokenBalanceHistory<br />
<a href="/docs/Avalanche-v3/objects#vtokenbalancehistoryitem"><code>[VTokenBalanceHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#vtokenbalancehistoryitem_orderby"><code>VTokenBalanceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#vtokenbalancehistoryitem_filter"><code>VTokenBalanceHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
sTokenBalanceHistory<br />
<a href="/docs/Avalanche-v3/objects#stokenbalancehistoryitem"><code>[STokenBalanceHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#stokenbalancehistoryitem_orderby"><code>STokenBalanceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#stokenbalancehistoryitem_filter"><code>STokenBalanceHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
usageAsCollateralHistory<br />
<a href="/docs/Avalanche-v3/objects#usageascollateral"><code>[UsageAsCollateral!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#usageascollateral_orderby"><code>UsageAsCollateral_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#usageascollateral_filter"><code>UsageAsCollateral_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
supplyHistory<br />
<a href="/docs/Avalanche-v3/objects#supply"><code>[Supply!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#supply_orderby"><code>Supply_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#supply_filter"><code>Supply_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
mintUnbackedHistory<br />
<a href="/docs/Avalanche-v3/objects#mintunbacked"><code>[MintUnbacked!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#mintunbacked_orderby"><code>MintUnbacked_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#mintunbacked_filter"><code>MintUnbacked_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
backUnbackedHistory<br />
<a href="/docs/Avalanche-v3/objects#backunbacked"><code>[BackUnbacked!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#backunbacked_orderby"><code>BackUnbacked_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#backunbacked_filter"><code>BackUnbacked_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
redeemUnderlyingHistory<br />
<a href="/docs/Avalanche-v3/objects#redeemunderlying"><code>[RedeemUnderlying!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#redeemunderlying_orderby"><code>RedeemUnderlying_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#redeemunderlying_filter"><code>RedeemUnderlying_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
borrowHistory<br />
<a href="/docs/Avalanche-v3/objects#borrow"><code>[Borrow!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
swapHistory<br />
<a href="/docs/Avalanche-v3/objects#swapborrowrate"><code>[SwapBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#swapborrowrate_orderby"><code>SwapBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#swapborrowrate_filter"><code>SwapBorrowRate_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
rebalanceStableBorrowRateHistory<br />
<a href="/docs/Avalanche-v3/objects#rebalancestableborrowrate"><code>[RebalanceStableBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#rebalancestableborrowrate_orderby"><code>RebalanceStableBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#rebalancestableborrowrate_filter"><code>RebalanceStableBorrowRate_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
repayHistory<br />
<a href="/docs/Avalanche-v3/objects#repay"><code>[Repay!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#repay_orderby"><code>Repay_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#repay_filter"><code>Repay_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td>
liquidationCallHistory<br />
<a href="/docs/Avalanche-v3/objects#liquidationcall"><code>[LiquidationCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Avalanche-v3/enums#liquidationcall_orderby"><code>LiquidationCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Avalanche-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Avalanche-v3/inputObjects#liquidationcall_filter"><code>LiquidationCall_filter</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

</td>
</tr>
</tbody>
</table>

## UserReward



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>id: ic:asset:reward:user</p>
</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
index<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reward<br />
<a href="/docs/Avalanche-v3/objects#reward"><code>Reward!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
updatedAt<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## VariableTokenDelegatedAllowance



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>variable + fromuser address + touser address+ reserve address</p>
</td>
</tr>
<tr>
<td>
fromUser<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
toUser<br />
<a href="/docs/Avalanche-v3/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amountAllowed<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## VTokenBalanceHistoryItem



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Avalanche-v3/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>userReserve + txHash</p>
</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Avalanche-v3/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scaledVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentVariableDebt<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Avalanche-v3/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
index<br />
<a href="/docs/Avalanche-v3/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

