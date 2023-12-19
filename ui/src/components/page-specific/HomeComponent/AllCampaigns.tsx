import React from 'react';
import Silder from '../../slider/Silder';
import AvatarComponent from '../../avatar/Avatar';
import Button from '../../button/Button';

const AllCampaigns = () => {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-3 gap-8">
        <div className="card mt-8">
          <img
            src="https://lafeber.com/pet-birds/wp-content/uploads/2021/04/Ayam-Cemani-300x261.jpg"
            alt="Placeholder preview of starter"
          />
          <div className="card-text">
            <h2 className="gradient-text-1 text-xl font-bold">
              Save this big black cock
            </h2>
            <p>
              Please help us save this big black cock. It was rescued from
              butcher shop and now it needs new home.
            </p>
            <Silder defaultVal={1.2} max={6} />
            <div className="flex text-xl justify-between mt-4 w-full">
              <p>Raised: 0.0002</p>

              <p>Goal: 2.0000</p>
            </div>
            <div className="mt-5 flex flex-col gap-5">
              <div>
                <p>
                  Campaign By :{' '}
                  <span className="ml-3">
                    <AvatarComponent />
                  </span>{' '}
                  Cock Lover 69
                </p>
              </div>
              <Button variant="primary">Donate Now</Button>
            </div>
          </div>
        </div>
        <div className="card mt-8">
          <img
            src="https://lafeber.com/pet-birds/wp-content/uploads/2021/04/Ayam-Cemani-300x261.jpg"
            alt="Placeholder preview of starter"
          />
          <div className="card-text">
            <h2 className="gradient-text-1 text-xl font-bold">
              Save this big black cock
            </h2>
            <p>
              Please help us save this big black cock. It was rescued from
              butcher shop and now it needs new home.
            </p>
            <Silder defaultVal={1.2} max={6} />
            <div className="flex text-xl justify-between mt-4 w-full">
              <p>Raised: 0.0002</p>

              <p>Goal: 2.0000</p>
            </div>
            <div className="mt-5 flex flex-col gap-5">
              <div>
                <p>
                  Campaign By :{' '}
                  <span className="ml-3">
                    <AvatarComponent />
                  </span>{' '}
                  Cock Lover 69
                </p>
              </div>
              <Button variant="primary">Donate Now</Button>
            </div>
          </div>
        </div>
        <div className="card mt-8">
          <img
            src="https://lafeber.com/pet-birds/wp-content/uploads/2021/04/Ayam-Cemani-300x261.jpg"
            alt="Placeholder preview of starter"
          />
          <div className="card-text">
            <h2 className="gradient-text-1 text-xl font-bold">
              Save this big black cock
            </h2>
            <p>
              Please help us save this big black cock. It was rescued from
              butcher shop and now it needs new home.
            </p>
            <Silder defaultVal={1.2} max={6} />
            <div className="flex text-xl justify-between mt-4 w-full">
              <p>Raised: 0.0002</p>

              <p>Goal: 2.0000</p>
            </div>
            <div className="mt-5 flex flex-col gap-5">
              <div>
                <p>
                  Campaign By :{' '}
                  <span className="ml-3">
                    <AvatarComponent />
                  </span>{' '}
                  Cock Lover 69
                </p>
              </div>
              <Button variant="primary">Donate Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCampaigns;
