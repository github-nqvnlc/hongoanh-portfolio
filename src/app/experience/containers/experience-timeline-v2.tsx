import { TimelineV2 } from "@/components/ui/timeline-v2"
import { EXPERIENCE_TIMELINE_V2 } from "@/data/experience-v2"
// import BlurImage from "next/image"

export function ExperienceTimelineV2() {
  return (
    <div className="w-full h-full">
      <TimelineV2 data={EXPERIENCE_TIMELINE_V2} />
    </div>
  )
}
