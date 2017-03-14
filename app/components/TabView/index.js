/*
 *
 * SwiperTest
 *
 */

import React, { PropTypes } from 'react';
import GroupList from 'components/GroupList';
import SwipeableViews from 'react-swipeable-views';

const headerHeightRem=1.9;
const headerLineHeight=1;
let headerHeight=document.body.clientHeight-parseInt(document.documentElement.style.fontSize)*headerHeightRem;
const styles = {
    slideContainer: {
        padding: '0 0',
    },
    slide: {
        color: '#f70',
        height:headerHeight-headerLineHeight+"px",
    },

};

export default class TabView extends React.Component {

    static propTypes = {
        groups: PropTypes.array,
        onChange:PropTypes.func,
    }
    state = {
        index: 0,
        activeItem: 0,
        translateLeft: 0,
    };

    componentWillReceiveProps=(nextProps)=> {
        if (nextProps.groups.length>0) {

            // 修改state，不需要render；所以没有用setState
            this.state.activeItem=nextProps.groups[0].topicId;
        }
    }

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

        if(this.props.groups.length===0){
            return (<div></div>);
        }

        let groupList = this.props.groups.map((item) => Object.assign(item, { isActive: this.state.activeItem === item.topicId }));
        const swiperItems = () => {
            let ret = [];
            groupList.map((item, index) => ret.push(<div style={styles.slide} key={index}>{item.views}</div>));
            return ret; 
        }
        return (
            <div style={{ fontSize: '.2rem' }}>
                <GroupList items={groupList} handleClick={this.clickHandle} translateLeft={this.state.translateLeft} />
                <div style={{height:"1px",backgroundColor:"#ccc"}}></div>
                <SwipeableViews index={index} slideStyle={styles.slideContainer} onChangeIndex={this.handleChangeIndex}>
                    {swiperItems()}
                </SwipeableViews>
            </div>
        );
    }
}








