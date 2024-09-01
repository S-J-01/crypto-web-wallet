
import { useState } from 'react'
import { generateMnemonic } from 'bip39'
import './App.css'
import SolanaWallet from './components/solanaWallet'

function App() {
  
  const [mnemonic, setMnemonic] = useState("")

   function newMnemonic (){
    const mn =  generateMnemonic()
    //const mn = buffer.toString()
    setMnemonic(mn)
  }

  return (
    <>
      <button onClick={newMnemonic}>Generate Secret Phrase</button>
      <input type="text" value={mnemonic} />
      <SolanaWallet mnemonic={mnemonic}></SolanaWallet>
    </>
  )
}

export default App
