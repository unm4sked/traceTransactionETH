var solc = require('solc');
var fs = require('fs');

var file = "";

fs.readFile('./contracts/test.sol','utf8',function(err,contents) {
    file.concat(contents)
});
console.log(file)
var input = 'pragma solidity ^0.4.0;contract Test {uint storedData;function set(uint x) public {if (x == 0){x = 1;} else{storedData = x;}}}'

var output = solc.compile(input, 1)

for( var contractName in output.contracts)
{
    console.log(output.contracts[contractName].bytecode)
    console.log('-----------------------------------')
    console.log(output.contracts[contractName].opcodes)
    console.log('-----------------------------------')
    console.log(output.contracts[contractName].runtimeBytecode)


}
