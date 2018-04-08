// INSTALL DEPENDENCIES
// "yarn add -D mz readline-sync"

const fs = require('mz/fs');
var readlineSync = require('readline-sync');

Deploy();

async function Deploy() {
  const filename = 'app.json';
  const appName = await getAppname(filename);
  const currentVersion = await getVersion(filename);
  const incrementedVersionNumber = await getIncrementedVersionNumber(filename);

  console.log(`The version of "${appName}" is "${currentVersion}"`);

  const version = readlineSync.question(
    'Enter a new version number or press the Enter key to increment the build number: ',
    {defaultInput: incrementedVersionNumber}
  );

  setVersion(version, filename);

  console.log(`The new current version of "${appName}" is now "${version}"`);
}

async function getIncrementedVersionNumber(filename) {
  const appJson = await readJson(filename);
  const settings = appJson.expo;

  for (let i in settings) {
    if (i === 'version') {
      const val = settings[i];
      const splitNumbers = val.split('.');
      splitNumbers[splitNumbers.length - 1] = parseInt(splitNumbers[splitNumbers.length - 1]) + 1;

      let newVersion = "";

      for(let i = 0; i < splitNumbers.length; i++) {
        if (i != (splitNumbers.length - 1)) {
        newVersion += splitNumbers[i] + '.';
        } else {
        newVersion += splitNumbers[i];
        }
      }

      return newVersion;
    }
  }
}

async function getAppname(filename) {
  const appJson = await readJson(filename);
  const settings = appJson.expo;

  for (let i in settings) {
    if (i === 'name') {
      return settings[i];
    }
  }
}

async function getVersion(filename) {
  const appJson = await readJson(filename);
  const settings = appJson.expo;

  for (let i in settings) {
    if (i === 'version') {
      return settings[i];
    }
  }
}

async function setVersion(version, filename) {
  const appJson = await readJson(filename);
  const settings = appJson.expo;

  for (let i in settings) {
    if (i === 'version') {
      settings[i] = version;
    }
  }

  fs.writeFile(filename, JSON.stringify(appJson, null, 2));
}

async function readJson(filename) {
  try {
    const file = await fs.readFile(filename);
    return JSON.parse(file.toString());
  } catch (err) { console.error( err ) }
}
