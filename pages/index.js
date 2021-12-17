import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import burn from '../ethereum/burn';
import web3 from '../ethereum/web3';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [amount, setAmount] = useState(null);
  const [totalBurned, setTotalBurned] = useState(null);

  useEffect(async () => {
    const total = await burn.methods.getTotalBurned().call();
    setTotalBurned(total);
  });

  const burnEth = async () => {
    const accounts = await web3.getAccounts();
    const tx = await burn.methods.burn().send({ from: accounts[0], value: web3.utils.toWei(amount.toString(), 'ether') });
    console.log(tx);
  };

  return (
    <div>
      <h1>Burn your Ethereum</h1>
      <h3>Total burned: {totalBurned}</h3>
      <form>
        <input 
          type='text'
          placeholder='amount to burn in ETH'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={burnEth}>Burn</button>
      </form>
      change to the rinkeby network if you have not already
    </div>
  )
}
