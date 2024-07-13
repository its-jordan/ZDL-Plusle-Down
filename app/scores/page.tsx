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
  'playoffs-week-1',
  'playoffs-week-2',
  'finals',
];

export default function Scores() {
  const [selected, setSelected] = React.useState('week-1');
  return (
    <>
      <CommonPage
        header={'Scores'}
        customClass='schedule-grid'
      >
        <div className='tab-container flex w-full flex-col z-[1000]'>
          <Tabs
            aria-label='Options'
            className='subheading'
            selectedKey={selected}
            // @ts-ignore
            onSelectionChange={setSelected}
            classNames={{ tab: 'tab' }}
          >
            {WeekArray.map((match: string, index: number) => {
              const e = match;
              return (
                <Tab
                  key={index}
                  title={
                    match.charAt(0).toUpperCase() +
                    match.split('-')[0].slice(1) +
                    (match.split('-')[1]
                      ? ' ' +
                        match.split('-')[1].charAt(0).toUpperCase() +
                        match.split('-')[1].slice(1).replaceAll('-', ' ')
                      : '') +
                    (match.split('-')[2] ? ' ' + match.split('-')[2] : '')
                  }
                >
                  <ScheduleTemplate
                    header={
                      match.charAt(0).toUpperCase() +
                      match.slice(1).replace('-', ' ')
                    }
                  >
                    {
                      //  @ts-ignore
                      WeeklySchedule[e]?.map((match, index) => {
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
