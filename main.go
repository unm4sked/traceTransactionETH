package main

import (
	"fmt"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/vm/runtime"
)

func main() {
	var example string = "6060604052600a8060106000396000f360606040526008565b00"

	ret, _, err := runtime.Execute(common.Hex2Bytes(example), nil, nil)

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Output: ", ret)
	}
}
