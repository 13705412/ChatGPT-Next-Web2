import React, { FC } from 'react';
import Modal from 'antd/lib/modal/Modal';

interface AnnouncementModalProps {
  title: string;
  content: JSX.Element;
  visible: boolean;
  onClose?: () => void;
}

const AnnouncementModal: FC<AnnouncementModalProps> = ({
  title,
  content,
  visible,
  onClose,
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onClose}
      footer={null}
      maskClosable={false}
    >
      {content}
    </Modal>
  );
};

export default AnnouncementModal;
