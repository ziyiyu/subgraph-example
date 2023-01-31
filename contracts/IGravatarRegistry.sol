// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

interface IGravatarRegistry {
    event NewGravatar(uint id, address owner, string displayName, string imageUrl);
    event UpdatedGravatar(uint id, address owner, string displayName, string imageUrl);

    function createGravatar(string calldata _displayName, string calldata _imageUrl) external;

    function getGravatar(address owner) external view returns (string memory, string memory);
    function updateGravatarName(string calldata _displayName) external;

    function updateGravatarImage(string calldata _imageUrl) external;

    function setMythicalGravatar() external ;

    function initialize(string calldata _groupName) external ;
}
