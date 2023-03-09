import styled from "styled-components";
import headerimagedesktop from '../images/desktop/image-header.jpg';
import headerimagemobile from '../images/mobile/image-header.jpg';
import arrow from '../images/icon-arrow-down.svg';
import logo from '../images/logo.svg';
import graphicdesigndesktop from '../images/desktop/image-graphic-design.jpg';
import graphicdesignmobile from '../images/mobile/image-graphic-design.jpg';
import photographydesktop from '../images/desktop/image-photography.jpg';
import photographymobile from '../images/mobile/image-photography.jpg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px) {
        flex-direction: column;
    }
`
export const Styledsunnyside = styled.div`
    display: grid;
    min-height: 100vh;
    width: 100%;
    grid-template-columns: 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333% 8.333%;
    grid-template-rows: 3% 21% 18.6% 18.6% 20% 7% 16% 13.5% 11.5%;
    grid-template-areas:
        'A A A A A A A A A A A A'
        'B B B B B B B B B B B B'
        'C C C C C C D D D D D D'
        'E E E E E E F F F F F F'
        'G G G G G G H H H H H H'
        'I I I I I I I I I I I I'
        'J J J J K K K K L L L L'
        'M M M N N N O O O P P P'
        'Q Q Q Q Q Q Q Q Q Q Q Q';
    @media screen and (max-width:1025px) {
        grid-template-rows: auto 21% auto auto auto auto auto auto auto;
    }
    @media screen and (max-width:600px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: auto 10% auto auto auto auto auto auto auto auto auto auto auto auto auto;
        grid-template-areas:
            'A A'
            'B B'
            'D D'
            'C C'
            'E E'
            'F F'
            'G G'
            'H H'
            'I I'
            'J J'
            'K K'
            'L L'
            'M N'
            'O P'
            'Q Q'
            ;
    }
`
export const Navbarsection = styled(Hstack)`
    grid-area: A;
    justify-content: space-between;
    background-color: var(--header-bg);
    align-items: center;
    padding: 20px 20px 0;
    ul{
        list-style: none;
        font-size: 1.15em;
        font-family: var(--barlow-font);
        color:var(--White);
        @media screen and (max-width:1025px) {
            font-size: 1em;
        }
        @media screen and (max-width:600px) {
            display:none;
        }
    }
    ul li{
        display: inline;
        cursor: pointer;
        margin-left: 50px;
        :active{
                color:var(--Very-dark-Desaturatedblue);
            }
        :last-child{
            font-size: .8em;
            text-transform:uppercase;
            font-family: var(--fraunces-font);
            font-weight: var(--bold);
            color:var(--Very-dark-Desaturatedblue);
            padding:17px 30px;
            border: 1px solid var(--White);
            border-radius: 30px;
            background-color: var(--White);
            :hover{
                color:var(--White);
                background-color: hsla(0, 0%, 100%, 0.2);
                border: none;
            }
            :active{
                color:var(--White);
                background-color:var(--Very-dark-Desaturatedblue);
                border: 1px solid var(--White);
            }
            @media screen and (max-width:1025px) {
                padding:10px 15px;
            }
        }
    }
    @media screen and (max-width:1025px) {
        padding: 0 20px;
    }
    @media screen and (max-width:600px) {
        width: auto;
        height: auto;
        margin: 0;
    }
`
export const Logo = styled.div`
    width: 170px;
    height: 50px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    @media screen and (max-width:1025px) {
        margin:20px 0 0;
    }
`
export const Imagearrow = styled.div`
    width: 40px;
    height: 120px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    position: absolute;
    top:30%;
    left:49%;
    animation: updown 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
`
export const Landingpage = styled.div`
    background-image: url(${headerimagedesktop});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    position:relative;
    grid-area: B;
    @media screen and (max-width:600px) {
        background-image: url(${headerimagemobile});
    }
`
export const Article = styled(Vstack)`
    grid-area:${(ga)=> ga.$gridarea};
    text-align: left;
    padding: 130px 105px 10px;
    h2#article-h2{
        font-size: 2.5em;
        font-family:var(--fraunces-font);
        color:var(--Very-dark-Desaturatedblue);
        font-weight: var(--ultrabold);
    }
    button{
        width:142px;
        font-size: 1em;
        font-family:var(--fraunces-font);
        color:var(--Very-dark-Desaturatedblue);
        font-weight: var(--ultrabold);
        text-transform: uppercase;
        letter-spacing: .05em;
        border-style:none;
        border-radius: 5px;
        padding:3px 0;
        cursor:pointer;
        background: linear-gradient(0deg, hsla(7, 99%, 70%, 0.25), hsla(0, 0%, 100%, 0.5));
        :hover{
            background: ${(bg) => bg.$bgcolor};
        }
        :active{
            color:var(--White);
            background: linear-gradient(0deg, var(--Very-dark-Desaturatedblue), hsla(0, 0%, 100%, 1));
        }
        @media screen and (max-width:600px) {
            margin:0 auto;
        }
    }
    @media screen and (max-width:1025px) {
        padding: 20px 50px 10px;
        h2#article-h2{
            font-size: 1.8em;
        }
    }
    @media screen and (max-width:600px) {
        padding: 20px 50px 35px;
        h2#article-h2{
            text-align: center;
        }
    }
`
export const Justimage = styled.img`
    grid-area:${(ga)=> ga.$gridarea};
    width:100%;
    height:100%;
`
export const Graphicdesign = styled.div`
    grid-area: G;
    background-image: url(${graphicdesigndesktop});
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width:600px) {
        background-image: url(${graphicdesignmobile});
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
    }
`
export const Photography = styled.div`
    grid-area: H;
    background-image: url(${photographydesktop});
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width:600px) {
        background-image: url(${photographymobile});
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
    }
`
export const Testimonytitle = styled.div`
    grid-area: I;
    font-size: 1.3em;
    font-family:var(--fraunces-font);
    color:var(--Dark-grayish-blue);
    font-weight: var(--bold);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .2em;
    background-color: var(--White);
    padding: 100px 0 0;
    @media screen and (max-width:1025px) {
        padding: 20px;
    }
    @media screen and (max-width:600px) {
        font-size: 1.2em;
        padding: 40px 0 20px;
    }
`
export const Testimonials = styled(Vstack)`
    grid-area:${(ga)=> ga.$gridarea};
    text-align: center;
    padding:0 45px;
    img {
        border-radius: 50%;
        margin:0 auto;
    }
    p#testiname{
        font-size: 1.15em;
        font-family:var(--fraunces-font);
        color:var(--Very-dark-Desaturatedblue);
        font-weight: var(--ultrabold);
        line-height: 1.2em;
        margin: 20px 0 0;
        @media screen and (max-width:600px) {
            margin: 0;
        }
    }
    p#testioccu{
        font-size: .9em;
        font-family:var(--barlow-font);
        color:var(--Grayish-blue);
        font-weight: var(--bold);
        margin: 10px 0 0;
    }
    @media screen and (max-width: 1025px) {
        padding:20px 20px;
    }
    @media screen and (max-width: 600px) {
        padding:40px 20px;
    }
`
export const Socialmedia = styled.div`
    grid-area: Q;
    background-color: var(--footer-bg);
    #logo-footer{
        filter: invert(65%) sepia(22%) saturate(790%) hue-rotate(118deg) brightness(95%) contrast(92%);
        margin:80px auto 10px;
        @media screen and (max-width:1025px) {
            margin:40px auto 0;
        }
    }
    #spread{
        gap:60px;
        margin: 0 auto;
    }
    #spread-social{
        gap:15px;
        margin: 60px auto 0;
        @media screen and (max-width:1025px) {
            margin:20px auto 10px;
        }
    }
    p#p-footer{
        font-size: 1.15em;
        font-family:var(--barlow-font);
        filter: invert(45%) sepia(22%) saturate(790%) hue-rotate(118deg) brightness(95%) contrast(92%);
        font-weight: var(--bold);
        :hover{
            cursor:pointer;
            filter:initial;
            color:var(--White);
        }
        :active{
            color:var(--Very-dark-Desaturatedblue);
        }
    }
`
export const Socialicon = styled.img`
    padding: 6px;
    margin:2px auto;
    font-size: 18px;
    :hover{
        cursor: pointer;
        filter:brightness(0) invert(1);
    }
`
//Styled for mobile menu icon:
export const Menuicon = styled.img`
    position:fixed;
    top:15px;
    right:15px;
    width: 40px;
    height: 23px;
    display: none;
    margin-top: 8px;
    cursor: pointer;
    @media screen and (max-width:600px){
        display:flex;
    }
`
export const Overlayscreen = styled.div`
    position:fixed;
    flex-direction: column;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    opacity:.7;
    background:var(--Very-dark-Desaturatedblue);
    z-index: 1;
`
export const Menulist = styled(Vstack)`
    position: relative;
    flex-direction: column;
    top:100px;
    right:10px;
    width: auto;
    height: auto;
    transition: .5s ease-in-out;
    background:var(--White);
    z-index: 1;
    @media screen and (max-width:600px) {
        ul{
            display: block;
            font-size: 1.2em;
            font-weight: var(--reguler);
            color:var(--Dark-grayish-blue);
            padding:0;
            margin: 38px 0 0;
        }
        ul li{
            display: list-item;
            text-align: center;
            margin: 0 0 35px 0;
            :last-child{
                background-color: var(--Yellow);
                margin: 0 90px 40px;
                :hover{
                    background-color: var(--Dark-grayish-blue);
                }
            }
        }
    }
`
export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-top: 0;
    border-right: 0;
    border-bottom: 50px solid var(--White);
    cursor: pointer;
    position: absolute;
    top:-30px;
    right:0;
`