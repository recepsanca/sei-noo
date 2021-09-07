// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class L2ToL1Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("caller", Value.fromBytes(Bytes.empty()));
    this.set("destination", Value.fromBytes(Bytes.empty()));
    this.set("uniqueId", Value.fromBigInt(BigInt.zero()));
    this.set("batchNumber", Value.fromBigInt(BigInt.zero()));
    this.set("indexInBatch", Value.fromBigInt(BigInt.zero()));
    this.set("arbBlockNum", Value.fromBigInt(BigInt.zero()));
    this.set("ethBlockNum", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("callvalue", Value.fromBigInt(BigInt.zero()));
    this.set("data", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save L2ToL1Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save L2ToL1Transaction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("L2ToL1Transaction", id.toString(), this);
    }
  }

  static load(id: string): L2ToL1Transaction | null {
    return changetype<L2ToL1Transaction | null>(
      store.get("L2ToL1Transaction", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get caller(): Bytes {
    let value = this.get("caller");
    return value!.toBytes();
  }

  set caller(value: Bytes) {
    this.set("caller", Value.fromBytes(value));
  }

  get destination(): Bytes {
    let value = this.get("destination");
    return value!.toBytes();
  }

  set destination(value: Bytes) {
    this.set("destination", Value.fromBytes(value));
  }

  get uniqueId(): BigInt {
    let value = this.get("uniqueId");
    return value!.toBigInt();
  }

  set uniqueId(value: BigInt) {
    this.set("uniqueId", Value.fromBigInt(value));
  }

  get batchNumber(): BigInt {
    let value = this.get("batchNumber");
    return value!.toBigInt();
  }

  set batchNumber(value: BigInt) {
    this.set("batchNumber", Value.fromBigInt(value));
  }

  get indexInBatch(): BigInt {
    let value = this.get("indexInBatch");
    return value!.toBigInt();
  }

  set indexInBatch(value: BigInt) {
    this.set("indexInBatch", Value.fromBigInt(value));
  }

  get arbBlockNum(): BigInt {
    let value = this.get("arbBlockNum");
    return value!.toBigInt();
  }

  set arbBlockNum(value: BigInt) {
    this.set("arbBlockNum", Value.fromBigInt(value));
  }

  get ethBlockNum(): BigInt {
    let value = this.get("ethBlockNum");
    return value!.toBigInt();
  }

  set ethBlockNum(value: BigInt) {
    this.set("ethBlockNum", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get callvalue(): BigInt {
    let value = this.get("callvalue");
    return value!.toBigInt();
  }

  set callvalue(value: BigInt) {
    this.set("callvalue", Value.fromBigInt(value));
  }

  get data(): Bytes {
    let value = this.get("data");
    return value!.toBytes();
  }

  set data(value: Bytes) {
    this.set("data", Value.fromBytes(value));
  }
}