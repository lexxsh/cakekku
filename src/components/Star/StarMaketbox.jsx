import styled from "styled-components";
import { useState, useEffect } from "react";

const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];

const StarMarketbox = (props) => {
    const { avrRate } = props;
    
    console.log(avrRate);

    return (
        <StarRateWrap
          StarTop = {props.StarTop}
          Starleft = {props.Starleft}>
            {STAR_IDX_ARR.map((item, idx) => {
                return (
                <span className='star_icon' key={`${item}_${idx}`}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='39' viewBox='0 0 14 13' fill='#cacaca'>
                        <clipPath id={`${item}StarClip`}>
                            <rect width={`${avrRate[idx]}`} height='39' />
                        </clipPath>
                        <path
                            id={`${item}Star`}
                            d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                            transform='translate(-2 -2)'
                        />
                        <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill='#FF9494'
                        />
                    </svg>
                </span>
                )
            })
            }
        </StarRateWrap>
    )
}

export default StarMarketbox;

const StarRateWrap = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        margin: 100px 0 0 15px;
        .star_icon {
          display: inline-flex;
          margin-right: 5px;
        }
        position: absolute;
        top:${(props) => (props.StarTop ? props.StarTop : "-13%")};
        left:${(props) => (props.Starleft ? props.Starleft : "48%")};
        z-index: 1;
        `