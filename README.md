# Basic Full Stack Eth Dev e2e

the RICO token (named after our pet : rabbit 🐰)

I wonder how :
```
1. to create, deploy, and test Ethereum smart contracts to local, test, and mainnet
2. to switch between local, test, and production environments / networks
3. to connect to and interact with the contracts using various environments from a front end like React, Vue
```

The build:
```
1. A contract for creating and updating a message on the Ethereum blockchain
2. A contract for minting tokens, then allowing the owner of the contract to send tokens to others and to read the token balances, and for owners of the new tokens to also send them to others.
3. We will also build out a React front end that will allow a user to:

    a. Read the greeting from the contract deployed to the blockchain
    b. Update the greeting
    c. Send the newly minted tokens from their address to another address
    d. Once someone has received tokens, allow them to also send their tokens to someone else
    e. Read the token balance from the contract deployed to the blockchain
```

How to:

1. Install dependencies
```
npm install
```

2.  Start the local test node
```
npx hardhat node
```

3. Deploy contracts
```
local: npx hardhat run script/deploy.js --network localhost
test production (ropsten): npx hardhat run script/deploy.js --network ropsten
```

4. Start app
```
npm start
```

Reference:

```
1. https://www.youtube.com/watch?v=a0osIaAOFSE
2. https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13
```

