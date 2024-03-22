export default function replaceUsername(e: string) {
  if (e == 'danknett') {
    return e.replace('d', 'D');
  } else if (e == 'seanboyq') {
    return e.replace('s', 'S').replace('b', 'B').replace('q', 'Q');
  } else if (e == 'dtbaggins') {
    return e.replace('dtb', 'DTB');
  } else if (e == 'ifurgat') {
    return e.replace('f', 'F');
  } else if (e == 'tokotoro') {
    return e.replace('t', 'T');
  } else {
    return e;
  }
}
