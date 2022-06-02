const postJSON = async (url: string, data: any) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const content = await response.json();
    return content
  } catch (err) {
    console.error('Failed POST request', err)
    return ''
  }
}

const http = {
    postJSON
}

export default http