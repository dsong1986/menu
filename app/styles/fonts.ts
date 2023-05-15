import { Lora , Quicksand, Raleway} from 'next/font/google';
 
// define your variable fonts


const lora = Lora({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })
const raleway500 = Raleway({ subsets: ['latin'], weight:['500'] })
export { lora, quicksand, raleway500};