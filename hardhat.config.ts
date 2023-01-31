import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity:{
    compilers: [
      {
        version: "0.8.17"
      },
      {
        version: "0.4.0",
      }
    ]
  },
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/91de03ef572d4688886c617f3a41c947`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/NFTRVRWJ58UPGH1VRBKCC2QDANHF2FCYK9`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/NFTRVRWJ58UPGH1VRBKCC2QDANHF2FCYK9`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/91de03ef572d4688886c617f3a41c947`,
      accounts: ["d752e5fe4e509ff00db8fa142a3944d86fb4c1461cdbe49acbd30ba68bfc917d"],
      gas: 2100000,
      gasPrice: 8000000000
    },
    kovan: {
      url: `https://kovan.infura.io/v3/NFTRVRWJ58UPGH1VRBKCC2QDANHF2FCYK9`,
    },
    arbitrumRinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/NFTRVRWJ58UPGH1VRBKCC2QDANHF2FCYK9`,
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/NFTRVRWJ58UPGH1VRBKCC2QDANHF2FCYK9`,
    },
    optimismKovan: {
      url: `https://optimism-kovan.infura.io/v3/NFTRVRWJ58UPGH1VRBKCC2QDANHF2FCYK9`,
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/NFTRVRWJ58UPGH1VRBKCC2QDANHF2FCYK9`,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/NFTRVRWJ58UPGH1VRBKCC2QDANHF2FCYK9`,
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/NFTRVRWJ58UPGH1VRBKCC2QDANHF2FCYK9`,
    },
  },
};

export default config;
