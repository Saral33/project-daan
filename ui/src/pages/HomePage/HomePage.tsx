import Layout from '../../layout/Layout';
import Silder from '../../components/slider/Silder';
import Button from '../../components/button/Button';
import AvatarComponent from '../../components/avatar/Avatar';
import AllCampaigns from '../../components/page-specific/HomeComponent/AllCampaigns';
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import useCampaign from '../../hooks/useCampaignHooks';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';
import SkeletonLoading from '../../components/loading/SkeletonLoading';
import { getRandomNumber } from '../../utils/utils';

const HomePage = () => {
  const [campaigns, setCampaigns] = useState<any>([]);
  const [campaignLoading, setCampaignLoading] = useState(true);
  const { getCampaigns, contract, address } = useCampaign();
  const [random, setRandom] = useState<number>();

  const getAll = async () => {
    try {
      setCampaignLoading(true);
      const res = await getCampaigns();
      const parsedRes = res?.map((campaign: any, i: number) => ({
        owner: campaign?.owner,
        title: campaign?.title,
        description: campaign?.description,
        target: ethers.utils.formatEther(campaign?.goal.toString()),
        deadline: campaign?.deadline.toNumber(),
        amountCollected: ethers.utils.formatEther(campaign?.raised.toString()),
        image: campaign?.image,
        pId: i,
        name: campaign?.fullName,
      }));
      setRandom(getRandomNumber(0, parsedRes?.length));
      setCampaigns(parsedRes);
      setCampaignLoading(false);
    } catch (error) {
      setCampaignLoading(false);
      toast.error('Something went wrong. Contact admin');
    }
  };
  useEffect(() => {
    if (contract) getAll();
  }, [contract]);
  return (
    <Layout>
      <div className="w-full max-w-[1000px] mt-10 mx-auto pb-10">
        {campaignLoading ? (
          <SkeletonLoading />
        ) : (
          <div className="w-full grid grid-cols-2 gap-5">
            <img className="w-full" src={campaigns[random as number]?.image} />
            <div>
              <h1 className="text-2xl gradient-text-1 font-semibold">
                {campaigns[random as number]?.title}
              </h1>
              <p className="mt-8">{campaigns[random as number]?.description}</p>
              <div className="mt-5">
                <Silder
                  disabled={true}
                  max={Number(campaigns[random as number]?.target)}
                  defaultVal={Number(
                    campaigns[random as number]?.amountCollected
                  )}
                />
              </div>
              <div className="flex text-xl justify-between mt-4 w-full">
                <p>
                  Raised: {campaigns[random as number]?.amountCollected}
                </p>

                <p>Goal: {campaigns[random as number]?.target}</p>
              </div>

              <div className="mt-5 flex flex-col gap-5">
                <div>
                  <p>
                    Campaign By :{' '}
                    <span className="ml-3">
                      {campaigns[random as number]?.name} ({campaigns[random as number]?.owner})
                    </span>{' '}
                  </p>
                </div>
                <Button variant="primary">Donate Now</Button>
              </div>
            </div>
          </div>
        )}

        <div className="font-bold mt-20">
          All Campaigns ({campaigns?.length})
        </div>
        {campaignLoading ? (
          <SkeletonLoading />
        ) : (
          <AllCampaigns data={campaigns} />
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
