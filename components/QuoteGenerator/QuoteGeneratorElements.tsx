import React from 'react';
import styled from 'styled-components';
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundContainer = styled.div
    `background: linear-gradient(to right, #000046, #1CB5E8);
     background-size: 400% 400%;
     animation: gradient 15s ease infinite;
     height: 100vh;
     width: 100vw;
     @keyframes gradient {
            0% {
                background-position: 0% 50%;
                }
            50% { 
                background-position: 100% 50%;
                }
            100% {
                background-position: 0% 50%;
                }
     }`;

export const BackgroundImage1 = styled(Image)
    `position: relative;
      z-index: 1;
      margin-left: -10px;
      margin-top: -70px;
    `;

export const BackgroundImage2 = styled(Image)
    `position: fixed;
      z-index: 1;
      right: -200px;
      bottom: -10px;
    `;

export const FooterContainer = styled.div
    `position: absolute;
      width: 100vw;
      height: 50px;
      text-align: center;
      font-family: 'source sans pro', monospace;
      font-size: 15px;
      bottom: 0;
      color: white;
      z-index: 999999;
    `;

export const FooterLink = styled(Link)
    `color: white;
      text-decoration: none;
      cursor: pointer;
    `;

export const RedSpan = styled.span
    `color: red;
    `;

