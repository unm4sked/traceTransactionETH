pragma solidity ^0.4.0;


contract Addition{
    uint x;
    function add(uint a, uint b){
        x = a+b;
    }

    function get() public returns (uint) {
        return x;
    }
}