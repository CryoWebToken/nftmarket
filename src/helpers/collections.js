export const networkCollections = {
  "0x38": [
    //Add Your Collections here
    {
      image:
        "https://cryogen.life/images/smallICO.png",
      name: "Cryopunks",
      addrs: "0x89bd6e2304e431B5BF9a999f99D7912e68a9f5ec",
    },
    {
      image:
        "https://cryogen.life/images/streetpunks.png",
      name: "Streetpunks",
      addrs: "0xB6b545Ac637aec4EC6599258F7CDe70261676333",
    },
  ],
  
  "0x13881": [
    //Add Your Collections here
    {
      image:
        "https://lh3.googleusercontent.com/BWCni9INm--eqCK800BbRkL10zGyflxfPwTHt4XphMSWG3XZvPx1JyGdfU9vSor8K046DJg-Q8Y4ioUlWHiCZqgR_L00w4vcbA-w=s0",
      name: "Test Mages",
      addrs: "0x275d553f426355c20b134D944B5b28D31CDb83DA",
    },
    {
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmfLbpeVHxReWKNLaXTPcWiafi49eoAL4gRwMGuXtx2Eqe/images/14.png",
      name: "Pixel Show",
      addrs: "0xCA34404dD8Bd6537BE76F3A51B379F8949bD7973",
    },
  ],

  "0x1": [
    {
      image:
        "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130",
      name: "Bored Ape Yacht Club",
      addrs: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    },
    {
      image:
        "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130",
      name: "Crypto Punks",
      addrs: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    },
  ],
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
