import React, { Component, PropTypes } from 'react'
import OutputListElement from './OutputListElement.js'

export default class OutputList extends Component {
  render() {
    return (
      <ul>
        {this.props.elementList.map(element =>
          <OutputListElement
            key={element.id}
            {...element}
          />
        )}
      </ul>
    )
  }
}
