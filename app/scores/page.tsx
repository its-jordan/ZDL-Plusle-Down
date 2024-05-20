'use client';
import CommonPage, {
  MatchTemplate,
  ScheduleTemplate,
} from '@/components/commonPage';
import WeeklySchedule from '@/data/schedule2.json';
import React from 'react';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';

const WeekArray = [
  'week-1',
  'week-2',
  'week-3',
  'week-4',
  'week-5',
  'week-6',
  'week-7',
  'week-8',
];

export default function Scores() {
  const [selected, setSelected] = React.useState('week-1');
  return (
    <>
      <CommonPage header={'Scores'} customClass='schedule-grid'>
        <div className='flex w-full flex-col z-[1000]'>
          <Tabs
            aria-label='Options'
            className='subheading'
            selectedKey={selected}
            // @ts-ignore
            onSelectionChange={setSelected}
            classNames={{ tab: 'tab' }}>
            {WeekArray.map((match: string, index: number) => {
              const e = match;
              return (
                <Tab
                  key={match}
                  title={
                    match.charAt(0).toUpperCase() +
                    match.slice(1).replace('-', ' ')
                  }>
                  <ScheduleTemplate
                    header={
                      match.charAt(0).toUpperCase() +
                      match.slice(1).replace('-', ' ')
                    }>
                    {
                      //  @ts-ignore
                      WeeklySchedule[e].map((match, index) => {
                        return (
                          <MatchTemplate
                            match={match}
                            key={index}
                            index={index}
                          />
                        );
                      })
                    }
                  </ScheduleTemplate>
                </Tab>
              );
            })}
          </Tabs>
        </div>
      </CommonPage>
    </>
  );
}
