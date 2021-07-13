// fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');
// console.log(list);
function removeItemsFromList() {
    var item = list.pop();

    if(item){
        setTimeout(function(){
            removeItemsFromList();
        },0)
    }
};
 
removeItemsFromList();

//fill array with 60000 elements
// const list = new Array(60000).join('1.1').split('.');
 
// function removeItemsFromList() {
//     var item = list.pop();
 
//     if (item) {
//         removeItemsFromList();
//     }
// };
 
// removeItemsFromList();