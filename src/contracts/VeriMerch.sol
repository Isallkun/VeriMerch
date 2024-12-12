// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VeriMerch is ERC20, Ownable {
    event Scanned(address indexed user, uint256 amount);

    constructor() ERC20("VeriMerch", "VMERCH") Ownable(msg.sender) {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function scanCode() external {
        uint256 amount = 10 * 10 ** decimals(); 
        _mint(msg.sender, amount);
        emit Scanned(msg.sender, amount);
    }
}
