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
