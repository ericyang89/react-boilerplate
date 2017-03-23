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
const viewHeight=headerHeight-headerLineHeight;
const styles = {
    slideContainer: {
        padding: '0 0',
        "-webkit-overflow-scrolling": "touch",
    },
    slide: {
        height:viewHeight+"px",
    },

};

export default class TabView extends React.Component {
     constructor(props) {
        super(props);        
    }

    static propTypes = {
       onChange: PropTypes.func.isRequired,
       onViewScroll: PropTypes.func.isRequired,
       groups: (props, propName, componentName) => {
           let prop=props[propName];
            if (!(Array.isArray(prop)&&prop.length>0)) {
                return new Error(
                    `Invalid prop ${propName} supplied to ${componentName}. It should be and Array and not empty.`
                );
            }
             return null;
        },
    }

    state = {
        index: 0,
        activeItem: 0,
        translateLeft: 0,
    };

    componentWillMount=()=>{
        this.setState({activeItem:this.props.groups[0].topicId});
    }

    // componentDidMount=()=>{
    //     this.viewsWrapper=document.querySelectorAll(".react-scroll-tab-views-wrapper");
    //     console.log(33, this.viewsWrapper)
    // }
 

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

        // 触发 hooks
        this.props.onChange(index);
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

            // 触发 hooks
        this.props.onChange(item.props.index);
    };

    viewsWrapper=null

    viewScrollHandle=()=>{
        let index=this.state.index;
        if(!this.viewsWrapper){
            this.viewsWrapper=document.querySelectorAll(".react-scroll-tab-views-wrapper");
        }
        let ele=this.viewsWrapper[index].parentNode;
        let deltaHeight=ele.scrollHeight-ele.scrollTop-viewHeight;
        this.props.onViewScroll(index,deltaHeight);
    }

    render() {
        const {
            index,
        } = this.state;

        if(this.props.groups.length===0){
            return (<div></div>);
        }

        let groupList = this.props.groups.map((item) => Object.assign({ isActive: this.state.activeItem === item.topicId }, item));
        const swiperItems = () => {
            let ret = [];
            groupList.map((item, index) => ret.push(<div id={"test"+index} className={"react-scroll-tab-views-wrapper"} style={styles.slide} key={index}>{item.views}</div>));
            return ret; 
        }
        return (
            <div style={{ fontSize: '.2rem' }}>
                <GroupList items={groupList} handleClick={this.clickHandle} translateLeft={this.state.translateLeft} />
                <div style={{height:"1px",backgroundColor:"#ccc"}}></div>
                <SwipeableViews index={index} slideStyle={styles.slideContainer} 
                onScroll={()=>{this.viewScrollHandle()}}
                onChangeIndex={this.handleChangeIndex}>
                    {swiperItems()}
                </SwipeableViews>
            </div>
        );
    }
}








