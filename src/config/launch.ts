import { CountdownTime } from "@/types";

/**
 * CLEARNYX Launch Configuration
 * 
 * Configured in Indian Standard Time (Asia/Kolkata, UTC+05:30).
 * Initial launch target is anchored 30 days from deployment:
 * 2026-11-29T18:00:00+05:30.
 *
 * Clients or admins can override this timestamp by setting the
 * NEXT_PUBLIC_LAUNCH_DATE environment variable (e.g., '2026-12-01T00:00:00+05:30')
 * without modifying the codebase.
 */

// Default fixed launch target timestamp in ISO 8601 with Asia/Kolkata offset
export const DEFAULT_LAUNCH_TARGET_ISO = "2026-11-29T18:00:00+05:30";

export const LAUNCH_TARGET_DATE_STRING =
  process.env.NEXT_PUBLIC_LAUNCH_DATE || DEFAULT_LAUNCH_TARGET_ISO;

export const LAUNCH_SCHEDULE = {
  timezone: "Asia/Kolkata",
  targetDateISO: LAUNCH_TARGET_DATE_STRING,
  displayTimezone: "IST (India Standard Time)",
  liveMessage: "WE ARE NOW LIVE",
  sectionHeading: "Something New Is Taking Shape.",
  supportingText:
    "The future of professional clear aligner solutions is getting closer.",
};

/**
 * Calculates remaining countdown values to the target date.
 */
export function getTimeRemaining(
  targetDateISO: string = LAUNCH_TARGET_DATE_STRING
): CountdownTime {
  const targetTime = new Date(targetDateISO).getTime();
  const currentTime = new Date().getTime();
  const diff = targetTime - currentTime;

  if (isNaN(targetTime) || diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isLive: true,
      totalMilliseconds: 0,
    };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    isLive: false,
    totalMilliseconds: diff,
  };
}
