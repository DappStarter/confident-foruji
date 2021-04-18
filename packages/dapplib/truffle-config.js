require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn proud hunt neck fold spray'; 
let testAccounts = [
"0x9de53a03a9ee7a9d78349b5713cd5eaac7601bfe8560a4fd457d0c09a29738da",
"0x7bef371a0fd12e07c4cbafdd2f2d9f97eaf8a96b5255c22b769e430adde34847",
"0x330b796e42500c1acfa63adc3b22ce62ce899ce82d371b4d6eb81dc8563091d3",
"0x4b497dcaa4bba9f577c6aff6183603126e966b5d5e127a36444e3fff65230e88",
"0x1e044be1093d3021ccd057dea19c0aee960616c64f5a0cf0205233fd5117f1f7",
"0x1718838844b330f36bb312de951a928d959b18e863c51057661faa675a430ff7",
"0x44610e3e1012b971e167c9567e418720ea5f253ae2a4613dda9520581872dab3",
"0x7a9b4afc51ce4ca22d299655406e209516c35ba33fc9e33f54373e1401fd6174",
"0xa74713956a5a1fed14e5304967b5e78a7dabeb6a53fd258e05929430e65977d7",
"0xf6a9dd147f69c26d6120a5616207603494fb01fccd37e92dcd889247d9ead74c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
