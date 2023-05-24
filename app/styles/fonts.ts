import { Lora , Quicksand, Raleway, Poppins, Noto_Sans} from 'next/font/google';
 
// define your variable fonts


const lora = Lora({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })
const raleway500 = Raleway({ subsets: ['latin'], weight:['500'] })
const poppins400 = Poppins({ subsets: ['latin'], weight:['400'] })
const notoSans700 = Noto_Sans({ subsets: ['latin'], weight:['700'] })
export { lora, quicksand, raleway500, poppins400, notoSans700};