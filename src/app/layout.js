import { Poppins } from 'next/font/google'


import "./globals.css";

const poppins = Poppins({
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"] , 
  display: 'swap',
  subsets: ["latin"]
})

export const metadata = {
  title: "Hamza Khan | Full Stack Web Developer",
  description: "Experienced Full Stack Web Developer from Pakistan specializing in building dynamic, high-performance websites and applications. Proficient in front-end and back-end technologies, delivering customized solutions for businesses.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`bg-[#0f0f0f] ${poppins.className} transition-all duration-700 `}>
   
        {children}
      </body>
    </html >
  );
}

