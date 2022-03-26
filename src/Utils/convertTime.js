import moment from "moment"

export function convertDate(ctime) {
  const date = moment(ctime).format('DD.MM.YYYY HH:mm');
  return date;
}