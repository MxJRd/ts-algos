// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

export const reverseStr = (str: string, buildStr: string | undefined = '', idx: number | undefined = str.length - 1): string => {
  if(buildStr.length >= str.length || idx < 0) return buildStr
  return reverseStr(str, buildStr + str[idx], idx - 1)
}