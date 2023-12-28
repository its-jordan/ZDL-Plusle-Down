import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Navbar from '@/components/ui/nav';
import GetCurrentTime, { GetCurrentDate } from '@/utils/getdate';

export const metadata: Metadata = {
  title: 'Freddy Woodz Invitational - Little Cup',
  description: 'Draft app for FWI - Little Cup League',
};

const backgroundColor = {
  backgroundColor: 'rgb(12, 12, 12',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' style={backgroundColor}>
      <body className={`dark ${GeistSans.className}`}>
        <div className='date-time-container'>
          <div className={`date ${GeistMono.className}`}>
            <GetCurrentDate />
          </div>
          <div className={`time ${GeistMono.className}`}>
            <GetCurrentTime />
          </div>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
