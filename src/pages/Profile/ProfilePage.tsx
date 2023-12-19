import { At, CalendarBlank, CurrencyBtc, Envelope } from 'phosphor-react';
import Layout from '../../layout/Layout';
import AllCampaigns from '../../components/page-specific/HomeComponent/AllCampaigns';

const ProfilePage = () => {
  return (
    <Layout>
      <div className="max-w-[1150px] mt-20 mx-auto">
        <div className="w-full">
          <div className="bg-input flex justify-between p-6 w-full">
            <div className="flex items-center gap-7">
              <div className="h-20 w-20 text-3xl bg-black rounded-full flex justify-center items-center">
                SG
              </div>
              <div>
                <p>Suraj Giri</p>
                <div className="text-gray-500 mt-1 flex gap-1 items-center">
                  <Envelope size={16} /> <p>Email: suraj69@gmail.com</p>
                </div>
                <div className="flex gap-1 items-center mt-2 text-gray-500">
                  <CalendarBlank size={16} /> <p>Total Campaings: 69</p>
                </div>
                <div className="flex gap-1 items-center mt-2 text-gray-500">
                  <CurrencyBtc size={16} /> <p>Total Donation: 69000</p>
                </div>
              </div>
            </div>
            <div className="text-gray-500 mt-5">
              <div className="flex gap-1 items-center">
                <At size={16} />
                <p>Meta Mask Address: Xwrtyrufsdwe890</p>
              </div>
            </div>
          </div>
          <div className="bg-input p-5 mt-10">
            <h2 className="font-bold text-lg">My Campaings (69)</h2>
            <AllCampaigns />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
