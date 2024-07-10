'use client';

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts';
import returnMons from '@/data/pokemonDataS2';

import { ArrowBigUp } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { nameSplit } from '../getPokemon';
import Image from 'next/image';

interface ChartData {
  name: string;
}

export function PokemonChart({ name }: ChartData) {
  const monData = returnMons(name);
  const chartData = [
    { stat: 'HP', value: monData.stats[0].stat },
    { stat: 'ATK', value: monData.stats[1].stat },
    { stat: 'DEF', value: monData.stats[2].stat },
    { stat: 'SPA', value: monData.stats[3].stat },
    { stat: 'SPD', value: monData.stats[4].stat },
    { stat: 'SPE', value: monData.stats[5].stat },
  ];
  const chartConfig = {
    value: {
      label: 'Stat',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig;

  const monType = monData.types[0];

  return (
    <Card
      className='chart-card'
      data-type={monType}
    >
      <CardHeader className='chart-header'>
        <Image
          loading='lazy'
          className='pokemon-img'
          src={monData.sprite ? monData.sprite : ''}
          alt={`Sprite for ${monData.name}.`}
          width={300}
          height={300}
          data-type={monData.types[1] ? monData.types[1] : monData.types[0]}
        />
        <CardTitle className='chart-pokemon'>
          <div>{nameSplit(name)}</div>
          <div className='chart-types'>
            <div className='pokemon-types'>
              {monData.types.map((type: any, index: number) => {
                return (
                  <>
                    {type !== undefined || null ? (
                      <div
                        className='type-icon-container'
                        key={index}
                      >
                        <Image
                          src={`/icons/${type}.svg`}
                          height={30}
                          width={30}
                          data-type={type}
                          alt={`${type} icon.`}
                          className='pokemon-type-icon'
                        />
                        <div
                          className='hover-only type_title'
                          data-type={type}
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className='chart-tooltip' />}
            />
            <PolarGrid
              className={`chart-fill-${monType} opacity-10`}
              fill={`var(--${monData.types[0]})`}
            />
            <PolarAngleAxis dataKey='stat' />
            <Radar
              dataKey='value'
              fill={`var(--${monData.types[0]})`}
              fillOpacity={0.6}
              stroke={`var(--${monData.types[0]})`}
              strokeOpacity={1}
              strokeWidth={2}
            />
            <PolarRadiusAxis
              angle={60}
              className='chart-axis'
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='chart-footer'>
        <div className='chart-footer-stats'>
          {chartData.map((value, index) => {
            return (
              <>
                {value.value >= 100 ? (
                  <div
                    className={`stat-label stat-${value.stat.toLowerCase()}`}
                    key={index}
                  >
                    <ArrowBigUp />
                    {value.stat}
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
