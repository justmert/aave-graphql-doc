---
id: objects
title: Objects
slug: objects
sidebar_position: 4
---

## _Block_



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
hash<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>
<p>The hash of the block</p>
</td>
</tr>
<tr>
<td>
number<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>
<p>The block number</p>
</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
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
<a href="/docs/Ethereum-v2/objects#_block_"><code>_Block_!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The deployment ID</p>
</td>
</tr>
<tr>
<td>
hasIndexingErrors<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>If <code>true</code>, the subgraph encountered indexing errors at some past block</p>
</td>
</tr>
</tbody>
</table>

## AToken



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>AToken address</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetAddress<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetDecimals<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
tokenContractImpl<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>userReserve + txHash</p>
</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scaledATokenBalance<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentATokenBalance<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
index<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Borrow



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Ethereum-v2/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Ethereum-v2/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
caller<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRateMode<br />
<a href="/docs/Ethereum-v2/enums#borrowratemode"><code>BorrowRateMode!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
referrer<br />
<a href="/docs/Ethereum-v2/objects#referrer"><code>Referrer</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableTokenDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableTokenDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetPriceUSD<br />
<a href="/docs/Ethereum-v2/scalars#bigdecimal"><code>BigDecimal!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
oracleAsset<br />
<a href="/docs/Ethereum-v2/objects#priceoracleasset"><code>PriceOracleAsset!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## ChainlinkENS



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>id is the node hash</p>
</td>
</tr>
<tr>
<td>
aggregatorAddress<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>
<p>address of the aggregator</p>
</td>
</tr>
<tr>
<td>
underlyingAddress<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>
<p>token address represented with this aggregator</p>
</td>
</tr>
<tr>
<td>
symbol<br />
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>
<p>symbol of the token represented on the aggregator</p>
</td>
</tr>
</tbody>
</table>

## ClaimIncentiveCall



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>txHash</p>
</td>
</tr>
<tr>
<td>
incentivesController<br />
<a href="/docs/Ethereum-v2/objects#incentivescontroller"><code>IncentivesController!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Deposit



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Ethereum-v2/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Ethereum-v2/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
caller<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
referrer<br />
<a href="/docs/Ethereum-v2/objects#referrer"><code>Referrer</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetPriceUSD<br />
<a href="/docs/Ethereum-v2/scalars#bigdecimal"><code>BigDecimal!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
target<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalFee<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
initiator<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetPriceUSD<br />
<a href="/docs/Ethereum-v2/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## IncentivesController



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>address of the incentives controller</p>
</td>
</tr>
<tr>
<td>
rewardToken<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
rewardTokenDecimals<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
rewardTokenSymbol<br />
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
precision<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
emissionEndTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
incentivizedActions<br />
<a href="/docs/Ethereum-v2/objects#incentivizedaction"><code>[IncentivizedAction!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#incentivizedaction_orderby"><code>IncentivizedAction_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#incentivizedaction_filter"><code>IncentivizedAction_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#claimincentivecall"><code>[ClaimIncentiveCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#claimincentivecall_orderby"><code>ClaimIncentiveCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#claimincentivecall_filter"><code>ClaimIncentiveCall_filter</code></a>
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

## IncentivizedAction



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>txHash</p>
</td>
</tr>
<tr>
<td>
incentivesController<br />
<a href="/docs/Ethereum-v2/objects#incentivescontroller"><code>IncentivesController!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## LiquidationCall



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Ethereum-v2/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Ethereum-v2/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
collateralReserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
collateralUserReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
collateralAmount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
principalReserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
principalUserReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
principalAmount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidator<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
collateralAssetPriceUSD<br />
<a href="/docs/Ethereum-v2/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowAssetPriceUSD<br />
<a href="/docs/Ethereum-v2/scalars#bigdecimal"><code>BigDecimal!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>address of a /s /v token</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAsset<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
protocol<br />
<a href="/docs/Ethereum-v2/objects#protocol"><code>Protocol!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingPool<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingPoolCollateralManager<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingPoolConfiguratorImpl<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingPoolImpl<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingPoolConfigurator<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
proxyPriceProvider<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingRateOracle<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
configurationAdmin<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
ethereumAddress<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
emergencyAdmin<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
history<br />
<a href="/docs/Ethereum-v2/objects#poolconfigurationhistoryitem"><code>[PoolConfigurationHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#poolconfigurationhistoryitem_orderby"><code>PoolConfigurationHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#poolconfigurationhistoryitem_filter"><code>PoolConfigurationHistoryItem_filter</code></a>
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
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserves<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>[Reserve!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#reserve_orderby"><code>Reserve_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#reserve_filter"><code>Reserve_filter</code></a>
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
depositHistory<br />
<a href="/docs/Ethereum-v2/objects#deposit"><code>[Deposit!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#deposit_orderby"><code>Deposit_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#deposit_filter"><code>Deposit_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#redeemunderlying"><code>[RedeemUnderlying!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#redeemunderlying_orderby"><code>RedeemUnderlying_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#redeemunderlying_filter"><code>RedeemUnderlying_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#borrow"><code>[Borrow!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#swap"><code>[Swap!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#swap_orderby"><code>Swap_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#swap_filter"><code>Swap_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#usageascollateral"><code>[UsageAsCollateral!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#usageascollateral_orderby"><code>UsageAsCollateral_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#usageascollateral_filter"><code>UsageAsCollateral_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#rebalancestableborrowrate"><code>[RebalanceStableBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#rebalancestableborrowrate_orderby"><code>RebalanceStableBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#rebalancestableborrowrate_filter"><code>RebalanceStableBorrowRate_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#repay"><code>[Repay!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#repay_orderby"><code>Repay_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#repay_filter"><code>Repay_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#flashloan"><code>[FlashLoan!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#flashloan_orderby"><code>FlashLoan_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#flashloan_filter"><code>FlashLoan_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#liquidationcall"><code>[LiquidationCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#liquidationcall_orderby"><code>LiquidationCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#liquidationcall_filter"><code>LiquidationCall_filter</code></a>
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
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paused<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PoolConfigurationHistoryItem



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
active<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingPool<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingPoolCollateralManager<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingPoolConfiguratorImpl<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingPoolImpl<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingPoolConfigurator<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
proxyPriceProvider<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lendingRateOracle<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
configurationAdmin<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
asset<br />
<a href="/docs/Ethereum-v2/objects#priceoracleasset"><code>PriceOracleAsset!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
price<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
proxyPriceProvider<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usdPriceEth<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usdPriceEthMainSource<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usdPriceEthFallbackRequired<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usdDependentAssets<br />
<a href="/docs/Ethereum-v2/objects#priceoracleasset"><code>[PriceOracleAsset!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#priceoracleasset_orderby"><code>PriceOracleAsset_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#priceoracleasset_filter"><code>PriceOracleAsset_filter</code></a>
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
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
tokens<br />
<a href="/docs/Ethereum-v2/objects#priceoracleasset"><code>[PriceOracleAsset!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#priceoracleasset_orderby"><code>PriceOracleAsset_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#priceoracleasset_filter"><code>PriceOracleAsset_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#usdethpricehistoryitem"><code>[UsdEthPriceHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#usdethpricehistoryitem_orderby"><code>UsdEthPriceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#usdethpricehistoryitem_filter"><code>UsdEthPriceHistoryItem_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#priceoracleasset"><code>[PriceOracleAsset!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#priceoracleasset_orderby"><code>PriceOracleAsset_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#priceoracleasset_filter"><code>PriceOracleAsset_filter</code></a>
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
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
version<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
baseCurrency<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
baseCurrencyUnit<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
oracle<br />
<a href="/docs/Ethereum-v2/objects#priceoracle"><code>PriceOracle!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
priceInEth<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
priceSource<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isFallbackRequired<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
type<br />
<a href="/docs/Ethereum-v2/enums#priceoracleassettype"><code>PriceOracleAssetType!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
platform<br />
<a href="/docs/Ethereum-v2/enums#priceoracleassetplatform"><code>PriceOracleAssetPlatform!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
dependentAssets<br />
<a href="/docs/Ethereum-v2/objects#priceoracleasset"><code>[PriceOracleAsset!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#priceoracleasset_orderby"><code>PriceOracleAsset_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#priceoracleasset_filter"><code>PriceOracleAsset_filter</code></a>
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
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
priceHistory<br />
<a href="/docs/Ethereum-v2/objects#pricehistoryitem"><code>[PriceHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#pricehistoryitem_orderby"><code>PriceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#pricehistoryitem_filter"><code>PriceHistoryItem_filter</code></a>
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
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pools<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>[Pool!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#pool_orderby"><code>Pool_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#pool_filter"><code>Pool_filter</code></a>
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

- [UserTransaction](/docs/Ethereum-v2/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Ethereum-v2/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRateFrom<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRateTo<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## RedeemUnderlying



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Ethereum-v2/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Ethereum-v2/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
to<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetPriceUSD<br />
<a href="/docs/Ethereum-v2/scalars#bigdecimal"><code>BigDecimal!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
deposits<br />
<a href="/docs/Ethereum-v2/objects#deposit"><code>[Deposit!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#deposit_orderby"><code>Deposit_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#deposit_filter"><code>Deposit_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#borrow"><code>[Borrow!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
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

- [UserTransaction](/docs/Ethereum-v2/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Ethereum-v2/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
repayer<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetPriceUSD<br />
<a href="/docs/Ethereum-v2/scalars#bigdecimal"><code>BigDecimal!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>Reserve address</p>
</td>
</tr>
<tr>
<td>
underlyingAsset<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
symbol<br />
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
name<br />
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
decimals<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usageAsCollateralEnabled<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowingEnabled<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRateEnabled<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isActive<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isFrozen<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
price<br />
<a href="/docs/Ethereum-v2/objects#priceoracleasset"><code>PriceOracleAsset!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveInterestRateStrategy<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
optimalUtilisationRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableRateSlope1<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableRateSlope2<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableRateSlope1<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableRateSlope2<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
baseVariableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
baseLTVasCollateral<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveLiquidationThreshold<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveLiquidationBonus<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
utilizationRate<br />
<a href="/docs/Ethereum-v2/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalLiquidity<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalATokenSupply<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalLiquidityAsCollateral<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
availableLiquidity<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalPrincipalStableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalScaledVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalCurrentVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalDeposits<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidityRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
averageStableRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidityIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
aToken<br />
<a href="/docs/Ethereum-v2/objects#atoken"><code>AToken!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
vToken<br />
<a href="/docs/Ethereum-v2/objects#vtoken"><code>VToken!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sToken<br />
<a href="/docs/Ethereum-v2/objects#stoken"><code>SToken!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveFactor<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lastUpdateTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableDebtLastUpdateTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
aEmissionPerSecond<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
vEmissionPerSecond<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sEmissionPerSecond<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
aTokenIncentivesIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
vTokenIncentivesIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sTokenIncentivesIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
aIncentivesLastUpdateTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
vIncentivesLastUpdateTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sIncentivesLastUpdateTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeLiquidity<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimePrincipalStableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeScaledVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeCurrentVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeRepayments<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeWithdrawals<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeBorrows<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeLiquidated<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoans<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoanPremium<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeDepositorsInterestEarned<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeReserveFactorAccrued<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserves<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>[UserReserve!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#userreserve_orderby"><code>UserReserve_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#userreserve_filter"><code>UserReserve_filter</code></a>
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
depositHistory<br />
<a href="/docs/Ethereum-v2/objects#deposit"><code>[Deposit!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#deposit_orderby"><code>Deposit_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#deposit_filter"><code>Deposit_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#redeemunderlying"><code>[RedeemUnderlying!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#redeemunderlying_orderby"><code>RedeemUnderlying_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#redeemunderlying_filter"><code>RedeemUnderlying_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#borrow"><code>[Borrow!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#usageascollateral"><code>[UsageAsCollateral!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#usageascollateral_orderby"><code>UsageAsCollateral_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#usageascollateral_filter"><code>UsageAsCollateral_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#swap"><code>[Swap!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#swap_orderby"><code>Swap_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#swap_filter"><code>Swap_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#rebalancestableborrowrate"><code>[RebalanceStableBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#rebalancestableborrowrate_orderby"><code>RebalanceStableBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#rebalancestableborrowrate_filter"><code>RebalanceStableBorrowRate_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#repay"><code>[Repay!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#repay_orderby"><code>Repay_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#repay_filter"><code>Repay_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#flashloan"><code>[FlashLoan!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#flashloan_orderby"><code>FlashLoan_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#flashloan_filter"><code>FlashLoan_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#liquidationcall"><code>[LiquidationCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#liquidationcall_orderby"><code>LiquidationCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#liquidationcall_filter"><code>LiquidationCall_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#reserveparamshistoryitem"><code>[ReserveParamsHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#reserveparamshistoryitem_orderby"><code>ReserveParamsHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#reserveparamshistoryitem_filter"><code>ReserveParamsHistoryItem_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#reserveconfigurationhistoryitem"><code>[ReserveConfigurationHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#reserveconfigurationhistoryitem_orderby"><code>ReserveConfigurationHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#reserveconfigurationhistoryitem_filter"><code>ReserveConfigurationHistoryItem_filter</code></a>
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
deposits<br />
<a href="/docs/Ethereum-v2/objects#deposit"><code>[Deposit!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#deposit_orderby"><code>Deposit_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#deposit_filter"><code>Deposit_filter</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usageAsCollateralEnabled<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowingEnabled<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRateEnabled<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isActive<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
isFrozen<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveInterestRateStrategy<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
baseLTVasCollateral<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveLiquidationThreshold<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserveLiquidationBonus<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
utilizationRate<br />
<a href="/docs/Ethereum-v2/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
averageStableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidityIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidityRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalLiquidity<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalATokenSupply<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalLiquidityAsCollateral<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
availableLiquidity<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
priceInEth<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
priceInUsd<br />
<a href="/docs/Ethereum-v2/scalars#bigdecimal"><code>BigDecimal!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalScaledVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalCurrentVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
totalPrincipalStableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimePrincipalStableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeScaledVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeCurrentVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeLiquidity<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeRepayments<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeWithdrawals<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeBorrows<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeLiquidated<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoans<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeFlashLoanPremium<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeReserveFactorAccrued<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeDepositorsInterestEarned<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## StableDebtToken



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>StableDebtToken address</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetAddress<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetDecimals<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>stable + fromuser address + touser address+ reserve address</p>
</td>
</tr>
<tr>
<td>
fromUser<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
toUser<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amountAllowed<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## SToken



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>SToken address</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetAddress<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetDecimals<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
tokenContractImpl<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>userReserve + txHash</p>
</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
principalStableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentStableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
avgStableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Swap



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Ethereum-v2/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Ethereum-v2/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRateModeFrom<br />
<a href="/docs/Ethereum-v2/enums#borrowratemode"><code>BorrowRateMode!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
borrowRateModeTo<br />
<a href="/docs/Ethereum-v2/enums#borrowratemode"><code>BorrowRateMode!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
fromAsset<br />
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
toAsset<br />
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
fromAmount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
receivedAmount<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
swapType<br />
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## UsageAsCollateral



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [UserTransaction](/docs/Ethereum-v2/interfaces#usertransaction)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>tx hash</p>
</td>
</tr>
<tr>
<td>
txHash<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
action<br />
<a href="/docs/Ethereum-v2/enums#action"><code>Action!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
fromState<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
toState<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
oracle<br />
<a href="/docs/Ethereum-v2/objects#priceoracle"><code>PriceOracle!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
price<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>user address</p>
</td>
</tr>
<tr>
<td>
borrowedReservesCount<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
unclaimedRewards<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lifetimeRewards<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
incentivesLastUpdated<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserves<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>[UserReserve!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#userreserve_orderby"><code>UserReserve_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#userreserve_filter"><code>UserReserve_filter</code></a>
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
depositHistory<br />
<a href="/docs/Ethereum-v2/objects#deposit"><code>[Deposit!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#deposit_orderby"><code>Deposit_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#deposit_filter"><code>Deposit_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#redeemunderlying"><code>[RedeemUnderlying!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#redeemunderlying_orderby"><code>RedeemUnderlying_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#redeemunderlying_filter"><code>RedeemUnderlying_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#usageascollateral"><code>[UsageAsCollateral!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#usageascollateral_orderby"><code>UsageAsCollateral_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#usageascollateral_filter"><code>UsageAsCollateral_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#borrow"><code>[Borrow!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#swap"><code>[Swap!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#swap_orderby"><code>Swap_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#swap_filter"><code>Swap_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#rebalancestableborrowrate"><code>[RebalanceStableBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#rebalancestableborrowrate_orderby"><code>RebalanceStableBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#rebalancestableborrowrate_filter"><code>RebalanceStableBorrowRate_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#repay"><code>[Repay!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#repay_orderby"><code>Repay_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#repay_filter"><code>Repay_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#liquidationcall"><code>[LiquidationCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#liquidationcall_orderby"><code>LiquidationCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#liquidationcall_filter"><code>LiquidationCall_filter</code></a>
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
incentivizedActions<br />
<a href="/docs/Ethereum-v2/objects#incentivizedaction"><code>[IncentivizedAction!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#incentivizedaction_orderby"><code>IncentivizedAction_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#incentivizedaction_filter"><code>IncentivizedAction_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#claimincentivecall"><code>[ClaimIncentiveCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#claimincentivecall_orderby"><code>ClaimIncentiveCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#claimincentivecall_filter"><code>ClaimIncentiveCall_filter</code></a>
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

## UserReserve



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>user address + reserve address</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
reserve<br />
<a href="/docs/Ethereum-v2/objects#reserve"><code>Reserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
user<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
usageAsCollateralEnabledOnUser<br />
<a href="/docs/Ethereum-v2/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scaledATokenBalance<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentATokenBalance<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scaledVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
principalStableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentStableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentTotalDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
oldStableBorrowRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
liquidityRate<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stableBorrowLastUpdateTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
variableBorrowIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
aTokenincentivesUserIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
vTokenincentivesUserIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sTokenincentivesUserIndex<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
aIncentivesLastUpdateTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
vIncentivesLastUpdateTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sIncentivesLastUpdateTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lastUpdateTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>
<p>Amount in currency units included as fee</p>
</td>
</tr>
<tr>
<td>
stableTokenDelegatedAllowances<br />
<a href="/docs/Ethereum-v2/objects#stabletokendelegatedallowance"><code>[StableTokenDelegatedAllowance!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#stabletokendelegatedallowance_orderby"><code>StableTokenDelegatedAllowance_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#stabletokendelegatedallowance_filter"><code>StableTokenDelegatedAllowance_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#variabletokendelegatedallowance"><code>[VariableTokenDelegatedAllowance!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#variabletokendelegatedallowance_orderby"><code>VariableTokenDelegatedAllowance_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#variabletokendelegatedallowance_filter"><code>VariableTokenDelegatedAllowance_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#atokenbalancehistoryitem"><code>[ATokenBalanceHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#atokenbalancehistoryitem_orderby"><code>ATokenBalanceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#atokenbalancehistoryitem_filter"><code>ATokenBalanceHistoryItem_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#vtokenbalancehistoryitem"><code>[VTokenBalanceHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#vtokenbalancehistoryitem_orderby"><code>VTokenBalanceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#vtokenbalancehistoryitem_filter"><code>VTokenBalanceHistoryItem_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#stokenbalancehistoryitem"><code>[STokenBalanceHistoryItem!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#stokenbalancehistoryitem_orderby"><code>STokenBalanceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#stokenbalancehistoryitem_filter"><code>STokenBalanceHistoryItem_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#usageascollateral"><code>[UsageAsCollateral!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#usageascollateral_orderby"><code>UsageAsCollateral_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#usageascollateral_filter"><code>UsageAsCollateral_filter</code></a>
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
depositHistory<br />
<a href="/docs/Ethereum-v2/objects#deposit"><code>[Deposit!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#deposit_orderby"><code>Deposit_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#deposit_filter"><code>Deposit_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#redeemunderlying"><code>[RedeemUnderlying!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#redeemunderlying_orderby"><code>RedeemUnderlying_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#redeemunderlying_filter"><code>RedeemUnderlying_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#borrow"><code>[Borrow!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#swap"><code>[Swap!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#swap_orderby"><code>Swap_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#swap_filter"><code>Swap_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#rebalancestableborrowrate"><code>[RebalanceStableBorrowRate!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#rebalancestableborrowrate_orderby"><code>RebalanceStableBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#rebalancestableborrowrate_filter"><code>RebalanceStableBorrowRate_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#repay"><code>[Repay!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#repay_orderby"><code>Repay_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#repay_filter"><code>Repay_filter</code></a>
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
<a href="/docs/Ethereum-v2/objects#liquidationcall"><code>[LiquidationCall!]!</code></a>
</td>
<td>


<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Ethereum-v2/enums#liquidationcall_orderby"><code>LiquidationCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Ethereum-v2/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Ethereum-v2/inputObjects#liquidationcall_filter"><code>LiquidationCall_filter</code></a>
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

## VariableDebtToken



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>VariableDebtToken address</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetAddress<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetDecimals<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>variable + fromuser address + touser address+ reserve address</p>
</td>
</tr>
<tr>
<td>
fromUser<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
toUser<br />
<a href="/docs/Ethereum-v2/objects#user"><code>User!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amountAllowed<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## VToken



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>VToken address</p>
</td>
</tr>
<tr>
<td>
pool<br />
<a href="/docs/Ethereum-v2/objects#pool"><code>Pool!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetAddress<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
underlyingAssetDecimals<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
tokenContractImpl<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
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
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>userReserve + txHash</p>
</td>
</tr>
<tr>
<td>
userReserve<br />
<a href="/docs/Ethereum-v2/objects#userreserve"><code>UserReserve!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scaledVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
currentVariableDebt<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
timestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
index<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## WETHReserve



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Ethereum-v2/scalars#id"><code>ID!</code></a>
</td>
<td>
<p>weth address</p>
</td>
</tr>
<tr>
<td>
address<br />
<a href="/docs/Ethereum-v2/scalars#bytes"><code>Bytes!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
symbol<br />
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
name<br />
<a href="/docs/Ethereum-v2/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
decimals<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
updatedTimestamp<br />
<a href="/docs/Ethereum-v2/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
updatedBlockNumber<br />
<a href="/docs/Ethereum-v2/scalars#bigint"><code>BigInt!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

