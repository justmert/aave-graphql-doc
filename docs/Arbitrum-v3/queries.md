---
id: queries
title: Queries
slug: queries
sidebar_position: 1
---

## _meta

**Type:** [_Meta_](/docs/Arbitrum-v3/objects#_meta_)

Access to subgraph metadata

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## atokenBalanceHistoryItem

**Type:** [ATokenBalanceHistoryItem](/docs/Arbitrum-v3/objects#atokenbalancehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## atokenBalanceHistoryItems

**Type:** [[ATokenBalanceHistoryItem!]!](/docs/Arbitrum-v3/objects#atokenbalancehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#atokenbalancehistoryitem_orderby"><code>ATokenBalanceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#atokenbalancehistoryitem_filter"><code>ATokenBalanceHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## backUnbacked

**Type:** [BackUnbacked](/docs/Arbitrum-v3/objects#backunbacked)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## backUnbackeds

**Type:** [[BackUnbacked!]!](/docs/Arbitrum-v3/objects#backunbacked)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#backunbacked_orderby"><code>BackUnbacked_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#backunbacked_filter"><code>BackUnbacked_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## borrow

**Type:** [Borrow](/docs/Arbitrum-v3/objects#borrow)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## borrows

**Type:** [[Borrow!]!](/docs/Arbitrum-v3/objects#borrow)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#borrow_orderby"><code>Borrow_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#borrow_filter"><code>Borrow_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## chainlinkAggregator

**Type:** [ChainlinkAggregator](/docs/Arbitrum-v3/objects#chainlinkaggregator)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## chainlinkAggregators

**Type:** [[ChainlinkAggregator!]!](/docs/Arbitrum-v3/objects#chainlinkaggregator)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#chainlinkaggregator_orderby"><code>ChainlinkAggregator_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#chainlinkaggregator_filter"><code>ChainlinkAggregator_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## claimRewardsCall

**Type:** [ClaimRewardsCall](/docs/Arbitrum-v3/objects#claimrewardscall)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## claimRewardsCalls

**Type:** [[ClaimRewardsCall!]!](/docs/Arbitrum-v3/objects#claimrewardscall)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#claimrewardscall_orderby"><code>ClaimRewardsCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#claimrewardscall_filter"><code>ClaimRewardsCall_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## contractToPoolMapping

**Type:** [ContractToPoolMapping](/docs/Arbitrum-v3/objects#contracttopoolmapping)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## contractToPoolMappings

**Type:** [[ContractToPoolMapping!]!](/docs/Arbitrum-v3/objects#contracttopoolmapping)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#contracttopoolmapping_orderby"><code>ContractToPoolMapping_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#contracttopoolmapping_filter"><code>ContractToPoolMapping_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## emodeCategories

**Type:** [[EModeCategory!]!](/docs/Arbitrum-v3/objects#emodecategory)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#emodecategory_orderby"><code>EModeCategory_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#emodecategory_filter"><code>EModeCategory_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## emodeCategory

**Type:** [EModeCategory](/docs/Arbitrum-v3/objects#emodecategory)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## flashLoan

**Type:** [FlashLoan](/docs/Arbitrum-v3/objects#flashloan)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## flashLoans

**Type:** [[FlashLoan!]!](/docs/Arbitrum-v3/objects#flashloan)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#flashloan_orderby"><code>FlashLoan_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#flashloan_filter"><code>FlashLoan_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## isolationModeTotalDebtUpdated

**Type:** [IsolationModeTotalDebtUpdated](/docs/Arbitrum-v3/objects#isolationmodetotaldebtupdated)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## isolationModeTotalDebtUpdateds

**Type:** [[IsolationModeTotalDebtUpdated!]!](/docs/Arbitrum-v3/objects#isolationmodetotaldebtupdated)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#isolationmodetotaldebtupdated_orderby"><code>IsolationModeTotalDebtUpdated_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#isolationmodetotaldebtupdated_filter"><code>IsolationModeTotalDebtUpdated_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## liquidationCall

**Type:** [LiquidationCall](/docs/Arbitrum-v3/objects#liquidationcall)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## liquidationCalls

**Type:** [[LiquidationCall!]!](/docs/Arbitrum-v3/objects#liquidationcall)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#liquidationcall_orderby"><code>LiquidationCall_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#liquidationcall_filter"><code>LiquidationCall_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## mapAssetPool

**Type:** [MapAssetPool](/docs/Arbitrum-v3/objects#mapassetpool)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## mapAssetPools

**Type:** [[MapAssetPool!]!](/docs/Arbitrum-v3/objects#mapassetpool)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#mapassetpool_orderby"><code>MapAssetPool_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#mapassetpool_filter"><code>MapAssetPool_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## mintedToTreasuries

**Type:** [[MintedToTreasury!]!](/docs/Arbitrum-v3/objects#mintedtotreasury)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#mintedtotreasury_orderby"><code>MintedToTreasury_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#mintedtotreasury_filter"><code>MintedToTreasury_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## mintedToTreasury

**Type:** [MintedToTreasury](/docs/Arbitrum-v3/objects#mintedtotreasury)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## mintUnbacked

**Type:** [MintUnbacked](/docs/Arbitrum-v3/objects#mintunbacked)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## mintUnbackeds

**Type:** [[MintUnbacked!]!](/docs/Arbitrum-v3/objects#mintunbacked)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#mintunbacked_orderby"><code>MintUnbacked_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#mintunbacked_filter"><code>MintUnbacked_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## pool

**Type:** [Pool](/docs/Arbitrum-v3/objects#pool)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## pools

**Type:** [[Pool!]!](/docs/Arbitrum-v3/objects#pool)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#pool_orderby"><code>Pool_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#pool_filter"><code>Pool_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceHistoryItem

**Type:** [PriceHistoryItem](/docs/Arbitrum-v3/objects#pricehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceHistoryItems

**Type:** [[PriceHistoryItem!]!](/docs/Arbitrum-v3/objects#pricehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#pricehistoryitem_orderby"><code>PriceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#pricehistoryitem_filter"><code>PriceHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceOracle

**Type:** [PriceOracle](/docs/Arbitrum-v3/objects#priceoracle)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceOracleAsset

**Type:** [PriceOracleAsset](/docs/Arbitrum-v3/objects#priceoracleasset)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceOracleAssets

**Type:** [[PriceOracleAsset!]!](/docs/Arbitrum-v3/objects#priceoracleasset)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#priceoracleasset_orderby"><code>PriceOracleAsset_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#priceoracleasset_filter"><code>PriceOracleAsset_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## priceOracles

**Type:** [[PriceOracle!]!](/docs/Arbitrum-v3/objects#priceoracle)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#priceoracle_orderby"><code>PriceOracle_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#priceoracle_filter"><code>PriceOracle_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## protocol

**Type:** [Protocol](/docs/Arbitrum-v3/objects#protocol)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## protocols

**Type:** [[Protocol!]!](/docs/Arbitrum-v3/objects#protocol)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#protocol_orderby"><code>Protocol_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#protocol_filter"><code>Protocol_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rebalanceStableBorrowRate

**Type:** [RebalanceStableBorrowRate](/docs/Arbitrum-v3/objects#rebalancestableborrowrate)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rebalanceStableBorrowRates

**Type:** [[RebalanceStableBorrowRate!]!](/docs/Arbitrum-v3/objects#rebalancestableborrowrate)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#rebalancestableborrowrate_orderby"><code>RebalanceStableBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#rebalancestableborrowrate_filter"><code>RebalanceStableBorrowRate_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## redeemUnderlying

**Type:** [RedeemUnderlying](/docs/Arbitrum-v3/objects#redeemunderlying)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## redeemUnderlyings

**Type:** [[RedeemUnderlying!]!](/docs/Arbitrum-v3/objects#redeemunderlying)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#redeemunderlying_orderby"><code>RedeemUnderlying_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#redeemunderlying_filter"><code>RedeemUnderlying_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## referrer

**Type:** [Referrer](/docs/Arbitrum-v3/objects#referrer)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## referrers

**Type:** [[Referrer!]!](/docs/Arbitrum-v3/objects#referrer)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#referrer_orderby"><code>Referrer_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#referrer_filter"><code>Referrer_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## repay

**Type:** [Repay](/docs/Arbitrum-v3/objects#repay)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## repays

**Type:** [[Repay!]!](/docs/Arbitrum-v3/objects#repay)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#repay_orderby"><code>Repay_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#repay_filter"><code>Repay_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserve

**Type:** [Reserve](/docs/Arbitrum-v3/objects#reserve)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserveConfigurationHistoryItem

**Type:** [ReserveConfigurationHistoryItem](/docs/Arbitrum-v3/objects#reserveconfigurationhistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserveConfigurationHistoryItems

**Type:** [[ReserveConfigurationHistoryItem!]!](/docs/Arbitrum-v3/objects#reserveconfigurationhistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#reserveconfigurationhistoryitem_orderby"><code>ReserveConfigurationHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#reserveconfigurationhistoryitem_filter"><code>ReserveConfigurationHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserveParamsHistoryItem

**Type:** [ReserveParamsHistoryItem](/docs/Arbitrum-v3/objects#reserveparamshistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserveParamsHistoryItems

**Type:** [[ReserveParamsHistoryItem!]!](/docs/Arbitrum-v3/objects#reserveparamshistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#reserveparamshistoryitem_orderby"><code>ReserveParamsHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#reserveparamshistoryitem_filter"><code>ReserveParamsHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reserves

**Type:** [[Reserve!]!](/docs/Arbitrum-v3/objects#reserve)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#reserve_orderby"><code>Reserve_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#reserve_filter"><code>Reserve_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## reward

**Type:** [Reward](/docs/Arbitrum-v3/objects#reward)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rewardedAction

**Type:** [RewardedAction](/docs/Arbitrum-v3/objects#rewardedaction)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rewardedActions

**Type:** [[RewardedAction!]!](/docs/Arbitrum-v3/objects#rewardedaction)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#rewardedaction_orderby"><code>RewardedAction_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#rewardedaction_filter"><code>RewardedAction_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rewardFeedOracle

**Type:** [RewardFeedOracle](/docs/Arbitrum-v3/objects#rewardfeedoracle)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rewardFeedOracles

**Type:** [[RewardFeedOracle!]!](/docs/Arbitrum-v3/objects#rewardfeedoracle)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#rewardfeedoracle_orderby"><code>RewardFeedOracle_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#rewardfeedoracle_filter"><code>RewardFeedOracle_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rewards

**Type:** [[Reward!]!](/docs/Arbitrum-v3/objects#reward)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#reward_orderby"><code>Reward_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#reward_filter"><code>Reward_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rewardsController

**Type:** [RewardsController](/docs/Arbitrum-v3/objects#rewardscontroller)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## rewardsControllers

**Type:** [[RewardsController!]!](/docs/Arbitrum-v3/objects#rewardscontroller)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#rewardscontroller_orderby"><code>RewardsController_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#rewardscontroller_filter"><code>RewardsController_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stableTokenDelegatedAllowance

**Type:** [StableTokenDelegatedAllowance](/docs/Arbitrum-v3/objects#stabletokendelegatedallowance)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stableTokenDelegatedAllowances

**Type:** [[StableTokenDelegatedAllowance!]!](/docs/Arbitrum-v3/objects#stabletokendelegatedallowance)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#stabletokendelegatedallowance_orderby"><code>StableTokenDelegatedAllowance_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#stabletokendelegatedallowance_filter"><code>StableTokenDelegatedAllowance_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stokenBalanceHistoryItem

**Type:** [STokenBalanceHistoryItem](/docs/Arbitrum-v3/objects#stokenbalancehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## stokenBalanceHistoryItems

**Type:** [[STokenBalanceHistoryItem!]!](/docs/Arbitrum-v3/objects#stokenbalancehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#stokenbalancehistoryitem_orderby"><code>STokenBalanceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#stokenbalancehistoryitem_filter"><code>STokenBalanceHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## subToken

**Type:** [SubToken](/docs/Arbitrum-v3/objects#subtoken)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## subTokens

**Type:** [[SubToken!]!](/docs/Arbitrum-v3/objects#subtoken)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#subtoken_orderby"><code>SubToken_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#subtoken_filter"><code>SubToken_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## supplies

**Type:** [[Supply!]!](/docs/Arbitrum-v3/objects#supply)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#supply_orderby"><code>Supply_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#supply_filter"><code>Supply_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## supply

**Type:** [Supply](/docs/Arbitrum-v3/objects#supply)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## swapBorrowRate

**Type:** [SwapBorrowRate](/docs/Arbitrum-v3/objects#swapborrowrate)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## swapBorrowRates

**Type:** [[SwapBorrowRate!]!](/docs/Arbitrum-v3/objects#swapborrowrate)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#swapborrowrate_orderby"><code>SwapBorrowRate_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#swapborrowrate_filter"><code>SwapBorrowRate_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## swapHistories

**Type:** [[SwapHistory!]!](/docs/Arbitrum-v3/objects#swaphistory)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#swaphistory_orderby"><code>SwapHistory_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#swaphistory_filter"><code>SwapHistory_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## swapHistory

**Type:** [SwapHistory](/docs/Arbitrum-v3/objects#swaphistory)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## usageAsCollateral

**Type:** [UsageAsCollateral](/docs/Arbitrum-v3/objects#usageascollateral)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## usageAsCollaterals

**Type:** [[UsageAsCollateral!]!](/docs/Arbitrum-v3/objects#usageascollateral)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#usageascollateral_orderby"><code>UsageAsCollateral_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#usageascollateral_filter"><code>UsageAsCollateral_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## usdEthPriceHistoryItem

**Type:** [UsdEthPriceHistoryItem](/docs/Arbitrum-v3/objects#usdethpricehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## usdEthPriceHistoryItems

**Type:** [[UsdEthPriceHistoryItem!]!](/docs/Arbitrum-v3/objects#usdethpricehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#usdethpricehistoryitem_orderby"><code>UsdEthPriceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#usdethpricehistoryitem_filter"><code>UsdEthPriceHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## user

**Type:** [User](/docs/Arbitrum-v3/objects#user)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userEModeSet

**Type:** [UserEModeSet](/docs/Arbitrum-v3/objects#useremodeset)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userEModeSets

**Type:** [[UserEModeSet!]!](/docs/Arbitrum-v3/objects#useremodeset)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#useremodeset_orderby"><code>UserEModeSet_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#useremodeset_filter"><code>UserEModeSet_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userReserve

**Type:** [UserReserve](/docs/Arbitrum-v3/objects#userreserve)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userReserves

**Type:** [[UserReserve!]!](/docs/Arbitrum-v3/objects#userreserve)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#userreserve_orderby"><code>UserReserve_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#userreserve_filter"><code>UserReserve_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userReward

**Type:** [UserReward](/docs/Arbitrum-v3/objects#userreward)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userRewards

**Type:** [[UserReward!]!](/docs/Arbitrum-v3/objects#userreward)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#userreward_orderby"><code>UserReward_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#userreward_filter"><code>UserReward_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## users

**Type:** [[User!]!](/docs/Arbitrum-v3/objects#user)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#user_orderby"><code>User_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#user_filter"><code>User_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userTransaction

**Type:** [UserTransaction](/docs/Arbitrum-v3/interfaces#usertransaction)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## userTransactions

**Type:** [[UserTransaction!]!](/docs/Arbitrum-v3/interfaces#usertransaction)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#usertransaction_orderby"><code>UserTransaction_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#usertransaction_filter"><code>UserTransaction_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## variableTokenDelegatedAllowance

**Type:** [VariableTokenDelegatedAllowance](/docs/Arbitrum-v3/objects#variabletokendelegatedallowance)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## variableTokenDelegatedAllowances

**Type:** [[VariableTokenDelegatedAllowance!]!](/docs/Arbitrum-v3/objects#variabletokendelegatedallowance)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#variabletokendelegatedallowance_orderby"><code>VariableTokenDelegatedAllowance_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#variabletokendelegatedallowance_filter"><code>VariableTokenDelegatedAllowance_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## vtokenBalanceHistoryItem

**Type:** [VTokenBalanceHistoryItem](/docs/Arbitrum-v3/objects#vtokenbalancehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/Arbitrum-v3/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

## vtokenBalanceHistoryItems

**Type:** [[VTokenBalanceHistoryItem!]!](/docs/Arbitrum-v3/objects#vtokenbalancehistoryitem)



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
skip<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/Arbitrum-v3/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderBy<br />
<a href="/docs/Arbitrum-v3/enums#vtokenbalancehistoryitem_orderby"><code>VTokenBalanceHistoryItem_orderBy</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
orderDirection<br />
<a href="/docs/Arbitrum-v3/enums#orderdirection"><code>OrderDirection</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
where<br />
<a href="/docs/Arbitrum-v3/inputObjects#vtokenbalancehistoryitem_filter"><code>VTokenBalanceHistoryItem_filter</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
block<br />
<a href="/docs/Arbitrum-v3/inputObjects#block_height"><code>Block_height</code></a>
</td>
<td>
<p>The block at which the query should be executed. Can either be a <code>&#123; hash: Bytes &#125;</code> value containing a block hash, a <code>&#123; number: Int &#125;</code> containing the block number, or a <code>&#123; number_gte: Int &#125;</code> containing the minimum block number. In the case of <code>number_gte</code>, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.</p>
</td>
</tr>
<tr>
<td>
subgraphError<br />
<a href="/docs/Arbitrum-v3/enums#_subgrapherrorpolicy_"><code>_SubgraphErrorPolicy_!</code></a>
</td>
<td>
<p>Set to <code>allow</code> to receive data even if the subgraph has skipped over errors while syncing.</p>
</td>
</tr>
</tbody>
</table>

