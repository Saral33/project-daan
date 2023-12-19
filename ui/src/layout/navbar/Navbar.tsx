import { MagnifyingGlass } from 'phosphor-react';
import PopoverDemo from '../../components/popover/Navbarpopover';
import Button from '../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="py-5">
      <div className="flex gap-10 items-center">
        <Link to="/" className="h-[70px]">
          <img className="h-full object-cover" src="/images/daan.png" />
        </Link>
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <input
              placeholder="Search Campaign Here"
              className="bg-[#1C1C24] w-[300px] text-sm  rounded-xl px-4 py-2 outline-none"
            />
            <button className="bg-primary h-8 py-1 px-2 rounded-lg hover:scale-105">
              <MagnifyingGlass size={20} className="text-white" />
            </button>
          </div>
          <div className="gap-3 flex ">
            <Button
              onClick={() => navigate('/create-campaign')}
              variant="primary"
            >
              Create Campaign
            </Button>
            <PopoverDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
