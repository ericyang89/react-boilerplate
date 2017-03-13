/*
 *
 * SwiperTest
 *
 */

import React, { PropTypes } from 'react';
import GroupList from 'components/GroupList';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    slideContainer: {
        padding: '0 0',
    },
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#f70',
    },

};

export default class TabView extends React.Component {

    static propTypes = {
        /**
         * Override the inline-styles of the button element.
         */
        groups: PropTypes.array,
        onChange:PropTypes.func,
    }
    state = {
        index: 0,
        activeItem: 12,
        translateLeft: 0,
    };


    // view 改变 tab
    handleChangeIndex = (index) => {
        let activeItem = this.props.groups[index].topicId;
        let element = document.querySelector("#reactScrollTabContent");
        let translateLeft = this.calcTranslateLeft(element.children[index]);
        this.setState({
            index,
            activeItem,
            translateLeft,
        });
    };

    calcTranslateLeft = ele => {
        let ta = ele;
        let clientWidth = document.querySelector("#reactScrollTabContent").parentNode.offsetWidth;
        let translateLeft = (clientWidth - ta.offsetWidth) / 2 - ta.offsetLeft;
        return translateLeft;
    }
    clickHandle = (tId, item, e) => {
        let ta = e.target;
        this.setState({
            activeItem: tId,
            index: item.props.index,
            translateLeft: this.calcTranslateLeft(ta),
        });
    };

    render() {
        const {
            index,
        } = this.state;

        let groupList = this.props.groups.map((item) => Object.assign(item, { isActive: this.state.activeItem === item.topicId }));
        const swiperItems = () => {
            let ret = [];
            groupList.map((item, index) => ret.push(<div style={styles.slide} key={index}>{item.views}</div>));
            return ret;
        }
        return (
            <div style={{ fontSize: '.2rem' }}>
                <GroupList items={groupList} handleClick={this.clickHandle} translateLeft={this.state.translateLeft} />
                <SwipeableViews index={index} slideStyle={styles.slideContainer} onChangeIndex={this.handleChangeIndex}>
                    {swiperItems()}
                </SwipeableViews>
            </div>
        );
    }
}








