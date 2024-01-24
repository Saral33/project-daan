import Layout from '../../layout/Layout';
import Silder from '../../components/slider/Silder';
import Button from '../../components/button/Button';
import AllCampaigns from '../../components/page-specific/HomeComponent/AllCampaigns';
import { useEffect, useState } from 'react';
import useCampaign from '../../hooks/useCampaignHooks';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';
import SkeletonLoading from '../../components/loading/SkeletonLoading';
import { getRandomNumber, getDateString, getRemainingTime } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<boolean>(false);

  const [campaignLoading, setCampaignLoading] = useState(true);
  const { getCampaigns, contract, address } = useCampaign();
  const [random, setRandom] = useState<number>();
  const navigate = useNavigate();

  const searchCampaigns = (searchTerm: string) => {
    const filteredCampaigns = campaigns.filter(
      (campaign) =>
        campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCampaigns(filteredCampaigns);
    setFiltered(true);
    if (searchTerm === '') {
      setFiltered(false);
    }
  };

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
        closed: campaign?.deadline.toNumber() < new Date().getTime()/1000  // In seconds
      }));
      setRandom(getRandomNumber(0, parsedRes?.length));
      setCampaigns(parsedRes);
      setFilteredCampaigns(parsedRes);
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
    <Layout searchCampaigns={searchCampaigns}>
      <div className="w-full max-w-[1000px] mt-10 mx-auto pb-10">
        {campaignLoading ? (
          <SkeletonLoading />
        ) : (
          !filtered && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <img
                className="w-full"
                src={campaigns[random as number]?.image}
              />
              <div>
                <h1 className="text-2xl gradient-text-1 font-semibold">
                  {campaigns[random as number]?.title}
                </h1>
                <p className="mt-4">
                  {campaigns[random as number]?.description}
                </p>
                <div className="mt-2">
                  <Silder
                    disabled={true}
                    max={Number(campaigns[random as number]?.target)}
                    defaultVal={Number(
                      campaigns[random as number]?.amountCollected
                    )}
                  />
                </div>
                <div className="flex text-xl justify-between mt-4 w-full">
                  <p>Raised: {campaigns[random as number]?.amountCollected}</p>

                  <p>Goal: {campaigns[random as number]?.target}</p>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <div>
                    <p>
                      Campaign By :{' '}
                      <span className="ml-3 break-words">
                        {campaigns[random as number]?.name} (
                        {campaigns[random as number]?.owner})
                      </span>{' '}
                    </p>
                  </div>
                  <div className="w-full font-bold">
                    {getRemainingTime(campaigns[random as number]?.deadline)}
                  </div>
                  <Button
                    onClick={() =>
                      navigate(`/details/${campaigns[random as number]?.pId}`)
                    }
                    variant="primary"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          )
        )}

        <div className="font-bold mt-20">
          {!filtered ? 'All Campaigns' : 'Filtered Campaigns'} (
          {filteredCampaigns?.length})
        </div>
        {campaignLoading ? (
          <SkeletonLoading />
        ) : (
          <AllCampaigns data={filteredCampaigns} />
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
