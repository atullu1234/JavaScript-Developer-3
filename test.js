function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === `Google`) {
      resolve(`Google says hi`);
    } else {
      reject(`We can only talk to Google`);
    }
  });
}

async function doWork() {
  const response = await makeRequest("Google");
  console.log("Response received");
  const processedResponse = await processRequest(response);
  console.log(processedResponse);
}
doWork();
