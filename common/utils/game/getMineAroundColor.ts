export const getMineAroudColor = (mineAround: number | string) => {
  return mineAround === 1
    ? '#0164D8'
    : mineAround === 4
    ? '#00326C'
    : mineAround === 7
    ? '#001936'
    : mineAround === 2
    ? '#5E9315'
    : mineAround === 5
    ? '#38580C'
    : mineAround === 8
    ? '#1C2C06'
    : mineAround === 3
    ? '#d00303'
    : mineAround === 6
    ? '#5c0101'
    : mineAround === '?'
    ? '#000000'
    : '#DDDDDD'
}
