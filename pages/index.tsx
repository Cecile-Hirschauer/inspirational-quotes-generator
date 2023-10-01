import Head from 'next/head'
import {
    GradientBackgroundContainer,
    BackgroundImage1,
    BackgroundImage2,
    FooterContainer,
    FooterLink,
    RedSpan,
    QuoteGeneratorContainer,
    QuoteGeneratorInnerContainer,
    QuoteGeneratorTitle, GenerateQuoteButtonText
} from "@/components/QuoteGenerator/QuoteGeneratorElements";
import Clouds1 from '../assets/cloud-and-thunder.png';
import Clouds2 from '../assets/cloudy-weather.png';
import React, {useState} from "react";

function Qotegeneratorsubtitle(props: { children: ReactNode }) {
    return null;
}

function QuoteGeneratorButton(props: { children: ReactNode }) {
    return null;
}

export default function Home() {
    const [numberOfQuotes, setNumberOfQuotes] = useState<number | null>(0);
    return (
        <>
            <Head>
                <title>Inspirational Quotes Generator</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/* Background */}
            <GradientBackgroundContainer>
                <BackgroundImage1
                    src={Clouds1}
                    height={500}
                    alt="Cloudy background 1"
                />
                <BackgroundImage2
                    src={Clouds2}
                    height={500}
                    alt="Cloudy background 2"
                />
            </GradientBackgroundContainer>

            {/*Quote Generator Modal Pop-up*/}
            {/* <QuoteGeneratorModal /> */}

            {/* Quote Generator */}
            <QuoteGeneratorContainer>
                <QuoteGeneratorInnerContainer>
                    <QuoteGeneratorTitle>
                        Daily Inspirational Generator
                    </QuoteGeneratorTitle>
                    <Qotegeneratorsubtitle>
                        Loading for a splash of inspiration ?
                        Generate a quote cerd with a random provided by
                        <FooterLink href={'https://zenquotes.io/'}
                                    target='_blank'
                                    rel='noopener noreferrer'
                        >
                            ZenQuotes API
                        </FooterLink>
                    </Qotegeneratorsubtitle>
                    <QuoteGeneratorButton >
                        <GenerateQuoteButtonText>
                            Make a quote
                        </GenerateQuoteButtonText>
                    </QuoteGeneratorButton>
                </QuoteGeneratorInnerContainer>
            </QuoteGeneratorContainer>

            <FooterContainer>
                <>
                    Quotes Generated: {numberOfQuotes}
                    <br/>
                    Developed with <RedSpan>❤️</RedSpan> by <FooterLink href="https://github.com/Cecile-Hirschauer" target="_blank"
                                                     rel={"noopener noreferrer"}>Cecile Hirschauer</FooterLink>
                </>
            </FooterContainer>
        </>
    )
}
