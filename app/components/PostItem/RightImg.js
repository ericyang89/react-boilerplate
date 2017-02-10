/**
*
* PostItem
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`  
    margin:0 .24rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .04rem;
    width:2.2rem;
    height: 1.46rem;
    background-image: url('${props => props.imgsrc}');
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center center;
    color:#fff;
    font-size:.8rem;
    &:hover{
        font-size:1rem;
    }
`;


function playIcon() {
    return (
        <svg
            height="1em"
            width="1em"
            viewBox="0 0 1024 1024"
            >
            <path d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0zM828.784 828.784c-41.164 41.164-89.082 73.476-142.422 96.036C631.172 948.164 572.508 960 512 960s-119.172-11.836-174.362-35.18c-53.34-22.561-101.258-54.872-142.422-96.036-41.164-41.164-73.476-89.082-96.036-142.422C75.836 631.172 64 572.508 64 512c0-60.508 11.836-119.172 35.18-174.362 22.561-53.34 54.872-101.258 96.036-142.422 41.164-41.164 89.082-73.476 142.422-96.036C392.828 75.836 451.492 64 512 64s119.172 11.836 174.362 35.18c53.34 22.561 101.258 54.872 142.422 96.036 41.164 41.164 73.476 89.082 96.036 142.422C948.164 392.828 960 451.492 960 512c0 60.508-11.836 119.172-35.18 174.362C902.259 739.702 869.948 787.62 828.784 828.784z" ></path>
            <path d="M720.334 477.666c-33.877-19.929-268.317-157.038-288.325-168.352C412 298 384.333 304.667 384.333 333.333c0 14.319 0 343.014 0 357.333 0 28.667 27.667 35.333 47.676 24.019 20.008-11.314 254.311-148.659 288.325-168.352C752 528 751.5 496 720.334 477.666z" ></path>
        </svg>

    );
};



class RightImg extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        if (!this.props.images || this.props.images.length === 0 || this.props.images.length >= 3) {
            return (<div style={{display:'none'}}></div>);
        }
        return (
            <Wrapper imgsrc={this.props.images[0]}>
                {this.props.isContainedVideo ? playIcon() : ""}
            </Wrapper>
        );
    }
}

RightImg.propTypes = {
    images: React.PropTypes.array,
    isContainedVideo: React.PropTypes.bool,
};

export default RightImg;
