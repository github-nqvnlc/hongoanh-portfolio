import { TimelineV2 } from "@/components/ui/timeline-v2"
import { EXPERIENCE_TIMELINE } from "@/data/experience"
// import BlurImage from "next/image"

export function ExperienceTimeline() {
  return (
    <div className="w-full h-full">
      <TimelineV2 data={EXPERIENCE_TIMELINE} />
    </div>
  )
}
