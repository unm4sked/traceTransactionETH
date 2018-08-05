pragma solidity ^0.4.0;
contract Test {

    uint storedData;

    function set(uint x) public {
        if (x == 0)
        {
            x = 1;
        }
        else
        {
            storedData = x;
        }
        
    }
}