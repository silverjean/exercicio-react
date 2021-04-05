import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

import { FooterDiv, Div, Rigth, Left } from './style';

export default function Footer() {
  return (
    <FooterDiv>
      <Div>
        <Rigth>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Terms of Use</li>
            <li>Privacy Police</li>
          </ul>
        </Rigth>
        <Left>
          <FaFacebook className='icon' />
          <FaInstagram className='icon' />
          <FaLinkedin className='icon' />
          <FaTwitter className='icon' />
          <FaYoutube className='icon' />
        </Left>
      </Div>
      <small className='copy'>Made by Jean Silveira © 2021</small>
    </FooterDiv>
  );
}
