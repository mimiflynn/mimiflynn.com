import React, { Component } from 'react';

import ListStore from '../../state/resume/stores/';
import ViewActionCreators from '../../state/resume/actions/ViewActionCreators';

import Position from '../../components/position/';

class Resume extends Component {
  constructor (props) {
    super(props);

    this.state = ListStore.getState();

    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount () {
    ListStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadList();
  }

  componentWillUnmount () {
    ListStore.removeChangeListener(this.handleStoreChange);
  }

  handleStoreChange () {
    this.setState(ListStore.getState());
  }

  render() {
    const positions = this.state.items.map((position, index) => (
      <Position key={ index } item={ position } />
    ));

    return (
      <div>
        <h2>Resume</h2>
        { positions }
      </div>
    );
  }
}

export default Resume;
