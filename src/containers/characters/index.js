import React from "react";
import { connect } from "react-redux";
import App from "../../components/App";
import { fetchCharacters } from "../../actions/characters";


class AppContainer extends React.Component {
  state = {
    characters: null
  };

  componentDidMount () {
    fetchCharacters();
  }

  componentWillReceiveProps (nextProps) {
    console.log("this", nextProps);
    if (this.props !== nextProps) {
      this.setState({characters: nextProps.characters});
    }
  }

  render () {
    if (!this.state.characters) return null;
    return <App characters={this.state.characters} />;
  }
}

const mapStateToProps = (store) => {
  console.log("Store", store);
  return {
    characters: store.appReducer.characters
  };
};

export default connect(mapStateToProps)(AppContainer);
