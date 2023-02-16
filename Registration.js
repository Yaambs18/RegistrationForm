function printDetails(event) {
    event.preventDefault();
    console.log(event.srcElement[0].value);
    console.log(event.srcElement[1].value);
    console.log(event.srcElement[2].value);
    console.log(event.srcElement[3].value);
    console.log(event.srcElement[4].value);

}