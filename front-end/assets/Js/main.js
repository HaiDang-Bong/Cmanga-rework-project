const openCategory = document.querySelector('.js-hide-category');
        const openCategory2 = document.querySelector('.js-hide-category2');
        const category = document.querySelector('.category-show');
        function openHideMenu1 (){
            category.classList.add('js-show')
        };
        function closeHideMenu1 (){
            category.classList.remove('js-show')
        };
        openCategory.addEventListener('mouseover', openHideMenu1);
        openCategory.addEventListener('mouseout', closeHideMenu1);
        openCategory2.addEventListener('mouseover', openHideMenu1);
        openCategory2.addEventListener('mouseout', closeHideMenu1);
        //Category end
var openCategoryy = 'Danh mục'
// alert (openCategoryy);
// setInterval (function() {
//     console.log (Math.random())
// }, 1500);
// Hàm trả về kết quả và có thể xủ lý tiếp
function cong(a, b) {
    return a + b;
};
var result = cong(2, 5);
console.log(result);

//Dựng lại ruturn - sai
var return_1 ;
function sumCalculator1(el_1, el_2) {
    return_1 = el_1 + el_2;
}
sumCalculator1(5, 7);
var result_1 = sumCalculator1(5, 7);
console.log('Kết quả 1:' + ' ' + result_1 );

// Dựng lại ruturn- đúng
var return_2 ;
function sumCalculator2(el_1, el_2) {
    return_2 = el_1 + el_2;
}
sumCalculator2(5, 7);
console.log('Kết quả 2:' + ' ' + return_2 );
// Mô tả cách hoạt đôngh của toán tư tiền tố(prefix) và hậu tố (postfix)
 function prefix (a) {
    return
 }

function testConsole (mess1, mess2) {
    console.log(mess1 + mess2)
 }
alert(testConsole())
console.log(testConsole)