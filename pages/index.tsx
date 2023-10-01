import Head from 'next/head'
import {
    GradientBackgroundContainer,
    BackgroundImage1,
    BackgroundImage2, FooterContainer, FooterLink, RedSpan
} from "@/components/QuoteGenerator/QuoteGeneratorElements";
import Clouds1 from '../assets/cloud-and-thunder.png';
import Clouds2 from '../assets/cloudy-weather.png';
import {useState} from "react";

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
