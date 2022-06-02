/**
 * Fetches user's IP
 * @returns
 */
export async function getUserIp(): Promise<string | undefined> {
  try {
    const response = await fetch("https://api.db-ip.com/v2/free/self");
    const data = await response.json();
    return data.ipAddress;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Gets user's ZIP code by IP address
 * @returns
 */
export async function getUserZip(): Promise<string | undefined> {
  try {
    const userIpAddress = await getUserIp();
    const url = `https://freegeoip.live/json/${userIpAddress}`;
    const response = await fetch(url);
    const userData = await response.json();
    return userData.zip_code;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Waits for specific amount of MS before executing further
 * @param ms
 * @returns
 */
export async function wait(ms: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}

/**
 * Gets number of days of specific month
 * @param year
 * @param month
 * @returns
 */
export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

/**
 * Fill array with a range of values
 * @param start
 * @param end
 * @returns
 */
export function range(start: number, end: number) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}