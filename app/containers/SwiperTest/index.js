/*
 *
 * SwiperTest
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import Tabs from 'material-ui/Tabs/Tabs';
// import Tab from 'material-ui/Tabs/Tab';
import { Tabs, Tab } from 'components/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  topSlide: {
    color: 'red',
  },
    root: {
    // width:'1rem',
    // padding: '0 3.1rem',
    // position:'relative',
    // left:'-10%'
  },
  slideContainer: {
    padding: '0 0',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

class DemoTabs extends React.Component {
  state = {
    index: 0,
  };

  handleChangeTabs = (value) => () => {
    console.log(value)
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    const {
      index,
    } = this.state;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{ fontSize: '.2rem' }}>

          <SwipeableViews index={index} style={styles.root} slideStyle={styles.slideContainer}>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              slide n°1
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              slide n°2
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°3
            </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°4
            </div>
                  <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°5
            </div>
                  <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°6
            </div>
                  <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°7
            </div>
                  <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°8
            </div>
          </SwipeableViews>
          <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              slide n°1
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              slide n°22323
              <br />
              <br />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°3
            </div>
          </SwipeableViews>
        </div>
      </MuiThemeProvider>
    );
  }
}

export class SwiperTest extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <DemoTabs />
      </div>
    );
  }
}

SwiperTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SwiperTest);
