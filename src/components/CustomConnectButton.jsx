// "use client";

// import { ConnectButton, useAddress, useBalance } from "thirdweb/react";
// import { lightTheme } from "thirdweb/react";
// import { createWallet } from "thirdweb/wallets";
// import { client } from "@/context/client";

// export default function CustomConnectButton({ client, wallets }) {
//   const address = useAddress();
//   const { data: balance } = useBalance();

//   return (
//     <ConnectButton
//       client={client}
//       wallets={wallets}
//       connectButton={{
//         label: "Connect Wallet",
//       }}
//       // Kustomisasi ketika wallet terkoneksi
//       connected={(wallet) => (
//         <div className="p-4 bg-hsl(244, 89%, 61%) rounded-lg shadow-lg text-white">
//           <p className="mb-2">Connected: {address}</p>
//           <p className="mb-4">Balance: {balance?.formatted} {balance?.symbol}</p>
          
//           {/* Tombol Switch Account */}
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 w-full"
//             onClick={wallet?.proactiveChangeWallet}
//           >
//             Switch Account
//           </button>

//           {/* Tombol Disconnect */}
//           <button
//             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
//             onClick={wallet?.disconnect}
//           >
//             Disconnect Wallet
//           </button>
//         </div>
//       )}
//       connectModal={{
//         size: "compact",
//         showThirdwebBranding: false,
//       }}
//       theme={lightTheme({
//         colors: {
//           primaryButtonBg: "hsl(244, 99%, 50%)",
//           connectedButtonBg: "hsl(244, 99%, 50%)",
//           connectedButtonBgHover: "hsl(244, 99%, 50%)",
//           borderColor: "hsl(244, 99%, 50%)",
//           primaryText: "hsl(0, 0%, 100%)",
//           modalBg: "hsl(244, 89%, 61%)",
//           tertiaryBg: "hsl(244, 99%, 50%)",
//         },
//       })}
//     />
//   );
// }
