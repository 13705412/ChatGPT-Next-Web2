import React, { useState } from 'react';

const PopupNotice = () => {
  const [showNotice, setShowNotice] = useState(true);

  return (
    <div>
      {/* 点击关闭按钮时设置 showNotice 为 false */}
      {showNotice && (
        <div className="popup-notice">
          <p>这里是一条重要通知</p>
          <button onClick={() => setShowNotice(true)}>关闭</button>
        </div>
      )}
    </div>
  );
};

export default PopupNotice;
