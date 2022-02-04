/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OnBoardContract,
  OnBoardContractInterface,
} from "../OnBoardContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
      },
      {
        internalType: "address",
        name: "link",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    name: "DiceLanded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "roller",
        type: "address",
      },
    ],
    name: "DiceRolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "house",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "phone",
        type: "uint256",
      },
    ],
    name: "onboarding",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "roller",
        type: "address",
      },
    ],
    name: "rollDice",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "withdrawLINK",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620022ff380380620022ff83398181016040528101906200003791906200033a565b3380600086868173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000120576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200011790620003f4565b60405180910390fd5b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620001a857620001a781620001c360201b60201c565b5b50505081600381905550806004819055505050505062000531565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000235576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200022c9062000416565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6000815190506200030681620004e3565b92915050565b6000815190506200031d81620004fd565b92915050565b600081519050620003348162000517565b92915050565b600080600080608085870312156200035157600080fd5b60006200036187828801620002f5565b94505060206200037487828801620002f5565b935050604062000387878288016200030c565b92505060606200039a8782880162000323565b91505092959194509250565b6000620003b560188362000438565b9150620003c28262000491565b602082019050919050565b6000620003dc60178362000438565b9150620003e982620004ba565b602082019050919050565b600060208201905081810360008301526200040f81620003a6565b9050919050565b600060208201905081810360008301526200043181620003cd565b9050919050565b600082825260208201905092915050565b6000620004568262000467565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b620004ee8162000449565b8114620004fa57600080fd5b50565b62000508816200045d565b81146200051457600080fd5b50565b620005228162000487565b81146200052e57600080fd5b50565b60805160601c60a05160601c611d8d62000572600039600081816103f20152611088015260008181610496015281816106ea015261104c0152611d8d6000f3fe60806040526004361061007b5760003560e01c8063983fbab21161004e578063983fbab21461011b578063b1cad5e314610144578063dd02d9e514610181578063f2fde38b146101be5761007b565b806379ba5097146100805780637ac79721146100975780638da5cb5b146100c757806394985ddd146100f2575b600080fd5b34801561008c57600080fd5b506100956101e7565b005b6100b160048036038101906100ac91906114a1565b61037e565b6040516100be9190611832565b60405180910390f35b3480156100d357600080fd5b506100dc6103c6565b6040516100e99190611727565b60405180910390f35b3480156100fe57600080fd5b5061011960048036038101906101149190611465565b6103f0565b005b34801561012757600080fd5b50610142600480360381019061013d9190611400565b61048c565b005b34801561015057600080fd5b5061016b600480360381019061016691906113d7565b610584565b6040516101789190611832565b60405180910390f35b34801561018d57600080fd5b506101a860048036038101906101a391906113d7565b6106db565b6040516101b591906117a9565b60405180910390f35b3480156101ca57600080fd5b506101e560048036038101906101e091906113d7565b610944565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610277576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026e90611854565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b606061038982610958565b6040518060400160405280600481526020017f686f6c61000000000000000000000000000000000000000000000000000000008152509050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461047e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610475906118f4565b60405180910390fd5b61048882826109f1565b5050565b610494610ab8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b81526004016104ef929190611742565b602060405180830381600087803b15801561050957600080fd5b505af115801561051d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610541919061143c565b610580576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610577906118d4565b60405180910390fd5b5050565b60606000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610609576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610600906118b4565b60405180910390fd5b602a600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054141561068c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068390611894565b60405180910390fd5b6106d4600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b4a565b9050919050565b60006106e5610ab8565b6004547f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107419190611727565b60206040518083038186803b15801561075957600080fd5b505afa15801561076d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079191906114ca565b10156107d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c990611914565b60405180910390fd5b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610854576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084b90611954565b60405180910390fd5b610862600354600454611048565b9050816007600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602a600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16817f923de4fc4aece24a78a9e4ca3009c571a742f81ac2c004a229224b0fd1883bdd60405160405180910390a3919050565b61094c610ab8565b610955816111a7565b50565b6109ee8160405160240161096c9190611974565b6040516020818303038152906040527ff5b1bba9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112d6565b50565b60006001601483610a029190611aea565b610a0c91906119c7565b905080600860006007600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080837f909dd726737b7ffa4ae9d137e9edebe8a74a9c2910a4b60e8112f93ab217083760405160405180910390a3505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3f90611874565b60405180910390fd5b565b606060006040518061028001604052806040518060400160405280600981526020017f54617267617279656e000000000000000000000000000000000000000000000081525081526020016040518060400160405280600981526020017f4c616e6e6973746572000000000000000000000000000000000000000000000081525081526020016040518060400160405280600581526020017f537461726b00000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600681526020017f547972656c6c000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600981526020017f426172617468656f6e000000000000000000000000000000000000000000000081525081526020016040518060400160405280600781526020017f4d617274656c6c0000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600581526020017f54756c6c7900000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600681526020017f426f6c746f6e000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600781526020017f477265796a6f790000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600581526020017f417272796e00000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f467265790000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600781526020017f4d6f726d6f6e740000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600681526020017f5461726c6579000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600581526020017f4461796e6500000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600581526020017f556d62657200000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600881526020017f56616c6572796f6e00000000000000000000000000000000000000000000000081525081526020016040518060400160405280600881526020017f4d616e6465726c7900000000000000000000000000000000000000000000000081525081526020016040518060400160405280600781526020017f436c6567616e650000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600681526020017f476c6f766572000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600881526020017f4b6172737461726b0000000000000000000000000000000000000000000000008152508152509050806001846110049190611a1d565b6014811061103b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151915050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f0000000000000000000000000000000000000000000000000000000000000000848660006040516020016110bc9291906117c4565b6040516020818303038152906040526040518463ffffffff1660e01b81526004016110e99392919061176b565b602060405180830381600087803b15801561110357600080fd5b505af1158015611117573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113b919061143c565b50600061115d84600030600080898152602001908152602001600020546112ff565b905060016000808681526020019081526020016000205461117e91906119c7565b6000808681526020019081526020016000208190555061119e848261133b565b91505092915050565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611216576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120d90611934565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60008484848460405160200161131894939291906117ed565b6040516020818303038152906040528051906020012060001c9050949350505050565b600082826040516020016113509291906116fb565b60405160208183030381529060405280519060200120905092915050565b60008135905061137d81611cfb565b92915050565b60008151905061139281611d12565b92915050565b6000813590506113a781611d29565b92915050565b6000813590506113bc81611d40565b92915050565b6000815190506113d181611d40565b92915050565b6000602082840312156113e957600080fd5b60006113f78482850161136e565b91505092915050565b6000806040838503121561141357600080fd5b60006114218582860161136e565b9250506020611432858286016113ad565b9150509250929050565b60006020828403121561144e57600080fd5b600061145c84828501611383565b91505092915050565b6000806040838503121561147857600080fd5b600061148685828601611398565b9250506020611497858286016113ad565b9150509250929050565b6000602082840312156114b357600080fd5b60006114c1848285016113ad565b91505092915050565b6000602082840312156114dc57600080fd5b60006114ea848285016113c2565b91505092915050565b6114fc81611a51565b82525050565b61150b81611a6f565b82525050565b61152261151d82611a6f565b611ad6565b82525050565b60006115338261198f565b61153d81856119a5565b935061154d818560208601611aa3565b61155681611b79565b840191505092915050565b600061156c8261199a565b61157681856119b6565b9350611586818560208601611aa3565b61158f81611b79565b840191505092915050565b60006115a76016836119b6565b91506115b282611b8a565b602082019050919050565b60006115ca6016836119b6565b91506115d582611bb3565b602082019050919050565b60006115ed6010836119b6565b91506115f882611bdc565b602082019050919050565b6000611610600f836119b6565b915061161b82611c05565b602082019050919050565b6000611633600f836119b6565b915061163e82611c2e565b602082019050919050565b6000611656601f836119b6565b915061166182611c57565b602082019050919050565b6000611679601a836119b6565b915061168482611c80565b602082019050919050565b600061169c6017836119b6565b91506116a782611ca9565b602082019050919050565b60006116bf600e836119b6565b91506116ca82611cd2565b602082019050919050565b6116de81611a99565b82525050565b6116f56116f082611a99565b611ae0565b82525050565b60006117078285611511565b60208201915061171782846116e4565b6020820191508190509392505050565b600060208201905061173c60008301846114f3565b92915050565b600060408201905061175760008301856114f3565b61176460208301846116d5565b9392505050565b600060608201905061178060008301866114f3565b61178d60208301856116d5565b818103604083015261179f8184611528565b9050949350505050565b60006020820190506117be6000830184611502565b92915050565b60006040820190506117d96000830185611502565b6117e660208301846116d5565b9392505050565b60006080820190506118026000830187611502565b61180f60208301866116d5565b61181c60408301856114f3565b61182960608301846116d5565b95945050505050565b6000602082019050818103600083015261184c8184611561565b905092915050565b6000602082019050818103600083015261186d8161159a565b9050919050565b6000602082019050818103600083015261188d816115bd565b9050919050565b600060208201905081810360008301526118ad816115e0565b9050919050565b600060208201905081810360008301526118cd81611603565b9050919050565b600060208201905081810360008301526118ed81611626565b9050919050565b6000602082019050818103600083015261190d81611649565b9050919050565b6000602082019050818103600083015261192d8161166c565b9050919050565b6000602082019050818103600083015261194d8161168f565b9050919050565b6000602082019050818103600083015261196d816116b2565b9050919050565b600060208201905061198960008301846116d5565b92915050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006119d282611a99565b91506119dd83611a99565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a1257611a11611b1b565b5b828201905092915050565b6000611a2882611a99565b9150611a3383611a99565b925082821015611a4657611a45611b1b565b5b828203905092915050565b6000611a5c82611a79565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015611ac1578082015181840152602081019050611aa6565b83811115611ad0576000848401525b50505050565b6000819050919050565b6000819050919050565b6000611af582611a99565b9150611b0083611a99565b925082611b1057611b0f611b4a565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b7f526f6c6c20696e2070726f677265737300000000000000000000000000000000600082015250565b7f44696365206e6f7420726f6c6c65640000000000000000000000000000000000600082015250565b7f4e6f7420656e6f756768204c494e4b0000000000000000000000000000000000600082015250565b7f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c00600082015250565b7f4e6f7420656e6f756768204c494e4b20746f2070617920666565000000000000600082015250565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b7f416c726561647920726f6c6c6564000000000000000000000000000000000000600082015250565b611d0481611a51565b8114611d0f57600080fd5b50565b611d1b81611a63565b8114611d2657600080fd5b50565b611d3281611a6f565b8114611d3d57600080fd5b50565b611d4981611a99565b8114611d5457600080fd5b5056fea264697066735822122034b771417e4dc8a61efc3382dbc2d0e30ea4b21823f6105e237f608c4e58f81964736f6c63430008040033";

export class OnBoardContract__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    vrfCoordinator: string,
    link: string,
    keyHash: BytesLike,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OnBoardContract> {
    return super.deploy(
      vrfCoordinator,
      link,
      keyHash,
      fee,
      overrides || {}
    ) as Promise<OnBoardContract>;
  }
  getDeployTransaction(
    vrfCoordinator: string,
    link: string,
    keyHash: BytesLike,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      vrfCoordinator,
      link,
      keyHash,
      fee,
      overrides || {}
    );
  }
  attach(address: string): OnBoardContract {
    return super.attach(address) as OnBoardContract;
  }
  connect(signer: Signer): OnBoardContract__factory {
    return super.connect(signer) as OnBoardContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OnBoardContractInterface {
    return new utils.Interface(_abi) as OnBoardContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OnBoardContract {
    return new Contract(address, _abi, signerOrProvider) as OnBoardContract;
  }
}
