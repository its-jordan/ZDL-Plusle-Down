'use client';

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts';
import returnMons from '@/data/pokemonDataO2';

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
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri';

interface ChartData {
  name: string;
  children?: React.ReactNode;
}

export function PokemonChart({ name, children }: ChartData) {
  const monData = returnMons(name);
  const chartData = [
    {
      stat: monData.stats[0].name.toUpperCase(),
      value: monData.stats[0].stat,
      axisHeader: monData.stats[0].stat + ' ' + monData.stats[0].name,
    },
    {
      stat: monData.stats[1].name.toUpperCase(),
      value: monData.stats[1].stat,
      axisHeader: monData.stats[1].stat + ' ' + monData.stats[1].name,
    },
    {
      stat: monData.stats[2].name.toUpperCase(),
      value: monData.stats[2].stat,
      axisHeader: monData.stats[2].stat + ' ' + monData.stats[2].name,
    },
    {
      stat: monData.stats[3].name.toUpperCase(),
      value: monData.stats[3].stat,
      axisHeader: monData.stats[3].stat + ' ' + monData.stats[3].name,
    },
    {
      stat: monData.stats[4].name.toUpperCase(),
      value: monData.stats[4].stat,
      axisHeader: monData.stats[4].stat + ' ' + monData.stats[4].name,
    },
    {
      stat: monData.stats[5].name.toUpperCase(),
      value: monData.stats[5].stat,
      axisHeader: monData.stats[5].stat + ' ' + monData.stats[5].name,
    },
  ];
  const chartConfig = {
    value: {
      label: 'Stat',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig;

  const monType = monData.types[0];

  return (
    <Card className='chart-card' data-type={monType}>
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
        <Link
          href={`https://www.smogon.com/dex/sv/pokemon/${name}`}
          className='chart-pokemon'>
          <div className='chart-pokemon-name'>{nameSplit(name)}</div>
          <div className='chart-types'>
            <div className='pokemon-types'>
              {monData.types.map((type: any, index: number) => {
                return (
                  <>
                    {type !== undefined || null ? (
                      <div className='type-icon-container' key={index}>
                        <Image
                          src={`/icons/${type}.svg`}
                          height={30}
                          width={30}
                          data-type={type}
                          alt={`${type} icon.`}
                          className='pokemon-type-icon'
                        />
                        <div className='hover-only type_title' data-type={type}>
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
        </Link>
      </CardHeader>
      <CardContent className='pb-0 chart-graph'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'>
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent className='chart-tooltip' hideLabel />
              }
            />
            <PolarGrid
              className={`chart-fill-${monType} opacity-10`}
              fill={`var(--${monData.types[0]})`}
            />
            <PolarAngleAxis className='chart-axis' dataKey='axisHeader' />
            <Radar
              dataKey='value'
              fill={`var(--${monData.types[0]})`}
              fillOpacity={0.5}
              stroke={`var(--${monData.types[0]})`}
              strokeOpacity={1}
              strokeWidth={2}
              activeDot={{
                r: 5,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='chart-footer'>
        {chartData.find((v) => v.value >= 100) ? (
          <h2 className='chart-abilities-header abilities-heading'>
            <div>High Stats</div>
            <RiArrowDropDownLine className='arrow-down'></RiArrowDropDownLine>
          </h2>
        ) : (
          <></>
        )}
        <div className='chart-footer-stats'>
          {chartData.map((value, index) => {
            return (
              <>
                {value.value >= 100 ? (
                  <div
                    className={`stat-label stat-${value.stat.toLowerCase()}`}
                    key={index}>
                    {/* <ArrowBigUp /> */}
                    <div className='high-stat'>
                      <div className='high-stat-text'>{value.value}</div>
                    </div>
                    <div className='high-stat-value'>{value.stat}</div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </div>
      </CardFooter>
      {children ? children : <></>}
    </Card>
  );
}
