import Layout from '../../layout/Layout';
import Silder from '../../components/slider/Silder';
import Button from '../../components/button/Button';
import AvatarComponent from '../../components/avatar/Avatar';
import AllCampaigns from '../../components/page-specific/HomeComponent/AllCampaigns';

const HomePage = () => {
  return (
    <Layout>
      <div className="w-full max-w-[1000px] mt-10 mx-auto pb-10">
        <div className="w-full grid grid-cols-2 gap-5">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="mt-4">
            <h1 className="text-2xl gradient-text-1 font-semibold">
              Help this pussy build his home
            </h1>
            <p className="mt-8">
              This is cute pussy who lost his home to unknown stranger so please
              donate so this pussy can find new home to stay.
            </p>
            <div className="mt-5">
              <Silder disabled={true} max={2} defaultVal={0.2} />
            </div>
            <div className="flex text-xl justify-between mt-4 w-full">
              <p>Raised: 0.0002</p>

              <p>Goal: 2.0000</p>
            </div>

            <div className="mt-5 flex flex-col gap-5">
              <div>
                <p>
                  Campaign By :{' '}
                  <span className="ml-3">
                    <AvatarComponent />{' '}
                  </span>{' '}
                  Pussy Lover 69
                </p>
              </div>
              <Button variant="primary">Donate Now</Button>
            </div>
          </div>
        </div>
        <div className="font-bold mt-20">All Campaign (69)</div>
        <AllCampaigns />
      </div>
    </Layout>
  );
};

export default HomePage;
