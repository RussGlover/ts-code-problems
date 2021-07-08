type MeetingRange = { startTime: number; endTime: number };
const mergeMeetings = (meetings: MeetingRange[]): MeetingRange[] => {
    if (meetings.length < 2) {
        throw new Error("not enough meetings to consider merging");
    }
    meetings.sort((a, b) => a.startTime - b.startTime);
    const mergedMeetings: MeetingRange[] = [];
    let rangeStartIndex: number = 0;
    let overLapIndex: number = 0;
    for (let i = 1; i < meetings.length; i++) {
        if (meetings[i].startTime <= meetings[rangeStartIndex].endTime) {
            if (meetings[i].endTime > meetings[overLapIndex].endTime) {
                overLapIndex = i;
            }
        } else {
            mergedMeetings.push({
                startTime: meetings[rangeStartIndex].startTime,
                endTime: meetings[overLapIndex].endTime,
            });
            rangeStartIndex = i;
            overLapIndex = i;
        }
    }
    mergedMeetings.push({
        startTime: meetings[rangeStartIndex].startTime,
        endTime: meetings[overLapIndex].endTime,
    });
    return mergedMeetings;
};

export default mergeMeetings;
