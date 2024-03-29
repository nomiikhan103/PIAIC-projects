import inquirer from "inquirer";
// const balance = 20000;
// const mypin = "123";
// const userpin = await inquirer.prompt({
//   name: "pin",
//   message: "enter your pin",
//   type: "number",
// });
// if (userpin.pin == mypin) {
//   console.log("you enter a correct pin");
//   const opreationAns = await inquirer.prompt([
//     {
//       name: "opreation",
//       message: "plz select one to complete your trasaction",
//       choices: ["cashwidraw", "checkbalace","doaothertrasaction"],
//       type: "list",
//     },
//   ]);
//   if (opreationAns.opreation === "cashwidraw") {
//     const amountAns = await inquirer.prompt([
//       {
//         type: "number",
//         name: "amount",
//         message: "plz enter the amount you whant to widraw ",
//       },
//     ]);
//     console.log(
//       ` you widthdraw ${amountAns.amount} amout and your remain balance is  ${
//         balance - amountAns.amount
//       }  of amount`
//     );
//   } else {
//     console.log(`our current balace is ${balance}`);
//   }
// } else {
//   console.log("plz enter correct pin number");
// }
const balance = 20000;
const mypin = 1234;
const onlinetransaction = await inquirer.prompt([
    {
        type: "list",
        name: "selecttransaction",
        choices: ["cashwidraw", "balanceinquirey"],
    },
]);
if (onlinetransaction.selecttransaction == "cashwidraw") {
    const amount = await inquirer.prompt([
        {
            type: "number",
            name: "cash",
            message: "enter your amount",
        },
    ]);
    console.log(`you widraw ${amount.cash} amount balance widthdraw ${balance - amount.cash}`);
}
else {
    console.log(`our balance is ${balance}`);
}
