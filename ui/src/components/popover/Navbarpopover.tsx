import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import '../../styles/popover.css';
import { Link } from 'react-router-dom';
const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        className=" bg-gray-800 rounded-full p-2 "
        aria-label="Update dimensions"
      >
        SG
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        <div className="border-b-gray-500 hover:bg-primary cursor-pointer border-b px-1  py-2">
          <Link className="text-white" to="/profile">
            View Profile
          </Link>
        </div>
        <div className=" py-2 px-1 cursor-pointer hover:bg-primary ">
          Logout
        </div>

        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
