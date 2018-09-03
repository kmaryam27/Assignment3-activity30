const $ = function (employeeList) {

    //********************print functions*************************** */
    const printAll = function(){
        for (let i = 0; i < employeeList.length; i++) {
             render(`employee${i+1}:  -name: ${employeeList[i].name}    |   -Office Number: ${employeeList[i].officeNum}    |   -Telephone Number: ${employeeList[i].phoneNum}`);
         }
     }
  
    const print = function(i){
        render(`employee${i+1}:     -name: ${employeeList[i].name}  |   -Office Number: ${employeeList[i].officeNum}    |   -Telephone Number: ${employeeList[i].phoneNum}`);
    }



    /************************modul pattern************************************** */

    const publicAPI = {
        printAll: printAll,
        print: print,
      }
    
      return publicAPI;
}