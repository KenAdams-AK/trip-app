import { padWithLeadingZero } from "@/helpers/dateFormater";

import { useCountdown } from "@/hooks/useCountdown";

import "./CountdownTimer.scss";

type CountdownTimerProps = {
  targetDate: number | string | Date;
};

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <div className="countdown-timer">
        <div className="countdown-timer__notice">It&apos;s time to travel!</div>
      </div>
    );
  }

  return (
    <div className="countdown-timer">
      <div className="countdown-timer__item">
        <span className="countdown-timer__value">{days}</span>
        <span className="countdown-timer__label">Days</span>
      </div>
      <div className="countdown-timer__item">
        <span className="countdown-timer__value">
          {padWithLeadingZero(hours)}
        </span>
        <span className="countdown-timer__label">Hours</span>
      </div>
      <div className="countdown-timer__item">
        <span className="countdown-timer__value">
          {padWithLeadingZero(minutes)}
        </span>
        <span className="countdown-timer__label">Minutes</span>
      </div>
      <div className="countdown-timer__item">
        <span className="countdown-timer__value">
          {padWithLeadingZero(seconds)}
        </span>
        <span className="countdown-timer__label">Seconds</span>
      </div>
    </div>
  );
}
