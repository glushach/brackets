module.exports = function check(str, bracketsConfig) {
    const arrWithBrackets = bracketsConfig.map((item) => item.reduce((a, v) => a + v)); //превратить матрицу в массив строк

    let compareLength = str.length; //длина строки после удаления совпадений в цикле

    while (str.length) {
        arrWithBrackets.forEach((value) => {
            str = str.replace(value, '') //удалить вcе совпадения со строки, которые совпадает с value
        });

        if (compareLength === str.length) return false; //если в forEach не найдено совпадение, return прервет цикл

        compareLength = str.length;
    }

    return true; //строка пустая

}
