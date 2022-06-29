require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note often upgrade hidden clog bubble snap'; 
let testAccounts = [
"0x42a4d529142b6c005186fbab7398525946c6c5467613bde06f253c4380c4869d",
"0x15b73c612545bff98c8746fc3402f4a148fe1aa31320fc59e078fb6fc16c730b",
"0x4e8368e73b9f6443cc8f6802b3013f1fab70e373fe532f665b204859a30a4860",
"0xad1bc8f6bc4ee352eec2c365c10e6df8a14e9c7f203529260c037fe2206c426a",
"0xe37c7719131357b950be614b64a559cde3bc7c3da8a5191d5b03a4816d0e0306",
"0xc316650152c017034dde431bdc170e99d60ab5d12fe5b426bde0d363c3c4bc2d",
"0x16a75766da9549e86daef19171ed759877e9acfc71517b1fee5781a7cc7f1436",
"0x7e2c797e5cc7f31312b5fee5274bbeb9b8246b0d5bc386345dc8075d78bdf886",
"0xcb07b7589046d48bb9496b260ff9edb2e2c7dd6380ec882df42eabd6891e7400",
"0x266d256293e1d5ba8d8937883a6eed4b2bbaf482854716619c4d1375eb57abca"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

