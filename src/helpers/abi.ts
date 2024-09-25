export const abi = [
  {
    type: 'function',
    name: 'transfer',
    stateMutability: 'nonpayable',
    inputs: [
      { name: "to", type: 'address' },
      { name: "value", type: 'uint256' },
    ],
    outputs: [{ type: 'bool' }],
  },
] as const


