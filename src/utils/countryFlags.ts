// 国家代码到国旗表情符号的映射
export const countryToFlag = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

// 国家名称到国家代码的映射
export const countryCodeMap: Record<string, string> = {
  'United States': 'US',
  'United Kingdom': 'GB',
  'Germany': 'DE',
  'France': 'FR',
  'Japan': 'JP',
  'Canada': 'CA',
  'Australia': 'AU',
  'Brazil': 'BR',
  'India': 'IN',
  'Singapore': 'SG'
};