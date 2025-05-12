export function makeRandomString(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

export function getDayRandomNumber(minValue,maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

export function addEmailAddress(FirstName){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}` + `${month}` + `${year}`;
    let email =
      `${FirstName}` + currentDate + "@yopmail.com";
      return email;
}