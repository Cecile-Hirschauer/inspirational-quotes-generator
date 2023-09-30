import Head from 'next/head'
import {GradientBackgroundCon} from "@/components/QuoteGenerator/QuoteGeneratorElements";


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

            </GradientBackgroundCon>
        </>
    )
}
