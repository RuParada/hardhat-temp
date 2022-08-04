//SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PaRusToken is ERC20 {
    constructor() ERC20("PaRusToken", "PR") {
        _mint(msg.sender, 10000 * 10**decimals());
    }
}
