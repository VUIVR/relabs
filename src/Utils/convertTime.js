export function convertDate(ctime) {
    let date = new Date(ctime).toLocaleString().slice(0, -3);
    
    return date;
  }