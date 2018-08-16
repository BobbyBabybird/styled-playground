import React from "react";
import { connect } from "react-redux";
import Characters from "../../components/characters";
import { getCharacters } from './../../ducks/characters';


class CharactersContainer extends React.Component {
  state = {
    characters: null
  };

  componentDidMount () {
    let { dispatch } = this.props

    dispatch(getCharacters())
  }

  componentWillReceiveProps (nextProps) {
    if (this.props !== nextProps) {
      this.setState({characters: nextProps.characters});
    }
  }

  render () {
    if (!this.state.characters) return null;
    return <Characters characters={this.state.characters.data} loading={this.state.characters.loading} />;
  }
}

const mapStateToProps = (store) => {
  return {
    characters: store.appReducer.characters
  };
};

export default connect(mapStateToProps)(CharactersContainer);
