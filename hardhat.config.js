require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "Your alchemy url",
      accounts: [`0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd`],
    },
  },
};
