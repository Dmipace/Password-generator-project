export function getRandomChar(min, max) {
    const limit = max - min + 1;         //najprv potrebujeme vypočítať limit pre nahodne znaky
                                        //min je number a max je character each of input

    return String.fromCharCode(Math.floor(Math.random() * limit) + min);

}

//v ascci tabulke ma nula hodnotu 48 a 
// 1 - 49 hodnotu a postupne
//a my nastavíme min a max ascii hodnotu a tak získame random character
//napr. 57 - 49 + 1 
//57 až po 49 predstavuju hodnoty od 0 po 9
// čiže ak po vypočte 57 - 49 + 1
//a ak napr. dostanem 4 a + min čo je v zatvorke tak to min je 49
// 4 + 49 = 53 tak dostanem ascci hodnotu tu 53 a to string to premenní na character code
// to sa použije pre capital letter, small letter a number a 
//a to v app.js presne pri const fieldArray 

export function getSpecialChar() {
    const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}















