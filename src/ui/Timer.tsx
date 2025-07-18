import {JSX, useEffect, useState} from "react";
import {useTranslation} from "@/lib/i18n/LocaleTranslation";
import {DateTime, DurationObjectUnits, Interval} from 'luxon';

export default function Timer({targetTime}: { targetTime: DateTime }): JSX.Element {
    const {t} = useTranslation();
    const [diff, setDiff] = useState<DurationObjectUnits | null>(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setDiff(Interval.fromDateTimes(DateTime.now(), targetTime).toDuration(["weeks", "days", "hours", "minutes", "seconds"]))
        }, 500);

        return () => clearInterval(interval);
    });
    return (
        <div>
            {}
            {diff ?
                <div className={'flex flex-col'}>
                    <div className={'flex flex-row gap-2'}>
                        <div
                            className={'flex justify-items-start text-yellow-400'}>{(diff?.weeks ?? 1) > 1 && `${diff.weeks} שבועות `}</div>
                        <div
                            className={'flex justify-items-start text-red-400'}>{(diff?.days ?? 1) > 1 && `${diff.days} ימים `}</div>
                    </div>
                    <div className={'flex flex-row gap-2'}>
                        <div className={'justify-items-start text-blue-400'}>{`${diff.hours} שעות `}</div>
                        <div className={'justify-items-start text-green-400'}>{`${diff.minutes} דקות `}</div>
                    </div>
                    {/*<div className={'flex flex-row'}>*/}
                    {/*    <div*/}
                    {/*        className={'flex flex-1 justify-items-start text-violet-400'}>{`${Math.floor(diff?.seconds ?? 0)} שניות `}</div>*/}
                    {/*</div>*/}
                </div> : 'hello'}
        </div>
    );
}