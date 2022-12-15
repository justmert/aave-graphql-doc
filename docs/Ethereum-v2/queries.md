---
id: queries
title: Queries
slug: queries
sidebar_position: 1
---

## _meta

**Type:** [_Meta_](/docs/Ethereum-v2/objects#_meta_)

Access to subgraph metadata

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## atoken

**Type:** [AToken](/docs/Ethereum-v2/objects#atoken)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## atokenBalanceHistoryItem

**Type:** [ATokenBalanceHistoryItem](/docs/Ethereum-v2/objects#atokenbalancehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## atokenBalanceHistoryItems

**Type:** [[ATokenBalanceHistoryItem!]!](/docs/Ethereum-v2/objects#atokenbalancehistoryitem)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## atokens

**Type:** [[AToken!]!](/docs/Ethereum-v2/objects#atoken)



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
<a href="/docs/Ethereum-v2/enums#atoken_orderby"><code>AToken_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#atoken_filter"><code>AToken_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## borrow

**Type:** [Borrow](/docs/Ethereum-v2/objects#borrow)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## borrows

**Type:** [[Borrow!]!](/docs/Ethereum-v2/objects#borrow)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## chainlinkAggregator

**Type:** [ChainlinkAggregator](/docs/Ethereum-v2/objects#chainlinkaggregator)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## chainlinkAggregators

**Type:** [[ChainlinkAggregator!]!](/docs/Ethereum-v2/objects#chainlinkaggregator)



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
<a href="/docs/Ethereum-v2/enums#chainlinkaggregator_orderby"><code>ChainlinkAggregator_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#chainlinkaggregator_filter"><code>ChainlinkAggregator_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## chainlinkENS

**Type:** [ChainlinkENS](/docs/Ethereum-v2/objects#chainlinkens)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## chainlinkENSs

**Type:** [[ChainlinkENS!]!](/docs/Ethereum-v2/objects#chainlinkens)



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
<a href="/docs/Ethereum-v2/enums#chainlinkens_orderby"><code>ChainlinkENS_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#chainlinkens_filter"><code>ChainlinkENS_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## claimIncentiveCall

**Type:** [ClaimIncentiveCall](/docs/Ethereum-v2/objects#claimincentivecall)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## claimIncentiveCalls

**Type:** [[ClaimIncentiveCall!]!](/docs/Ethereum-v2/objects#claimincentivecall)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## contractToPoolMapping

**Type:** [ContractToPoolMapping](/docs/Ethereum-v2/objects#contracttopoolmapping)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## contractToPoolMappings

**Type:** [[ContractToPoolMapping!]!](/docs/Ethereum-v2/objects#contracttopoolmapping)



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
<a href="/docs/Ethereum-v2/enums#contracttopoolmapping_orderby"><code>ContractToPoolMapping_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#contracttopoolmapping_filter"><code>ContractToPoolMapping_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## deposit

**Type:** [Deposit](/docs/Ethereum-v2/objects#deposit)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## deposits

**Type:** [[Deposit!]!](/docs/Ethereum-v2/objects#deposit)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## flashLoan

**Type:** [FlashLoan](/docs/Ethereum-v2/objects#flashloan)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## flashLoans

**Type:** [[FlashLoan!]!](/docs/Ethereum-v2/objects#flashloan)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## incentivesController

**Type:** [IncentivesController](/docs/Ethereum-v2/objects#incentivescontroller)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## incentivesControllers

**Type:** [[IncentivesController!]!](/docs/Ethereum-v2/objects#incentivescontroller)



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
<a href="/docs/Ethereum-v2/enums#incentivescontroller_orderby"><code>IncentivesController_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#incentivescontroller_filter"><code>IncentivesController_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## incentivizedAction

**Type:** [IncentivizedAction](/docs/Ethereum-v2/objects#incentivizedaction)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## incentivizedActions

**Type:** [[IncentivizedAction!]!](/docs/Ethereum-v2/objects#incentivizedaction)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## liquidationCall

**Type:** [LiquidationCall](/docs/Ethereum-v2/objects#liquidationcall)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## liquidationCalls

**Type:** [[LiquidationCall!]!](/docs/Ethereum-v2/objects#liquidationcall)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## mapAssetPool

**Type:** [MapAssetPool](/docs/Ethereum-v2/objects#mapassetpool)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## mapAssetPools

**Type:** [[MapAssetPool!]!](/docs/Ethereum-v2/objects#mapassetpool)



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
<a href="/docs/Ethereum-v2/enums#mapassetpool_orderby"><code>MapAssetPool_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#mapassetpool_filter"><code>MapAssetPool_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## pool

**Type:** [Pool](/docs/Ethereum-v2/objects#pool)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## poolConfigurationHistoryItem

**Type:** [PoolConfigurationHistoryItem](/docs/Ethereum-v2/objects#poolconfigurationhistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## poolConfigurationHistoryItems

**Type:** [[PoolConfigurationHistoryItem!]!](/docs/Ethereum-v2/objects#poolconfigurationhistoryitem)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## pools

**Type:** [[Pool!]!](/docs/Ethereum-v2/objects#pool)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceHistoryItem

**Type:** [PriceHistoryItem](/docs/Ethereum-v2/objects#pricehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceHistoryItems

**Type:** [[PriceHistoryItem!]!](/docs/Ethereum-v2/objects#pricehistoryitem)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceOracle

**Type:** [PriceOracle](/docs/Ethereum-v2/objects#priceoracle)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceOracleAsset

**Type:** [PriceOracleAsset](/docs/Ethereum-v2/objects#priceoracleasset)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceOracleAssets

**Type:** [[PriceOracleAsset!]!](/docs/Ethereum-v2/objects#priceoracleasset)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceOracles

**Type:** [[PriceOracle!]!](/docs/Ethereum-v2/objects#priceoracle)



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
<a href="/docs/Ethereum-v2/enums#priceoracle_orderby"><code>PriceOracle_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#priceoracle_filter"><code>PriceOracle_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## protocol

**Type:** [Protocol](/docs/Ethereum-v2/objects#protocol)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## protocols

**Type:** [[Protocol!]!](/docs/Ethereum-v2/objects#protocol)



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
<a href="/docs/Ethereum-v2/enums#protocol_orderby"><code>Protocol_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#protocol_filter"><code>Protocol_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rebalanceStableBorrowRate

**Type:** [RebalanceStableBorrowRate](/docs/Ethereum-v2/objects#rebalancestableborrowrate)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rebalanceStableBorrowRates

**Type:** [[RebalanceStableBorrowRate!]!](/docs/Ethereum-v2/objects#rebalancestableborrowrate)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## redeemUnderlying

**Type:** [RedeemUnderlying](/docs/Ethereum-v2/objects#redeemunderlying)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## redeemUnderlyings

**Type:** [[RedeemUnderlying!]!](/docs/Ethereum-v2/objects#redeemunderlying)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## referrer

**Type:** [Referrer](/docs/Ethereum-v2/objects#referrer)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## referrers

**Type:** [[Referrer!]!](/docs/Ethereum-v2/objects#referrer)



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
<a href="/docs/Ethereum-v2/enums#referrer_orderby"><code>Referrer_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#referrer_filter"><code>Referrer_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## repay

**Type:** [Repay](/docs/Ethereum-v2/objects#repay)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## repays

**Type:** [[Repay!]!](/docs/Ethereum-v2/objects#repay)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserve

**Type:** [Reserve](/docs/Ethereum-v2/objects#reserve)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserveConfigurationHistoryItem

**Type:** [ReserveConfigurationHistoryItem](/docs/Ethereum-v2/objects#reserveconfigurationhistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserveConfigurationHistoryItems

**Type:** [[ReserveConfigurationHistoryItem!]!](/docs/Ethereum-v2/objects#reserveconfigurationhistoryitem)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserveParamsHistoryItem

**Type:** [ReserveParamsHistoryItem](/docs/Ethereum-v2/objects#reserveparamshistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserveParamsHistoryItems

**Type:** [[ReserveParamsHistoryItem!]!](/docs/Ethereum-v2/objects#reserveparamshistoryitem)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserves

**Type:** [[Reserve!]!](/docs/Ethereum-v2/objects#reserve)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stableDebtToken

**Type:** [StableDebtToken](/docs/Ethereum-v2/objects#stabledebttoken)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stableDebtTokens

**Type:** [[StableDebtToken!]!](/docs/Ethereum-v2/objects#stabledebttoken)



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
<a href="/docs/Ethereum-v2/enums#stabledebttoken_orderby"><code>StableDebtToken_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#stabledebttoken_filter"><code>StableDebtToken_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stableTokenDelegatedAllowance

**Type:** [StableTokenDelegatedAllowance](/docs/Ethereum-v2/objects#stabletokendelegatedallowance)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stableTokenDelegatedAllowances

**Type:** [[StableTokenDelegatedAllowance!]!](/docs/Ethereum-v2/objects#stabletokendelegatedallowance)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stoken

**Type:** [SToken](/docs/Ethereum-v2/objects#stoken)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stokenBalanceHistoryItem

**Type:** [STokenBalanceHistoryItem](/docs/Ethereum-v2/objects#stokenbalancehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stokenBalanceHistoryItems

**Type:** [[STokenBalanceHistoryItem!]!](/docs/Ethereum-v2/objects#stokenbalancehistoryitem)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stokens

**Type:** [[SToken!]!](/docs/Ethereum-v2/objects#stoken)



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
<a href="/docs/Ethereum-v2/enums#stoken_orderby"><code>SToken_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#stoken_filter"><code>SToken_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## swap

**Type:** [Swap](/docs/Ethereum-v2/objects#swap)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## swapHistories

**Type:** [[SwapHistory!]!](/docs/Ethereum-v2/objects#swaphistory)



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
<a href="/docs/Ethereum-v2/enums#swaphistory_orderby"><code>SwapHistory_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#swaphistory_filter"><code>SwapHistory_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## swapHistory

**Type:** [SwapHistory](/docs/Ethereum-v2/objects#swaphistory)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## swaps

**Type:** [[Swap!]!](/docs/Ethereum-v2/objects#swap)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## usageAsCollateral

**Type:** [UsageAsCollateral](/docs/Ethereum-v2/objects#usageascollateral)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## usageAsCollaterals

**Type:** [[UsageAsCollateral!]!](/docs/Ethereum-v2/objects#usageascollateral)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## usdEthPriceHistoryItem

**Type:** [UsdEthPriceHistoryItem](/docs/Ethereum-v2/objects#usdethpricehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## usdEthPriceHistoryItems

**Type:** [[UsdEthPriceHistoryItem!]!](/docs/Ethereum-v2/objects#usdethpricehistoryitem)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## user

**Type:** [User](/docs/Ethereum-v2/objects#user)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userReserve

**Type:** [UserReserve](/docs/Ethereum-v2/objects#userreserve)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userReserves

**Type:** [[UserReserve!]!](/docs/Ethereum-v2/objects#userreserve)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## users

**Type:** [[User!]!](/docs/Ethereum-v2/objects#user)



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
<a href="/docs/Ethereum-v2/enums#user_orderby"><code>User_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#user_filter"><code>User_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userTransaction

**Type:** [UserTransaction](/docs/Ethereum-v2/interfaces#usertransaction)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userTransactions

**Type:** [[UserTransaction!]!](/docs/Ethereum-v2/interfaces#usertransaction)



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
<a href="/docs/Ethereum-v2/enums#usertransaction_orderby"><code>UserTransaction_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#usertransaction_filter"><code>UserTransaction_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## variableDebtToken

**Type:** [VariableDebtToken](/docs/Ethereum-v2/objects#variabledebttoken)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## variableDebtTokens

**Type:** [[VariableDebtToken!]!](/docs/Ethereum-v2/objects#variabledebttoken)



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
<a href="/docs/Ethereum-v2/enums#variabledebttoken_orderby"><code>VariableDebtToken_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#variabledebttoken_filter"><code>VariableDebtToken_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## variableTokenDelegatedAllowance

**Type:** [VariableTokenDelegatedAllowance](/docs/Ethereum-v2/objects#variabletokendelegatedallowance)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## variableTokenDelegatedAllowances

**Type:** [[VariableTokenDelegatedAllowance!]!](/docs/Ethereum-v2/objects#variabletokendelegatedallowance)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## vtoken

**Type:** [VToken](/docs/Ethereum-v2/objects#vtoken)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## vtokenBalanceHistoryItem

**Type:** [VTokenBalanceHistoryItem](/docs/Ethereum-v2/objects#vtokenbalancehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## vtokenBalanceHistoryItems

**Type:** [[VTokenBalanceHistoryItem!]!](/docs/Ethereum-v2/objects#vtokenbalancehistoryitem)



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
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## vtokens

**Type:** [[VToken!]!](/docs/Ethereum-v2/objects#vtoken)



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
<a href="/docs/Ethereum-v2/enums#vtoken_orderby"><code>VToken_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#vtoken_filter"><code>VToken_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## wethreserve

**Type:** [WETHReserve](/docs/Ethereum-v2/objects#wethreserve)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

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
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## wethreserves

**Type:** [[WETHReserve!]!](/docs/Ethereum-v2/objects#wethreserve)



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
<a href="/docs/Ethereum-v2/enums#wethreserve_orderby"><code>WETHReserve_orderBy</code></a>
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
<a href="/docs/Ethereum-v2/inputObjects#wethreserve_filter"><code>WETHReserve_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Ethereum-v2/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Ethereum-v2/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

