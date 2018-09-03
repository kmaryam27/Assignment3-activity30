const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const command = prompt('input command');
let inputName;
let field;

//*************************************************************** */
 if (command.toLowerCase() === 'print') {//if client types print
  $(employeeList).printAll();
 } 
 else if (command.toLowerCase() === 'verify') {//if client types verify
   inputName = prompt('input name');
   let isExist =false;

   for (let i = 0; i < employeeList.length; i++) {
     if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
       isExist = true;
     }
   }
   render(isExist);
 }
 else if (command.toLowerCase() === 'lookup') {//if client types lookup
  inputName = prompt('input name');

  for (let i = 0; i < employeeList.length; i++) {
    if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
      $(employeeList).print(i); 
    }
  }
} 
else if(command.toLowerCase() === 'contains'){//if client types contains
    let str = prompt('input string');
    for (let i = 0; i < employeeList.length; i++) {
      if ((employeeList[i].name).toUpperCase().includes(str.toUpperCase())) {
        $(employeeList).print(i);
      }
    }
 }
 else if(command.toLowerCase() === 'update'){//if client types update
  inputName = prompt('input name');
  field = prompt('input field that you want to change it');
  const value = prompt('input new value for field');

  for (let i = 0; i < employeeList.length; i++) {
    if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
      if (field.toLowerCase() === 'name') {
        employeeList[i].name = value;
      }
      else if(field.toLowerCase() === 'office number'){
        employeeList[i].officeNum = value;
      }
      else if(field.toLowerCase() === 'telephone number'){
        employeeList[i].phoneNum = value;
      }
      $(employeeList).print(i);
    }
  }
}
else if(command.toLowerCase() === 'add'){//if client types add
  inputName = prompt('input name');
  const officeNum = prompt('input Office Number');
  const phoneNum = prompt('input Phone Number');

  const employee = {
  name: inputName,
  phoneNum: phoneNum,
  officeNum: officeNum
};
  employeeList.push(employee);
  $(employeeList).printAll();
}
else if(command.toLowerCase() === 'delete'){//if client types delete
  inputName = prompt('input name');

  for (let i = 0; i < employeeList.length; i++) {
    if ((employeeList[i].name).toUpperCase() === inputName.toUpperCase()) {
      employeeList.splice(i,1);
    } 
  }
  $(employeeList).printAll();
}
else if (command.toLowerCase() === 'arrange') {//if client types arrange
  field = prompt('input field that you want to change it');
  if (field.toLowerCase() === 'name') {
    employeeList.sort(function(a, b){
      let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
      if (nameA < nameB) //sort string ascending
          return -1;
      if (nameA > nameB)
          return 1;
      return 0; //default return value (no sorting)
  });
  }
  else if(field.toLowerCase() === 'office number'){
    employeeList.sort(function(a, b){
      return a.officeNum-b.officeNum;
  });
  }
  $(employeeList).printAll();
}
