function getUserID() {
  return 50;
}

function isUserValid() {
  return getUserID() >= 30;
}

if (isUserValid()) {
  console.log(`User valid`);
} else {
  console.log(`User not valid`);
}
