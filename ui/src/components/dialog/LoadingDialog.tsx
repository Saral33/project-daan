import * as Dialog from '@radix-ui/react-dialog';

import '../../styles/dialog.css';

interface DialogProps {
  open: boolean;

  message: string;
  btnAction?: () => void;
}
const LoadingDialog = ({
  open,

  message,
  btnAction,
}: DialogProps) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay " />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="text-3xl !text-center">
            Please Wait
          </Dialog.Title>
          <Dialog.Description className="DialogDescription !text-center !text-lg">
            {message}
            <div className="flex justify-center mt-5">
              <div className="loader "></div>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoadingDialog;
