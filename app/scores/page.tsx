import CommonPage, {
  MatchTemplate,
  ScheduleTemplate,
} from '@/components/commonPage';
import WeeklySchedule from '@/data/schedule.json';

export default function Scores() {
  return (
    <CommonPage header={'Scores'} customClass='schedule-grid'>
      <ScheduleTemplate header='Week 1'>
        {WeeklySchedule['week-1'].map((match, index) => {
          return <MatchTemplate match={match} key={index} index={index} />;
        })}
      </ScheduleTemplate>
      <ScheduleTemplate header='Week 2'>
        {WeeklySchedule['week-2'].map((match, index) => {
          return <MatchTemplate match={match} key={index} index={index} />;
        })}
      </ScheduleTemplate>
      <ScheduleTemplate header='Week 3'>
        {WeeklySchedule['week-3'].map((match, index) => {
          return <MatchTemplate match={match} key={index} index={index} />;
        })}
      </ScheduleTemplate>
      <ScheduleTemplate header='Week 4'>
        {WeeklySchedule['week-3'].map((match, index) => {
          return <MatchTemplate match={match} key={index} index={index} />;
        })}
      </ScheduleTemplate>
      <ScheduleTemplate header='Week 5'>
        {WeeklySchedule['week-3'].map((match, index) => {
          return <MatchTemplate match={match} key={index} index={index} />;
        })}
      </ScheduleTemplate>
      <ScheduleTemplate header='Week 6'>
        {WeeklySchedule['week-3'].map((match, index) => {
          return <MatchTemplate match={match} key={index} index={index} />;
        })}
      </ScheduleTemplate>
      <ScheduleTemplate header='Week 7'>
        {WeeklySchedule['week-3'].map((match, index) => {
          return <MatchTemplate match={match} key={index} index={index} />;
        })}
      </ScheduleTemplate>
      <ScheduleTemplate header='Week 8'>
        {WeeklySchedule['week-3'].map((match, index) => {
          return <MatchTemplate match={match} key={index} index={index} />;
        })}
      </ScheduleTemplate>
    </CommonPage>
  );
}
