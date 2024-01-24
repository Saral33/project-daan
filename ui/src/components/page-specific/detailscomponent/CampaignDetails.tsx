import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useCampaign from '../../../hooks/useCampaignHooks';
import { useParams } from 'react-router-dom';
import Layout from '../../../layout/Layout';
import SkeletonLoading from '../../loading/SkeletonLoading';
import Input from '../../input/Input';
import Button from '../../button/Button';
import LoadingDialog from '../../dialog/LoadingDialog';
import { getDateString, getRemainingTime } from '../../../utils/utils';
import Silder from '../../slider/Silder';

const CampaignDetails = () => {
  const [presentCampaign, setPresentCampaign] = useState<any>({});
  const [campaignLoading, setCampaignLoading] = useState(true);
  const { getCampaigns, getDonations, contract, donate } = useCampaign();
  const [amount, setAmount] = useState(0);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [donations, setDonations] = useState<any[]>([]);
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
        closed: campaign?.deadline.toNumber() < new Date().getTime() / 1000, // In seconds
      }));
      const presentCampaign = parsedRes.find(
        (e: any) => Number(e.pId) === Number(params.id)
      );

      setPresentCampaign(presentCampaign);
      setCampaignLoading(false);

      const donationsRes = await getDonations(Number(params.id));
      const donations = donationsRes[0].map((donator: string, i: number) => ({
        donator: donator,
        value: ethers.utils.formatEther(donationsRes[1][i].toString()),
      }));
      setDonations(donations);
    } catch (error) {
      setCampaignLoading(false);
      toast.error('Something went wrong. Contact admin');
    }
  };

  useEffect(() => {
    if (contract) {
      getAll();
    }
  }, [contract]);
  const donateHandler = async (id: number) => {
    if (amount <= 0) {
      return;
    }
    setLoading(true);
    donate(id, amount.toString())
      .then((res) => {
        if (res) {
          setLoading(false);

          toast.success('Successfully donated. Thanks for your donation');
        }
      })
      .catch((err) => {
        toast.error(
          'Failed. Please check your fund. If issue persists, contact the admin'
        );
      });
  };
  return (
    <Layout>
      <LoadingDialog
        open={loading}
        message="Your operation is being processed"
      />
      <div className=" max-w-[1100px] w-full  mx-auto pb-10">
        <div className="mt-10">
          {campaignLoading ? (
            <SkeletonLoading />
          ) : (
            <div className="px-6">
              <img
                className="w-full object-cover max-h-[500px]"
                src={presentCampaign?.image}
              />
              <div className="mt-5  flex flex-col items-center lg:flex-row gap-5 justify-between">
                <div className="lg:p-6 w-full">
                  <h1 className="text-2xl  font-bold">
                    {presentCampaign?.title}
                  </h1>
                  <h2 className="mt-7 text-xl font-bold">Creator:</h2>
                  <p className="text-lg mt-1 text-gray-300">
                    {presentCampaign?.name} ({presentCampaign?.owner})
                  </p>
                  <h2 className="mt-7 text-xl font-bold">Description:</h2>
                  <p className="text-lg mt-1 text-gray-300">
                    {presentCampaign?.description}
                  </p>
                  <h2 className="mt-7 text-xl font-bold">Deadline:</h2>
                  <p className="text-lg mt-1 text-gray-300">
                    {getDateString(presentCampaign?.deadline)}{' '}
                    {presentCampaign?.closed && '(Closed)'}
                  </p>
                  {donations.length == 0 ? <p className="mt-7 text-xl font-bold">
                      No donations yet. Be the first one to donate and kickstart
                      this campaign!
                    </p> : <>
                  <h2 className="mt-7 text-xl font-bold">{donations.length} Donation{donations.length > 1 && "s"}:</h2>
          
                    {donations.map((donation) => (
                      <div className="flex gap-4 mt-1">
                        <p className="text-gray-300">{donation.donator}</p>
                        <p className="text-gray-300">{donation.value} ETH</p>
                      </div>
                    ))}
                    </>}
                    
                  
                </div>
                {!presentCampaign?.closed && (
                  <div className="bg-input w-full max-w-[400px] p-6">
                    <h1 className="font-bold text-2xl pb-5  text-center">
                      Donate
                    </h1>
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Eg: 2.0"
                      label="Fund Amount"
                    />
                    <div className="p-4 mb-2 w-full text-gray-300 mt-5 bg-black">
                      The world needs more people like you. Keep up the good
                      work 👊
                    </div>
                    <Silder
                      defaultVal={Number(presentCampaign.amountCollected)}
                      max={Number(presentCampaign.target)}
                    />
                    <div className="flex text-xl justify-between mt-4 w-full">
                      <p>Raised: {presentCampaign.amountCollected}</p>

                      <p>Goal: {presentCampaign.target}</p>
                    </div>
                    <div className="flex text-l mt-1 justify-between w-full font-bold">
                      <p>{ getRemainingTime(presentCampaign?.deadline) }</p>
                    </div>
                    <div className="mt-4 w-full flex justify-stretch">
                      <Button
                        onClick={() => donateHandler(Number(params?.id))}
                        variant="primary"
                      >
                        Donate
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CampaignDetails;
