import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '../../styles/dialog.css';

import Button from '../button/Button';

interface DialogProps {
  open: boolean;
  setOpen: (e: boolean) => void;
  title: string;
  message: string;
  btnAction?: () => void;
}
const DialogModal = ({
  open,
  setOpen,
  title,
  message,
  btnAction,
}: DialogProps) => {
  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            {message}
          </Dialog.Description>

          <div
            className="gap-4"
            style={{
              display: 'flex',
              marginTop: 25,
              justifyContent: 'flex-end',
            }}
          >
            <Dialog.Close asChild>
              <Button onClick={btnAction} variant="primary">
                Install Metamask
              </Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button variant="error">Cancel</Button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton cursor-pointer" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogModal;
