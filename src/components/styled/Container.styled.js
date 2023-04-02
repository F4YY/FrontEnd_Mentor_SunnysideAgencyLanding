import styled from "styled-components";

export const Container = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&display=swap");
    --Soft-red: hsl(7, 99%, 70%);
    --Yellow: hsl(51, 100%, 49%);
    --header-bg: #3ebfff;
    --footer-bg: #8ed0c4;
    --Dark-desaturated-cyan-GraphicDesignText: hsl(167, 40%, 24%);
    --Dark-blue-PhotographyText: hsl(198, 62%, 26%);
    --Dark-moderate-cyan-Footer: hsl(168, 34%, 41%);
    --Very-dark-Desaturatedblue: hsl(212, 27%, 19%);
    --Very-dark-Grayishblue: hsl(213, 9%, 39%);
    --Dark-grayish-blue: hsl(232, 10%, 55%);
    --Grayish-blue: hsl(210, 4%, 67%);
    --White: hsl(0, 0%, 100%);
    --font-size: 18px;
    --barlow-font: "Barlow", sans-serif;
    --fraunces-font: "Fraunces", serif;
    --semibold: 600;
    --bold:700;
    --ultrabold:900;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 3.45em;
        font-family: var(--fraunces-font);
        font-weight: var(--ultrabold);
        color:var(--White);
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.6rem;
        margin:80px 0 0;
        @media screen and (max-width:1025px) {
            font-size: 2.7em;
            margin:50px 0 0;
        }
        @media screen and (max-width:600px) {
            font-size: 2.3em;
            margin:40px 0 0;
        }
    }
    h2#graphicdesign{
        font-size: 1.7em;
        font-family: var(--fraunces-font);
        font-weight: var(--ultrabold);
        color:var(--Dark-desaturated-cyan-GraphicDesignText);
        text-align: center;
        text-transform:capitalize;
        margin:360px 0 0;
        @media screen and (max-width:1025px) {
            font-size: 1.3em;
            margin:200px 0 0;
        }
        @media screen and (max-width:600px) {
            font-size: 1.4em;
            margin:360px 0 0;
        }
    }
    h2#photography{
        font-size: 1.7em;
        font-family: var(--fraunces-font);
        font-weight: var(--ultrabold);
        color:var(--Dark-blue-PhotographyText);
        text-align: center;
        margin:360px 0 0;
        @media screen and (max-width:1025px) {
            font-size: 1.3em;
            margin:200px 0 0;
        }
        @media screen and (max-width:600px) {
            font-size: 1.4em;
            margin:360px 0 0;
        }
    }
    p#graphicdesign{
        font-size: 1.1em;
        font-family: var(--barlow-font);
        font-weight: var(--semibold);
        color:var(--Dark-desaturated-cyan-GraphicDesignText);
        text-align: center;
        line-height: 1.5em;
        margin: 30px 145px 0;
        @media screen and (max-width:1025px) {
            font-size: 1em;
            margin:20px 30px;
        }
        @media screen and (max-width:600px) {
            font-size: .9em;
            margin:20px 30px 50px;
        }
    }
    p#photography{
        font-size: 1.1em;
        font-family: var(--barlow-font);
        font-weight: var(--semibold);
        color:var(--Dark-blue-PhotographyText);
        text-align: center;
        line-height: 1.5em;
        margin: 30px 145px 0;
        @media screen and (max-width:1025px) {
            font-size: 1em;
            margin:20px 30px;
        }
        @media screen and (max-width:600px) {
            font-size: .9em;
            margin:20px 30px 50px;
        }
    }
    p#testi-desc{
        font-size: 1.15em;
        font-family:var(--barlow-font);
        color:var(--Very-dark-Grayishblue);
        font-weight: var(--bold);
        line-height: 1.7em;
        margin: 40px 0 50px;
        @media screen and (max-width:1025px) {
            font-size: .9em;
            margin: 10px 0 40px;
        }
        @media screen and (max-width:600px) {
            font-size: .9em;
            text-align: center;
            margin: 10px 8px 30px;
        }
    }
    a:hover {
        color:#fff;
    }
    a:active {
        color: blue;
    }
    @keyframes updown {
        from {
            transform: translate3d(0,0,0);
        }
        to{
            transform: translate3d(0,40px,0);
        }
    }
    @keyframes slidernav {
        from {
            transform: translate3d(0,-120%,0);
            rotate:0deg;
        }
        to{
            transform: translate3d(0,0,0);
            rotate:-360deg;
        }
    }
    @keyframes overlayslide {
        from {
            transform: translate3d(0,100%,0);
        }
        to{
            transform: translate3d(0,0,0);
        }
    }
`