import Silder from '../../slider/Silder';

import Button from '../../button/Button';
import useCampaign from '../../../hooks/useCampaignHooks';
import { useNavigate } from 'react-router-dom';

const AllCampaigns = ({ data }: { data: any }) => {
  const { donate, contract, address } = useCampaign();
  const navigate = useNavigate();
  const donateHandler = async (id: number) => {
    donate(id, '0.01')
      .then((res) => {
        if (res) {
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mt-2">
      <div className="grid grid-cols-3 gap-8">
        {data?.map((el: any) => (
          <div key={el.pId} className="card mt-8">
            <img src={el.image} alt={el.title} />
            <div className="card-text">
              <div className="h-[150px] ">
                <h2
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                  }}
                  className="gradient-text-1 text-xl font-bold"
                >
                  {el.title}
                </h2>
                <div
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                  }}
                  className="overflow-hidden "
                >
                  {el.description}
                </div>
              </div>
              <div className="mt-5"></div>
              <Silder
                defaultVal={Number(el.amountCollected)}
                max={Number(el.target)}
              />
              <div className="flex text-xl justify-between mt-4 w-full">
                <p>Raised: {el.amountCollected}</p>

                <p>Goal: {el.target}</p>
              </div>
              <div className="mt-5 flex flex-col gap-5">
                <div>
                  <p className="w-full  break-words">
                    Campaign By :{' '}
                    <span className="">
                      {el?.name} ({el?.owner})
                    </span>{' '}
                  </p>
                </div>
                <Button
                  onClick={() => navigate(`/details/${el?.pId}`)}
                  variant="primary"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCampaigns;