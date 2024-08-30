import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Navbar from '@/components/ui/nav';
import GetCurrentTime, { GetCurrentDate } from '@/utils/getdate';
import Profile from '@/utils/getProfilePic';

export const metadata: Metadata = {
  title: 'ZDL - Offseason 2',
  description: 'SeanBoyQ got them Rayquaza Jordans? Oooh he fitted up.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`dark ${GeistSans.className}`}>
        {/* <div className='date-time-container'>
          <div className={`date ${GeistMono.className}`}>
            <GetCurrentDate />
          </div>
          <div className={`time ${GeistMono.className}`}>
            <GetCurrentTime />
          </div>
        </div> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
