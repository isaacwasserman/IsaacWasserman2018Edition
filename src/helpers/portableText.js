import React from 'react'
import urlBuilder from './urlBuilder.js'

export const BlockContent = require('@sanity/block-content-to-react')

export const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    richImage: props => (
      <img src={urlBuilder(props.node)}/>
    )
  }
}
