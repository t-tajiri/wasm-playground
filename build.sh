#!/bin/bash
yarn install

cd rust
cargo build
wasm-pack build