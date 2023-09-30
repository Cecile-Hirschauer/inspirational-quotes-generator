import Head from 'next/head'
import {
    GradientBackgroundCon,
    BackgroundImage1,
    BackgroundImage2
} from "@/components/QuoteGenerator/QuoteGeneratorElements";
import Clouds1 from '../assets/cloud-and-thunder.png';
import Clouds2 from '../assets/cloudy-weather.png';

export default function Home() {
    return (
        <>
            <Head>
                <title>Inspirational Quotes Generator</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
                {/* Background */}
            <GradientBackgroundCon>
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
            </GradientBackgroundCon>
        </>
    )
}
