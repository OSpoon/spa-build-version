async function _serverVersion() {
  return await new Promise((resolve) => {
    fetch("/version.json", {
      headers: {
        "cache-control": "no-cache",
      },
    })
      .then((response) => {
        try {
          response.json().then((json) => {
            resolve(json.version);
          });
        } catch (error) {
          resolve(0);
        }
      })
      .catch(() => {
        resolve(0);
      });
  });
}

function _currentVersion() {
  return Number(document.getElementsByTagName("meta").buildVersion.content);
}

async function _inspector() {
  let isConsistent = true;
  const sv = await _serverVersion();
  const cv = _currentVersion();
  console.log(`检测到本地版本${cv}和服务器版本${sv}`);
  console.log("本地&服务器版本是否一致:>>", (isConsistent = sv === cv));
  return isConsistent;
}

export default async function() {
  return await _inspector();
}
