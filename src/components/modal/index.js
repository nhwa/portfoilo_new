import React from 'react';
import "./style.css";

export const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'modal_container' : 'modal_container out'}>
      <div className="modal_background" onClick={close}>
          <div class="modal">
            <main>{props.children}</main>
          </div>
        </div>
    </div>
  );
};