// SPDX-License-Identifier: MIT
pragma solidity >0.5.16;

import './GravatarRegistry.sol';
import './IGravatarRegistry.sol';


contract GravatarRegistryFactory {

    mapping(string => address) public getRegistry;
    string[] public allRegistries;

    event RegistryCreated(string gravatarGroup, address indexed registry,uint);


    function allRegistriesLength() external view returns (uint) {
        return allRegistries.length;
    }

    function createGravatarRegistry(string calldata _gravatarGroup) external returns (address registry) {
        require(getRegistry[_gravatarGroup] == address(0), 'GravatarRegistry: ALREADY_EXISTS');
        bytes memory bytecode = type(GravatarRegistry).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(_gravatarGroup));
        assembly {
            registry := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        IGravatarRegistry(registry).initialize(_gravatarGroup);
        getRegistry[_gravatarGroup] = registry;
        allRegistries.push(_gravatarGroup);
        emit RegistryCreated(_gravatarGroup, registry, allRegistries.length);
    }


}
