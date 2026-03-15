"use client"

import { TimelineV2 } from "@/components/ui/timeline-v2"
import { getExperienceTimelineV2 } from "@/data/experience-v2"
import { useI18n } from "@/lib/i18n"

export function ExperienceTimelineV2() {
  const { t } = useI18n()
  const data = getExperienceTimelineV2(t)

  return (
    <div className="w-full h-full">
      <TimelineV2 data={data} />
    </div>
  )
}
