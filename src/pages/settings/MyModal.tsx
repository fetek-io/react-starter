import { Modal } from '@mantine/core';

interface Props {
  opened: boolean;
  handleVisible: (visible: boolean) => void;
}
export default function MyModal({ opened, handleVisible }: Props) {
  return (
    <Modal opened={opened} onClose={() => handleVisible(false)} title="Introduce yourself!">
      My modal
    </Modal>
  );
}
