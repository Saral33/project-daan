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

const CampaignDetails = () => {
  const [presentCampaign, setPresentCampaign] = useState<any>({});
  const [campaignLoading, setCampaignLoading] = useState(true);
  const { getCampaigns, contract, donate } = useCampaign();
  const [amount, setAmount] = useState(0);
  const params = useParams();
  const [loading, setLoading] = useState(false);
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
      const presentCampaign = parsedRes.find(
        (e: any) => Number(e.pId) === Number(params.id)
      );

      setPresentCampaign(presentCampaign);
      setCampaignLoading(false);
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
    donate(id, amount.toString())
      .then((res) => {
        if (res) {
          setLoading(false);

          toast.success('Successfully donated. Thanks for your donation');
        }
      })
      .catch((err) =>
        toast.error(
          'Failed. Please check your fund.If issue persists contact the admin'
        )
      );
  };
  return (
    <Layout>
      <LoadingDialog
        open={loading}
        message="Your operation is being processed"
      />
      <div className="w-full max-w-[1100px]  mx-auto pb-10">
        <div className="mt-10">
          {campaignLoading ? (
            <SkeletonLoading />
          ) : (
            <div>
              <img
                className="w-full object-cover max-h-[500px]"
                src={presentCampaign?.image}
              />
              <div className="mt-5 flex gap-5 justify-between">
                <div className="p-6">
                  <h1 className="text-2xl font-bold">
                    {presentCampaign?.title}
                  </h1>
                  <h2 className="mt-7 text-xl font-bold">Creator:</h2>
                  <p className="text-lg mt-2 text-gray-500">
                    {presentCampaign?.name} ({presentCampaign?.owner})
                  </p>
                  <h2 className="mt-7 text-xl font-bold">Description:</h2>
                  <p className="text-lg mt-2 text-gray-500">
                    {presentCampaign?.description}
                  </p>
                </div>
                <div className="bg-input w-full max-w-[300px] p-6">
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
                  <div className="p-4 w-full text-gray-500 mt-5 bg-black">
                    World Need more people like you. Keep up the good work 👊
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
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CampaignDetails;
