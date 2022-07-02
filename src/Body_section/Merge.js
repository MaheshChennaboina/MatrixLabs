import React from 'react'
import Text from './Text'
import './merge.css'
import Content from './Content'
import Price from './Price'
import PriceRight from './PriceRight'
import StackAmount from './StackAmount'
import StackAmountRight from './StackAmountRight'
import Details from './Details'

function Merge() {
  return (
    <div className="bg_color">
        <Text></Text>
        <Content></Content>
        <Price title="APY In Percentage" amount="24% APY"></Price>
        <PriceRight></PriceRight>
        <StackAmount></StackAmount>
        <StackAmountRight></StackAmountRight>
        <Details address="0x8F5d...8955" token="53746 TOKEN" usd="$532345" ufee='15%' deadline='30 Days'></Details>
    </div>
  )
}

export default Merge