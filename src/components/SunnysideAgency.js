import React from 'react';
import { Container } from './styled/Container.styled';
import {
    Imagearrow,
    Logo,
    Styledsunnyside,
    Graphicdesign,
    Landingpage,
    Photography,
    Justimage,
    Testimonytitle,
    Testimonials,
    Article,
    Socialmedia,
    Vstack,
    Hstack,
    Socialicon,
} from './styled/Sunnyside.styled';
import Articles from '../Article.json';
import Images from '../Image.json';
import Testimonies from '../Testimonials.json';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';
import pinterest from './images/icon-pinterest.svg';
import { Navbar } from './Navbar';

const socials = [
  {
    icon: facebook,
    url: "https://www.facebook.com",
  },
  {
    icon: instagram,
    url: "https://www.instagram.com/fays.dalgona",
  },
  {
    icon: twitter,
    url: "https://www.twitter.com",
  },
  {
    icon: pinterest,
    url: "https://www.pinterest.com",
  }
];

export const SunnysideAgency = () => {
  return (
    <Container>
        <Styledsunnyside>
            <Navbar/>
            <Landingpage>
              <h1>
                  We are creatives
              </h1>
              <Imagearrow/>
            </Landingpage>
            {Articles.map((article)=>{
              return(
                <Article
                  key={article.title}
                  $gridarea={article.gridarea}
                  $bgcolor={article.background}
                >
                  <h2 id='article-h2'>
                    {article.title}
                  </h2>
                  <p id='testi-desc'>
                    {article.desc}
                  </p>
                  <button>
                    {article.button}
                  </button>
                </Article>
              )}
            )}
            {Images.map((image)=>{
              return(
                <Justimage
                  key={image.id}
                  $gridarea={image.gridarea}
                  src={require(`${image.image}`)} alt={image.image}
                />
              )}
            )}
            <Graphicdesign>
              <h2 id='graphicdesign'>
                Graphic design
              </h2>
              <p id='graphicdesign'>
                Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
              </p>
            </Graphicdesign>
            <Photography>
              <h2 id='photography'>
                Photography
              </h2>
              <p id='photography'>
                Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
              </p>
            </Photography>
            <Testimonytitle>
              Client testimonials
            </Testimonytitle>
            {Testimonies.map((testimony)=>{
                return(
                  <Testimonials
                    key={testimony.name}
                    $gridarea={testimony.gridarea}
                  >
                    <img src={require(`${testimony.profpic}`)} alt={testimony.profpic} width='70px' />
                    <p id='testi-desc'>
                      {testimony.testi}
                    </p>
                    <p id='testiname'>
                      {testimony.name}
                    </p>
                    <p id='testioccu'>
                      {testimony.occupation}
                    </p>
                  </Testimonials>
                )}
              )}
            <Socialmedia>
              <Vstack id='v-align'>
                <Logo id='logo-footer'/>
                <Hstack id='spread'>
                  <p id='p-footer'>About</p>
                  <p id='p-footer'>Services</p>
                  <p id='p-footer'>Projects</p>
                </Hstack>
                <Hstack id='spread-social'>
                  {socials.map((social,url)=>{
                    return(
                    <a
                      id='social-link'
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Socialicon src={social.icon} alt={social.icon} key={social.url}/>
                    </a>
                    )}
                  )}
                </Hstack>
              </Vstack>
            </Socialmedia>
        </Styledsunnyside>
    </Container>
  )
}
