var VM = require('ethereumjs-vm')

var vm = new VM()

var code = '7f4e616d65526567000000000000000000000000000000000000000000000000003055307f4e616d6552656700000000000000000000000000000000000000000000000000557f436f6e666967000000000000000000000000000000000000000000000000000073661005d2720d855f1d9976f88bb10c1a3398c77f5573661005d2720d855f1d9976f88bb10c1a3398c77f7f436f6e6669670000000000000000000000000000000000000000000000000000553360455560df806100c56000396000f3007f726567697374657200000000000000000000000000000000000000000000000060003514156053576020355415603257005b335415603e5760003354555b6020353360006000a233602035556020353355005b60007f756e72656769737465720000000000000000000000000000000000000000000060003514156082575033545b1560995733335460006000a2600033545560003355005b60007f6b696c6c00000000000000000000000000000000000000000000000000000000600035141560cb575060455433145b1560d25733ff5b6000355460005260206000f3'

var code2 = '608060405260043610603e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166360fe47b181146043575b600080fd5b348015604e57600080fd5b506058600435605a565b005b801515606757506001606d565b60008190555b505600a165627a7a723058202c0358c0a4f7ede65db3a4dc5ca453641ffbbab4131aac779c91856f073288f30029'

var code3 = '608060405234801561001057600080fd5b5060ec8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636d4ce63c14604e578063771602f7146076575b600080fd5b348015605957600080fd5b50606060aa565b6040518082815260200191505060405180910390f35b348015608157600080fd5b5060a8600480360381019080803590602001909291908035906020019092919050505060b3565b005b60008054905090565b80820160008190555050505600a165627a7a72305820276d5e330de17c5a009f2b1122caf335d4b803aa9accd1b3d910efee37a3667a0029'

var code3_runtime = '6080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636d4ce63c14604e578063771602f7146076575b600080fd5b348015605957600080fd5b50606060aa565b6040518082815260200191505060405180910390f35b348015608157600080fd5b5060a8600480360381019080803590602001909291908035906020019092919050505060b3565b005b60008054905090565b80820160008190555050505600a165627a7a72305820276d5e330de17c5a009f2b1122caf335d4b803aa9accd1b3d910efee37a3667a0029'

var code4 = '608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061044f806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063075461721461006757806327e235e3146100be57806340c10f1914610115578063d0679d3414610162575b600080fd5b34801561007357600080fd5b5061007c6101af565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100ca57600080fd5b506100ff600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101d4565b6040518082815260200191505060405180910390f35b34801561012157600080fd5b50610160600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101ec565b005b34801561016e57600080fd5b506101ad600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610299565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561024757610295565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b5050565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102e55761041f565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd3345338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b50505600a165627a7a72305820875fbbfb24beb4038b0784d8f765a032da380b109eba139205740427250bb1540029'

var input1_code2 = '0x60fe47b10000000000000000000000000000000000000000000000000000000000000038'
var input2_code2 = '0x60fe47b10000000000000000000000000000000000000000000000000000000000000000'

vm.on('step', function (data) {
    console.log(`[VM ] -> PC:${data.pc.toString(16)} ${data.opcode.name}`)
  })
  

vm.runCode({
    code: Buffer.from(code3, 'hex'), // code needs to be a Buffer
    data: Buffer.from('0xcdcd77c000000000000000000000000000000000000000000000000000000000000000450000000000000000000000000000000000000000000000000000000000000001','hex'),
    gasLimit: Buffer.from('ffffffff', 'hex')
  }, function(err, results){
    if(err === null)
    {
      console.log("Output: \n"+results.return.toString('hex'))
    }
    else
    {
      console.log(results.exceptionError)
    }
  })