var search = document.getElementById("search");
var loading = document.querySelector("#loading");

/* BASIC URL CLEANUP */
function defaultUrl(url) {
  url = url.trim();

  if (!url.includes('.') && !url.startsWith('https://') && !url.startsWith('http://')) {
    return "https://www.google.com/search?q=" + url;
  }

  if (url.startsWith('https://')) return url;
  if (url.startsWith('http://')) return 'https://' + url.substring(7);
  if (url.startsWith('//')) return 'https:' + url;

  return 'https://' + url;
}

function isUrl(val = '') {
  return /^http(s?):\/\//.test(val) || (val.includes('.') && val[0] !== ' ');
}

/* SCRAMJET GO FUNCTION */
function scram(url) {
  loading.style.display = "flex";
  loading.querySelectorAll("span")[1].innerText = "loading content";

  setTimeout(() => {
    loading.querySelectorAll("span")[1].innerText = "heavy server load may cause slowness";
  }, 2500);

  setTimeout(() => {
    loading.querySelectorAll("span")[1].innerHTML =
      "there might be an error; join our <span style='text-decoration:underline;cursor:pointer;color:rgb(200,200,255);' onclick=\"window.open('https://discord.gg/hFZC5cgsmq', '_blank');\">discord</span> for support";
  }, 15000);

  let finalUrl = url.trim();
  if (!isUrl(finalUrl)) finalUrl = "https://www.google.com/search?q=" + finalUrl;
  else if (!(finalUrl.startsWith("https://") || finalUrl.startsWith("http://"))) {
    finalUrl = "https://" + finalUrl;
  }

  // Scramjet rewrite
  window.location.href = "/scram/" + finalUrl;
}

/* SEARCH BAR EVENT */
if (search) {
  search.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      scram(search.value);
    }
    if (e.key === "Escape") {
      search.blur();
    }
  });
}
var search = document.getElementById("search");
var loading = document.querySelector("#loading");

/* BASIC URL CLEANUP */
function defaultUrl(url) {
  url = url.trim();

  if (!url.includes('.') && !url.startsWith('https://') && !url.startsWith('http://')) {
    return "https://www.google.com/search?q=" + url;
  }

  if (url.startsWith('https://')) return url;
  if (url.startsWith('http://')) return 'https://' + url.substring(7);
  if (url.startsWith('//')) return 'https:' + url;

  return 'https://' + url;
}

function isUrl(val = '') {
  return /^http(s?):\/\//.test(val) || (val.includes('.') && val[0] !== ' ');
}

/* SCRAMJET GO FUNCTION */
function scram(url) {
  loading.style.display = "flex";
  loading.querySelectorAll("span")[1].innerText = "loading content";

  setTimeout(() => {
    loading.querySelectorAll("span")[1].innerText = "heavy server load may cause slowness";
  }, 2500);

  setTimeout(() => {
    loading.querySelectorAll("span")[1].innerHTML =
      "there might be an error; join our <span style='text-decoration:underline;cursor:pointer;color:rgb(200,200,255);' onclick=\"window.open('https://discord.gg/hFZC5cgsmq', '_blank');\">discord</span> for support";
  }, 15000);

  let finalUrl = url.trim();
  if (!isUrl(finalUrl)) finalUrl = "https://www.google.com/search?q=" + finalUrl;
  else if (!(finalUrl.startsWith("https://") || finalUrl.startsWith("http://"))) {
    finalUrl = "https://" + finalUrl;
  }

  // Scramjet rewrite
  window.location.href = "/scram/" + finalUrl;
}

/* SEARCH BAR EVENT */
if (search) {
  search.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      scram(search.value);
    }
    if (e.key === "Escape") {
      search.blur();
    }
  });
}
