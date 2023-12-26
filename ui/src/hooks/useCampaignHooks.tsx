import {
  useContract,
  useContractWrite,
  useAddress,
  useMetamask,
} from '@thirdweb-dev/react';
import { ethers } from 'ethers';
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
  const donate = async (pId: number, amount: string) => {
    const data = await contract?.call('donateToCampaign', [pId], {
      value: ethers.utils.parseEther(amount),
    });

    return data;
  };
  const getDonations = async (pId: number) => {
    const donations = await contract?.call('getDonations', [pId]);
    return donations
  }

  return { contract, createCampaign, address, connect, getCampaigns, donate, getDonations };
};

export default useCampaign;
