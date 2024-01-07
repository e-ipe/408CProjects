// This function makes a AJAX request
function makeRequest(method, url, doneCallback, body) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function onreadystatechange() {
    const { status, readyState } = xhr;
    // Possible values here: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    if (readyState === XMLHttpRequest.DONE) {
      if (status >= 200 && status < 400) {
        // A status between 200 and 400 (uninclusively) denotes that the request was successful
        // Most of the time, we're going to be dealing with JSON objects, so we can use JSON.parse
        // here to turn the string (eg "{}") to the object (eg {})
        const responseData = JSON.parse(xhr.responseText);
        doneCallback({
          responseData
        });
      } else {
        // Oh no! There has been an error with the request!
        // Let callback know what the statusText says, which should help in knowing what went wrong
        doneCallback({
          error: new Error(xhr.statusText)
        });
      }
    }
  };
  // Opens a connection with the server in question
  xhr.open(method, url);
  // Sends the request with a body if this is a POST request
  xhr.send(body || null);
}

makeRequest(
  "GET",
  "https://data.wa.gov/api/views/f6w7-q2d2/rows.json?accessType=DOWNLOAD",
  (response) => {
    if (response.error) {
      throw response.error;
    }
    let counter = 0;
    // The data part of the the electric vehicle information
    const dataArray = response.responseData.data;
    let divList = "";
    for (let i = 0; i < dataArray.length; i++) {
      divList = `${divList}<div>${dataArray[i][14]}</div>`;
      if (dataArray[i][14] == "TESLA") {
        counter++;
      }
    }
    document.getElementById(
      "tesla-count"
    ).innerHTML = `TESLA Count: ${counter}`;
    document.getElementById("brands").innerHTML = divList;
  }
);

const stringifyJSON = (data) => {
  if (data === undefined) return undefined;
  else if (data === null) return "null";
  else if (data.constructor === String)
    return '"' + data.replace(/"/g, '\\"') + '"';
  else if (data.constructor === Number) return String(data);
  else if (data.constructor === Boolean) return data ? "true" : "false";
  else if (data.constructor === Array)
    return (
      "[ " +
      data
        .reduce((acc, v) => {
          if (v === undefined) return [...acc, "null"];
          else return [...acc, stringifyJSON(v)];
        }, [])
        .join(", ") +
      " ]"
    );
  else if (data.constructor === Object)
    return (
      "{ " +
      Object.keys(data)
        .reduce((acc, k) => {
          if (data[k] === undefined) return acc;
          else return [...acc, stringifyJSON(k) + ":" + stringifyJSON(data[k])];
        }, [])
        .join(", ") +
      " }"
    );
  else return "{}";
};
