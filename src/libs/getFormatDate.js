import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export const getFormatDate = (postDate) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const formatDate = dayjs.utc(postDate).tz("Asia/Tokyo").format("YYYY-MM-DD");
  return formatDate;
}
