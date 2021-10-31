require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths:{
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten:{
      url: "https://ropsten.infura.io/v3/6cff8097792c4a13b325a2a8627c2d0c",
      // should store this private key @ source zshrc 0xKEY
      accounts: [`0x704e238b15a250db4270be7d90a7adeb4a480b66121ef1649c8cec1a42bdeaaf`]
    }
  }
};
