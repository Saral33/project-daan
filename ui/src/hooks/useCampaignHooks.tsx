import {
  useContract,
  useContractWrite,
  useAddress,
  useMetamask,
} from '@thirdweb-dev/react';
const useCampaign = () => {
  const { contract } = useContract(
    '0x8Bf0362A3FB86BB121d8EbC7fF28341699F8f240'
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    'createCampaign'
  );
  const address = useAddress();
  const connect = useMetamask();
  const getCampaigns = async () => {
    const campaigns = await contract?.call('getCampaigns');
    return campaigns;
  };

  return { contract, createCampaign, address, connect, getCampaigns };
};

export default useCampaign;
