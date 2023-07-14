let accountdetail = [
    {
        'Name':'Arjun Hanjari Rathod',
        'Account':90023456788,
        'Balence':100000
    },
    {
        'Name':'Karan Prakash Rathod',
        'Account':70078695634,
        'balence':200000
    },
    {
        'Name':'Pawan Namdev Rathod',
        'Account':30056780967,
        'balence':200000
        
    },
    {
        'Name':'Vikas Anil Rathod',
        'Account':40056342587,
        'balence':200000
    },
    {
        'Name':'Kundan Sanjay Rathod',
        'Account':60089765645,
        'balence':200000
    }]

// const access = ()=>{
//     // let name_candi = document.getElementById('name cad').value;
//     // let acc_detail = document.getElementById('acc num').value;
//     let name_candi = accountdetail[0].Name;
//     let acc_detail = accountdetail[0].Account;
//     let acc_bal = accountdetail[0].Balence;

//     document.getElementById('doc').innerHTML = "Name : "+name_candi;
//     document.getElementById('Number').innerHTML = "Account Number : "+acc_detail;
//     document.getElementById('Balence').innerHTML = "Balence : "+acc_bal;
    

// }







// alert(accountdetail[0].Name)    
// alert(accountdetail[0].Account)  

// let depo;
// let depo = accountdetail[0].Balence;
// let add = document.getElementById('amm_num').value;
// add = Number.parseInt(add)
// alert(add+depo)

// let depo = accountdetail[0].Balence;
// let add = 34;
// alert(add+depo) //how to add input in number in javascript
//how to add button with a tag
// add = Number.parseInt(add)
// const deposite =(depo,add)=>{
//     alert(add+depo)
//     // console.log(depo)
//     // document.getElementById('doc').innerHTML = "Name : "+name_candi;
//     // document.getElementById('finalbal').innerHTML = "Balence : "+ h;


document.getElementById('ammount').innerHTML = "Account balence :"+accountdetail[0].Balence;
// }
const deposite = ()=>{
    let depo = accountdetail[0].Balence;
    let add = document.getElementById('amm_num').value;
    add = Number.parseInt(add)
    let result = depo + add
    document.getElementById('')
    document.getElementById('ammount').innerHTML ="Account Balence :"+ result;
    document.getElementById('newammount').innerHTML = "Ammount Balence :" + result;
}

const withdrawal = ()=>{
    let depo = accountdetail[0].Balence;
    let sub = document.getElementById('amm_num').value;
    sub = Number.parseInt(sub)
    let result = depo - sub
    document.getElementById('')
    document.getElementById('ammount').innerHTML ="Account Balence :"+ result;
    document.getElementById('newammount').innerHTML = "Ammount Balence :" + result;
}
const trasfer = ()=>{
    let depo = accountdetail[0].Balence;
    let trans = document.getElementById('amm_num').value;
    trans = Number.parseInt(trans)
    let result = depo - trans
    document.getElementById('')
    document.getElementById('ammount').innerHTML ="Account Balence :"+ result;
    document.getElementById('newammount').innerHTML = "Ammount Balence :" + result;
}

const donate = ()=>{
    let depo = accountdetail[0].Balence;
    let don = document.getElementById('amm_num').value;
    don = Number.parseInt(don)
    let result = depo - don
    document.getElementById('')
    document.getElementById('ammount').innerHTML ="Account Balence :"+ result;
    document.getElementById('newammount').innerHTML = "Ammount Balence :" + result;
}
