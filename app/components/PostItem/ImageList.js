/**
*
* PostItem
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`  
    position:relative;
`;

const PicWrapper = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgItem = styled.div`
    border-radius: .04rem;
    width:2.16rem;
    height: 2.16rem;
    border:.01rem solid #ccc;
    background-image: url('${props => props.itemSrc}');
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center center;
    margin-left:${props => ((props.index ===0 ? '0' : '.24rem'))};  
    margin-right:0;
`

const PicCount = styled.div`
    position: absolute;
    font-size:.16rem;
    right: .01rem;
    bottom: 0;
    color:#fff;
    background-color: #000;
    opacity: .7;
    height: .24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .2rem;
    border-radius: .04rem;
`

class ImageList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
         if (!this.props) {
            return (<div style={{ display: 'none' }}></div>);
        }
        const picCount = this.props.images?this.props.images.length:0;
        const images = this.props.images?this.props.images.slice(0, 3):[];
        if (images.length !== 3) {
            return (<div style={{ display: 'none' }}></div>);
        }
        return (
            <Wrapper imgsrc={this.props.images[0]}>
                <PicWrapper>
                    {images.map((item, index) => <ImgItem itemSrc={item} index={index} key={index} />)}
                </PicWrapper>
                {picCount>3?<PicCount>{picCount + '张'}</PicCount>:''}
            </Wrapper>
        );
    }
}

ImageList.propTypes = {
    images: React.PropTypes.array,
};

export default ImageList;
