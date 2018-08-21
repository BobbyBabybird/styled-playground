import React from 'react'
import styled from 'styled-components'

// class ThemePickerButton extends React.Component {
//
//   componentDidMount() {
//     console.log(this.props);
//   }
//
//   _clickHandler() {
//     console.log('clicked');
//   }
//
//   render() {
//     return (
//       <button onClick={this._clickHandler}>{ this.props.children }</button>
//     )
//   }
// }
//
// export default ThemePickerButton


const ThemePickerButton = styled.button`
  background-color: transparent;
  padding: 1rem 2rem;
  border-radius: 9999px;
  border: 2px solid dodgerblue;
  color: dodgerblue;
  &:focus {
    outline: none;
  }
`

export default ThemePickerButton
