const Moralis = require("moralis/node");
const serverUrl = "https://dfzv8sqxyyou.usemoralis.com:2053/server";
const appId = "iVkAkL1Na7w15AL2LkRvHLjNFGkweHL5POXDPboS";
const contractAddress = "0x89bd6e2304e431B5BF9a999f99D7912e68a9f5ec";
async function getAllOwners() {
  await Moralis.start({ serverUrl: serverUrl, appId: appId });
  let cursor = null;
  let owners = {};
  do {
    const response = await Moralis.Web3API.token.getNFTOwners({
      address: contractAddress,
      chain: "bsc",
      limit: 100,
      cursor: cursor,
    });
    console.log(
      `Got page ${response.page} of ${Math.ceil(
        response.total / response.page_size
      )}, ${response.total} total`
    );
    for (const owner of response.result) {
      owners[owner.owner_of] = {
        amount: owner.amount,
        owner: owner.owner_of,
        tokenId: owner.token_id,
        tokenAddress: owner.token_address,
      };
    }
    cursor = response.cursor;
  } while (cursor != "" && cursor != null);

  console.log("owners:", owners, "total owners:", Object.keys(owners).length);
}

getAllOwners();