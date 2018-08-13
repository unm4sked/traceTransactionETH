pragma solidity ^0.4.0;
contract Test {

    uint storedData;

    function set(uint x) public {
        if (x == 0)
        {
            
            x =1 ;
            x = x*2;
            x = x +83;
            uint y = 47;
            storedData = x+y;
        }
        else
        {
            
            storedData = x;
        }
        
    }
    
    function get() public view returns (uint ){
        return storedData;
    }
}