import moment from "moment"

export function convertDate(ctime) {
 const date = moment(ctime*1000).format('DD.MM.YYYY hh:mm');
  return date;
}