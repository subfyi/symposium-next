import 'swiper/css/swiper.css';
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
    <>
        <Component {...pageProps} />
        <Analytics />
    </>
}