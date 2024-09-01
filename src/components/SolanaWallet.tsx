import { mnemonicToSeed } from "bip39"
import { useState } from "react"
import { derivePath } from "ed25519-hd-key"
import { Keypair } from "@solana/web3.js"
import nacl from "tweetnacl"

function SolanaWallet({mnemonic} : {mnemonic : string}){
const [currentIndex, setCurrentIndex]=useState(0)
const [keypairs,setKeypairs]=useState<Keypair[]>([])


async function generateWallet(){

const seed =  await mnemonicToSeed(mnemonic)
const path = `m/44'/501'/${currentIndex}'/0'`
const derivedSeed = derivePath(path, seed.toString("hex")).key
const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
const keypair= Keypair.fromSecretKey(secret)
setCurrentIndex(currentIndex+1)
setKeypairs([...keypairs,keypair])
}
return(
<div>
    <button onClick={generateWallet}>Add Solana Wallet</button>
    {keypairs.map(p=><div>
        public key - {p.publicKey.toBase58()}
        <br></br>
        private key - {p.secretKey}
    </div>)}
</div>
) 


}

export default SolanaWallet