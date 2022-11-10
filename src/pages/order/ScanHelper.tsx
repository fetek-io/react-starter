import React, { useEffect, useState, useCallback } from 'react';
import './CreateOrder.scss';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { useFocusTrap } from '@mantine/hooks';
import { ActionIcon, Button } from '@mantine/core';
import { IconScan } from '@tabler/icons';

interface Props {
  handleBarcode: (code: string) => void;
  barCode: string;
}
export default function ScanHelper({ handleBarcode, barCode }: Props) {
  const [opened, setOpened] = useState(false);
  const [tempProductCode, setTempProductCode] = useState('');

  const ref = useFocusTrap(true);

  useEffect(() => {
    if (opened) {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setOpened(false);
        }
      });
    } else {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'F9') {
          setOpened(true);
        }
      });
    }
  }, [opened]);

  const updateBarcode = useCallback(
    (e: ContentEditableEvent) => {
      if (e.target.value !== '<div><br></div><div><br></div>') {
        setTempProductCode(tempProductCode + e.target.value);
      } else {
        setTempProductCode('');
        handleBarcode(tempProductCode);
      }
    },
    [tempProductCode]
  );

  return (
    <>
      <Button
        onClick={() => {
          setOpened(true);
        }}
      >
        <ActionIcon className="text-white">
          <IconScan />
        </ActionIcon>{' '}
        (F9)
      </Button>
      {opened ? (
        <div
          className="scan-barcode modal-mask"
          ref={ref}
          // style={{ display: !opened ? 'none' : undefined }}
        >
          <h1 className="text-white">Bạn đang ở chế độ quét mã vạch (ESC để thoát)</h1>
          <div className="text-white">{barCode}</div>
          {/* <div className="text-barcode" contentEditable data-autofocus></div> */}
          <ContentEditable
            html={''}
            disabled={false}
            onChange={updateBarcode}
            className="text-barcode"
            data-autofocus
          />
          <div className="product-search-result"></div>
        </div>
      ) : undefined}
    </>
  );
}
