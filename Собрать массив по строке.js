/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

    Массив: 
    const array = [
        'я в Симбирск,',
        'в трактире.',
        'с утра',
        'В ту же ночь',
        'Я остановился',
        'для закупки', 
        'что и было поручено Савельичу.',
        'приехал,',
        'где должен был',
        'нужных вещей',
        'отправился по лавкам',
        'пробыть сутки',
        'Савельич'
    ]

   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/
let originalText = `В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам`;
//В оригинальном массиве есть 2 опечатки - после Приехал не должно быть запятой, а после Нужных вещей, наоборот, запятой не должно быть
const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал',
    'где должен был',
    'нужных вещей,',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
];
/*
1. Создать пустой массив с будущим результатом до цикла
2. Пройтись циклом по массиву
3. Задать условие - если изначальный текст начинается с одного из эл-тов массива
4. Перезаписать изначальную строку, выведя ее после того кол-ва знаков, сколько в совпадающем эл-те массива.
5. Добавить к числу убираемых из строки знаком еще 1 - пробел в тексте
6. Занести совпавший элемент в новый массив. Нужный порядок эл-тов будет сразу, т.к каждый раз ищем совпадение с началом строки
7. Убрать из изначального массива совпавший элемент, чтобы уменьшить его длину. Нужно, т.к окончания цикла связано с концом длины массива.
8. Присвоить  i значение уменьшившейся длины массива, чтобы при новой итерации начинать заново проходить по всему массиву
9. В условии цикла должно быть меньше или равно 0, потому что в противном случае первый элемент массива не будет попадать в обработку, он же с 0 индексом
10. Для вывода результата в виде строки использовать метод join с разделителем - пробелом
*/
let result = [ ]; 
for (let i = array.length; i >= 0; i--){
        if(originalText.startsWith(array[i])) {
            originalText = originalText.slice(array[i].length + 1);
            result.push(array[i]);
            array.splice(i,1);
            i = array.length; 
        }
    };
//console.log(result);
let resultString = result.join(' ');
console.log(resultString);
//console.log(typeof resultString);
endOfTask(3);
