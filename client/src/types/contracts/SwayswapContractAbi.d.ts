/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  Overrides,
  BigNumberish,
  BytesLike,
} from "fuels";

interface SwayswapContractAbiInterface extends Interface {
  functions: {
    "deposit()": FunctionFragment;
    "withdraw(u64,struct ContractId)": FunctionFragment;
    "add_liquidity(u64,u64,u64)": FunctionFragment;
    "remove_liquidity(u64,u64,u64)": FunctionFragment;
    "swap_with_minimum(u64,u64)": FunctionFragment;
    "swap_with_maximum(u64,u64)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, any]
  ): string;
  encodeFunctionData(
    functionFragment: "add_liquidity",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap_with_minimum",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap_with_maximum",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionData(
    functionFragment: "deposit",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "withdraw",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "add_liquidity",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "remove_liquidity",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "swap_with_minimum",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "swap_with_maximum",
    data: BytesLike
  ): DecodedValue;
}

export class SwayswapContractAbi extends Contract {
  interface: SwayswapContractAbiInterface;
  functions: {
    deposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    "deposit()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    withdraw(
      amount: BigNumberish,
      asset_id: any,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    "withdraw(u64,struct ContractId)"(
      amount: BigNumberish,
      asset_id: any,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    add_liquidity(
      min_liquidity: BigNumberish,
      max_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    "add_liquidity(u64,u64,u64)"(
      min_liquidity: BigNumberish,
      max_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    remove_liquidity(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    "remove_liquidity(u64,u64,u64)"(
      min_eth: BigNumberish,
      min_tokens: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    swap_with_minimum(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    "swap_with_minimum(u64,u64)"(
      min: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    swap_with_maximum(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    "swap_with_maximum(u64,u64)"(
      amount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;
  };

  deposit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  "deposit()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  withdraw(
    amount: BigNumberish,
    asset_id: any,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  "withdraw(u64,struct ContractId)"(
    amount: BigNumberish,
    asset_id: any,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  add_liquidity(
    min_liquidity: BigNumberish,
    max_tokens: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  "add_liquidity(u64,u64,u64)"(
    min_liquidity: BigNumberish,
    max_tokens: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  remove_liquidity(
    min_eth: BigNumberish,
    min_tokens: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  "remove_liquidity(u64,u64,u64)"(
    min_eth: BigNumberish,
    min_tokens: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  swap_with_minimum(
    min: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  "swap_with_minimum(u64,u64)"(
    min: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  swap_with_maximum(
    amount: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  "swap_with_maximum(u64,u64)"(
    amount: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;
}